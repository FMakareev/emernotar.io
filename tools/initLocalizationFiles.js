import findIndex from 'lodash/findIndex';
import fs from 'fs';
import path from 'path';
import fastXmlParser from 'fast-xml-parser';

// папка с исходниками
const srcPath = '../src';
// папка с асетами и переводами
const publicPath = '../public';

// путь до сохранения списка всех доступных языков
const languageListPath = '../src/store/reducers/localization/';
// список доступных языков
let languageList = [];
// данные всех модулей
const allModulesMessage = [];


const getCliParams = () => {
    const env = {};

    process.argv.map(item => {
        if (item.indexOf('--') !== -1) {
            env[ item.substring(2,item.indexOf('=')) ] = item.substring(item.indexOf('=') + 1);

            process.env[ item.substring(2,item.indexOf('=')).toUpperCase() ] = item.substring(
                item.indexOf('=') + 1,
            );
        }
        return null;
    });
    // console.log('getCliParams: ',env);
    return env;
};

/**
 * @return {array} - [[{"Data":""}]]
 * @description - Фильтруем json полученный из парсера xml
 * */
const filterJsonObj = jsonObj => {
    const newJsonObj = [];
    for (let i = 0 ; i < jsonObj.length ; i += 1) {
        if (typeof jsonObj[ i ].Cell === 'object') {
            newJsonObj.push(jsonObj[ i ].Cell);
        }
    }
    return newJsonObj;
};

/**
 * @param {string} moduleName - название модуля
 * @param {array} module - содержимое дирректори модуля
 * @description - Поиск файла с локализацией в модуле
 * */
const findXMLTranslate = (moduleName,module) => {
    let result = null;
    /** @desc итерируем массив содержимого папки модуля */
    for (let a = 0 ; a < module.length ; a += 1) {
        /** @desc ищем файл с локализацией */
        if (module[ a ].indexOf('translate.xml') >= 0) {

            /** @desc Читаем файл локализации*/
            const xmlData = fs.readFileSync(
                path.resolve(__dirname,`${srcPath}/modules/${moduleName}/${module[ a ]}`),
            );
                // console.log('(xmlData.toString()', xmlData.toString());
            /** @desc конвертируем файл локализации в JSON и фильтруем */
            const jsonData = filterJsonObj(
                fastXmlParser.parse(xmlData.toString(),{
                    ignoreNonTextNodeAttr: true,
                    ignoreTextNodeAttr: true,
                    ignoreNameSpace: true,
                    ignoreRootElement: true,
                    textNodeConversion: true,
                    // textAttrConversion : false,
                    arrayMode: false,
                }).Workbook.Worksheet[0].Table.Row,
            );

            /** @type {object} result
             * @type {object[][]} result.data - массив массивов с данными словарей
             * @type {object[].<Object>} result.translate - массив объектов первой строки таблицы
             * @desc удалить лишние поля из объекта */
            result = {
                data: jsonData.slice(1),
                translate: jsonData[ 0 ],
            };
        }
    }

    return result;
};

/**
 * @description - Поиск package.json в папке модуля
 * */
const findPackageJson = (moduleName,module) => {
    let result = null;
    // итерируем массив содержимого папки модуля
    for (let a = 0 ; a < module.length ; a += 1) {
        if (module[ a ].indexOf('package.json') >= 0) {
            result = JSON.parse(
                fs.readFileSync(
                    path.resolve(__dirname,`${srcPath}/modules/${moduleName}/${module[ a ]}`),
                    'utf8',
                ),
            );
        }
    }
    return result;
};

/**
 * @param {object} packageJson -
 * @param {string} packageJson.name -
 * @param {array[]} packageJson.translate -
 * @description - Получить язык по умолчанию модуля
 * */
const getDefaultModuleTranslate = packageJson => {
    const {
        translate: moduleTranslate, // списко локализаций объявленных в package json
    } = packageJson;
    return findIndex(moduleTranslate,item => item.active && item.default);
};
/**
 * @param {object} translateJson - словарь
 * @param {array[]} translateJson.data - данные словаря
 * @param {array.<Object>} translateJson.translate - данные с колличеством языков
 * @param {array.<Object>} messagesArray - конфиг словарей одуля
 * @param {string} moduleName - имя модуля
 * @description - создание словаря
 * */
const createDictionary = (translateJson,messagesArray,moduleName) => {
    // console.info('run createDictionary... translateJson: ',translateJson);
    // console.info('run createDictionary... messagesArray: ',messagesArray);
    // console.info('run createDictionary... moduleName);: ',moduleName);
    // console.info('run createDictionary... getCliParams);: ',process.env);
    // console.info('run createDictionary... getCliParams);: ',typeof process.env.modulePrefix);

    messagesArray.map(item => {
        for (let i = 1 ; i < translateJson.translate.length ; i += 1) {
            const translateItem =
                translateJson.translate[ i ] && translateJson.translate[ i ].Data
                    ? translateJson.translate[ i ].Data
                    : null;

            if (translateItem) {
                if (item.ISO_Code.toUpperCase() === translateItem.toUpperCase()) {
                    for (let a = 0 ; a < translateJson.data.length ; a += 1) {
                        const translateData = translateJson.data[ a ];
                        if( process.env.modulePrefix === 'true' ){
                            /* eslint no-param-reassign: "error" */
                            item.message[ `${moduleName}_${translateData[ 0 ].Data}` ] =
                                translateData[ i ] && translateData[ i ].Data
                                    ? translateData[ i ].Data
                                    : translateData[ 0 ].Data;
                        } else {
                            /* eslint no-param-reassign: "error" */
                            item.message[ `${translateData[ 0 ].Data}` ] =
                                translateData[ i ] && translateData[ i ].Data
                                    ? translateData[ i ].Data
                                    : translateData[ 0 ].Data;
                        }

                    }
                }
            } else {
                // console.info('Empty key ISO_Code in XML or package.json');
            }
        }
        return null;
    });

    return messagesArray;
};

/**
 * @param {object} packageJson
 * @param {object} translateJson
 * @param {number} defaultTranslate
 * @description - создание списка с локализацией для модуля
 * */
const createMessageArray = (packageJson,translateJson,defaultTranslate) => {
    const {
        translate: moduleTranslate, // списко локализаций объявленных в package json
        name: moduleName, // Название модуля
    } = packageJson;
    const {
        translate, // Список доступных в XML языков
    } = translateJson;

    const messageArray = [];
    moduleTranslate.map(itemParent => {
        if (itemParent.active) {
            translate.map(({Data: ISOCodeChild}) => {
                if (ISOCodeChild) {
                    if (itemParent.ISO_Code.toUpperCase() === ISOCodeChild.toUpperCase()) {
                        messageArray.push({
                            ISO_Code: itemParent.ISO_Code.toUpperCase(),
                            language: itemParent.language,
                            defaultTranslate: moduleTranslate[ defaultTranslate ].ISO_Code.toUpperCase(),
                            moduleName,
                            message: {},
                        });
                    } else if (ISOCodeChild.toUpperCase() !== 'Key'.toUpperCase()) {
                        // console.info(
                        //     `In module ${moduleName} translate "${ISOCodeChild}" not announced in package.json.`,
                        // );
                    }
                }
                return null;
            });
        } else {
            // console.info(
            //     `In module ${moduleName} trISO_Codeanslate "${itemParent.ISO_Code}" is disabled.`,
            // );
        }
        return null;
    });

    return messageArray;
};

/**
 * @param {object} packageJson - соде
 * @param {string} packageJson.name -
 * @param {string} packageJson.translate -
 *
 * @param {object} translateJson -
 * @param {array} translateJson.data -
 * @param {array} translateJson.translate -
 * @return {array} messagesArray -
 * @description - собираем словари для модуля
 * */
const initModuleTranslate = (packageJson,translateJson) => {
    const {
        name: moduleName, // Название модуля
    } = packageJson;

    /** @type {number} - индекс языка по умолчанию */
    let defaultTranslate = getDefaultModuleTranslate(packageJson);

    defaultTranslate = defaultTranslate === -1 ? 0 : defaultTranslate;
    /** @type {array.<Object>} - массив конфигурация языков*/
    let messagesArray = createMessageArray(packageJson,translateJson,defaultTranslate);

    if (messagesArray.length) {
        messagesArray = createDictionary(translateJson,messagesArray,moduleName);
        allModulesMessage.push(messagesArray);
        return messagesArray;
    } else {
        // console.error(
        //     `Module ${moduleName} does not contain localization files.  Please create a localization file for your module otherwise it will not be included in the system.`,
        // );
    }
};

/**
 * @param {array} modules - Массив названий файлов и папок хранящихся в папке modules
 * @description - обработка XML и Json, базовая валидация, очистка от лишних параметров
 * */
const normalizeTranslateFiles = modules => {
    for (let i = 0 ; i < modules.length ; i += 1) {
        /** @desc проверка не является ли строка названием файла */
        if (fs.statSync(path.resolve(__dirname,`${srcPath}/modules/${modules[ i ]}`)).isDirectory()) {
            /** @type {array} - получаем содержимое папки модуля */
            const module = fs.readdirSync(path.resolve(__dirname,`${srcPath}/modules/${modules[ i ]}`));

            if (module && module.length) {

                const translateJson = findXMLTranslate(modules[ i ],module);
                if (translateJson) {
                    /** @desc содержимое файла package.json текущего модуля */
                    const packageJson = findPackageJson(modules[ i ],module);
                    if (packageJson && packageJson.translate && packageJson.translate.length) {
                        initModuleTranslate(packageJson,translateJson);
                    } else {
                        // console.error(`Can not find file "package.json" in ${modules[ i ]}`);
                    }
                } else {
                    // console.error(`Can not find file "translate.xml" in ${modules[ i ]}`);
                }
            } else {
                // console.error(`Folder "${modules[ i ]}"  is empty`);
            }
        }
    }
};

/**
 * @description - генерация и запись файла со списком доступных языков
 * */
const createLanguageListFile = (languageListFile,allModulesMessageFile) => {
    allModulesMessageFile.map(item => {
        if (item.length) {
            item.map(childItem => {
                if (languageListFile.length) {
                    const result = findIndex(
                        languageListFile,
                        langItem => childItem.ISO_Code === langItem.code,
                    );
                    if (result === -1) {
                        languageListFile.push({name: childItem.language,code: childItem.ISO_Code});
                    }
                } else {
                    languageListFile.push({name: childItem.language,code: childItem.ISO_Code});
                }

                return null;
            });
        }
        return null;
    });

    const languageListDirectoryPath = path.resolve(__dirname,languageListPath);
	console.log('languageListFile: ', languageListFile);
	fs.writeFileSync(
        `${languageListDirectoryPath}/localization.json`,
        JSON.stringify(languageListFile),
    );

    return languageListFile;
};

const creatingLocalizationFiles = data => {
    console.info('run creatingLocalizationFiles...');
    const messagesDirectoryPath = path.resolve(__dirname,`${publicPath}/messages/`);
	// console.log('messagesDirectoryPath: ', messagesDirectoryPath);
	  if (!fs.existsSync(messagesDirectoryPath)) {
        // console.info('Create folder messages...', path.resolve(__dirname,`${publicPath}`));
        // fs.mkdirSync(path.resolve(__dirname,`${publicPath}`));
        fs.mkdirSync(messagesDirectoryPath);
    } else {
        console.info(`Directory: ${messagesDirectoryPath} created. `);
    }
    const messagesList = {};

    data.map(itemParent => {
        itemParent.map(itemChild => {
            messagesList[ itemChild.ISO_Code ] = Object.assign({},messagesList[ itemChild.ISO_Code ],{
                ...itemChild.message,
            });
            return null;
        });
        return null;
    });
    Object.entries(messagesList).map(([ key,value ]) => {
        fs.writeFileSync(`${messagesDirectoryPath}/${key.toUpperCase()}.json`,JSON.stringify(value));
        return null;
    });
};


/**
 * @params {array} modules - массив содержимого дирректории
 * @return {array} - отфильтрованный массив
 * @desc метод фильтрует массив содиржимого диррекории модулей и выполянет
 * либо include модулей либо exclude
 * */
const moduleListFilter = (modules) => {
    let newArrayModules = [];
    for (let prop in  process.env) {
        switch (prop) {
            case ('TRANSLATEEXCLUDE') :
                // console.log('TRANSLATEEXCLUDE');
                let excludeModules = process.env[ prop ].split(',');
                newArrayModules = modules.filter(n => excludeModules.indexOf(n) === -1);
                break;
            case ('TRANSLATEINCLUDE') :
                // console.log('TRANSLATEINCLUDE');
                let includeModules = process.env[ prop ].split(',');
                modules.filter(e => !~includeModules.indexOf(e));
                newArrayModules = includeModules.filter(
                    function(n){
                        return modules.indexOf(n) >= 0;
                    });
                break;
            case ('pathModule') :
                newArrayModules = modules;

                break;

        }

    }
    return newArrayModules;
};


/**
* @description -
* */
export const initMessage = () =>
    new Promise((resolve,reject) => {
        try {
            getCliParams();
            console.info('run initMessage...');
            /** @type {array} - получаем массив названий всех файлов и папок в папке с модулями*/
            let modules = moduleListFilter(fs.readdirSync(path.resolve(__dirname,`${srcPath}/modules`)));

            // console.log(modules);
            normalizeTranslateFiles(modules);

            languageList = createLanguageListFile(languageList,allModulesMessage);

            /**
             * @description проверка во всех ли модулях есть переводы для доступных языков, если нет
             * добавляем вместо отсутствующего языка язык по умолчанию но в объекте ISO_Code и language
             * берется из отсутствующего языка
             * */
            languageList.map(({code,name}) => {
                allModulesMessage.map(moduleLang => {
                    if (findIndex(moduleLang,item => item.ISO_Code === code) === -1) {
                        const defaultTranslateIndex = findIndex(
                            moduleLang,
                            item => item.defaultTranslate === item.ISO_Code,
                        );
                        moduleLang.push({
                            ...Object.assign({},moduleLang[ defaultTranslateIndex ],{
                                ISO_Code: code,
                                language: name,
                            }),
                        });
                    }
                    return null;
                });
                return null;
            });
            creatingLocalizationFiles(allModulesMessage);

            resolve(true);
        } catch (err) {
            console.error('ERROR! initMessage',err);
            reject(err);
        }
    });

export default initMessage();
