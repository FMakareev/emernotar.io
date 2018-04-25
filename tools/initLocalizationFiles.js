import trim from 'lodash/trim';

import findIndex from 'lodash/findIndex';
import express from 'express';
import fs from 'fs';
import path from 'path';
import fastXmlParser from 'fast-xml-parser';

// TODO: добавить проверку наличия все ключей в в разных локализациях
// для разработки
const app = express();

// папка сисходниками
const srcPath = '../src';
// папка с асетами и переводами
const publicPath = '../public';

// путь до сохранения списка всех доступных языков
const languageListPath = '../src/store/reducers/localization/';
// список доступных языков
let languageList = [];
// данные всех модулей
const allModulesMessage = [];
/*
* @description - константа отвечает за конечный формат файлой локализации,
* true - локализация будет записана для каждого модуля в папку с названием модуля
* false - генерирует для каждого языка один общий файл с переводами
* */
const splitForModules = findIndex(process.argv, (item) => item === '--splitForModules') !== -1;
/*
* @description - Фильтруем json полученный из парсера xml
* */
const filterJsonObj = (jsonObj) => {
    let newJsonObj = [];
    for (let i = 0; i < jsonObj.length; i++) {
        if (typeof jsonObj[i]["Cell"] === 'object') {
            newJsonObj.push(jsonObj[i]["Cell"])
        }
    }
    return newJsonObj;
};


/*
* @param (string) moduleName
* @param (array) module
* @description - Поиск файла с локализацией в модуле
* */
const findXMLTranslate = (moduleName, module) => {
    let result = null;
    // итерируем массив содержимого папки модуля
    for (let a = 0; a < module.length; a++) {
        // ищем файл с локализацией
        if (module[a].indexOf("translate.xml") >= 0) {
            // Читаем фал локализации
            let xmlData = fs.readFileSync(path.resolve(__dirname, srcPath + '/modules/' + moduleName + '/' + module[a]));
            // конвертируем файл локализации в JSON и фильтруем
            let jsonData = filterJsonObj(fastXmlParser.parse(xmlData.toString(), {
                ignoreNonTextNodeAttr: true,
                ignoreTextNodeAttr: true,
                ignoreNameSpace: true,
                ignoreRootElement: true,
                textNodeConversion: true,
                // textAttrConversion : false,
                arrayMode: false
            })["Workbook"]["Worksheet"]["Table"]["Row"]);

            // удалить лишние поля из объекта
            result = {
                data: jsonData.slice(1),
                translate: jsonData[0],
            };
        }
    }

    return result;
};


/*
* @description - Поиск package.json в папке модуля
* */
const findPackageJson = (moduleName, module) => {
    let result = null;
    // итерируем массив содержимого папки модуля
    for (let a = 0; a < module.length; a++) {

        if (module[a].indexOf("package.json") >= 0) {
            result = JSON.parse(fs.readFileSync(path.resolve(__dirname, srcPath + '/modules/' + moduleName + '/' + module[a]), 'utf8'));
        }
    }
    return result;
};

/*
* @param (object) packageJson -
* @param (string) packageJson.name -
* @param (array) packageJson.translate -
*
* @param (object) translateJson -
* @param (array) translateJson.data -
* @param (array) translateJson.translate -
* @description - Получить язык по умолчанию модуля
* */
const getDefaultModuleTranslate = (packageJson) => {
    const {
        translate: moduleTranslate, // списко локализаций объявленных в package json
        name: moduleName // Название модуля
    } = packageJson;
    return findIndex(moduleTranslate, (item) => item.active && item.default);
};

/*
* @description - создание словаря
* */
const createDictionary = (translateJson, messagesArray, moduleName) => {

    console.log(translateJson, messagesArray);
    messagesArray.map((item, index) => {

        for (let i = 1; i < translateJson.translate.length; i++) {
            // console.log('translateJson.translate[i]', translateJson.translate[i]);
            let translateItem = translateJson.translate[i] && translateJson.translate[i].Data ? translateJson.translate[i].Data : null;

            if (translateItem) {
                if (item['ISO Code'].toUpperCase() === translateItem.toUpperCase()) {
                    for (let a = 0; a < translateJson.data.length; a++) {
                        let translateData = translateJson.data[a];
                        // item.message.push({
                        //     id: translateData[0]["Data"],
                        //     message: translateData[i] && translateData[i]["Data"] ? translateData[i]["Data"] : translateData[0]["Data"],
                        // })

                        // add new word key
                        item.message[`${moduleName}_` + translateData[0]["Data"]] = translateData[i] && translateData[i]["Data"] ? translateData[i]["Data"] : translateData[0]["Data"];

                    }
                }
            } else {
                console.log('Empty key ISO code in XML or package.json')
            }
        }
    });

    return messagesArray;
};

/*
* @description - создание списка с локализацией для модуля
* */
const createMessageArray = (packageJson, translateJson, defaultTranslate) => {
    const {
        translate: moduleTranslate, // списко локализаций объявленных в package json
        name: moduleName // Название модуля
    } = packageJson;
    const {
        data, // Словарь из xml перевода
        translate, // Список доступных в XML языков
    } = translateJson;

    const messageArray = [];
    moduleTranslate.map((itemParent) => {
        if (itemParent.active) {
            translate.map(({Data: ISOCodeChild}) => {
                if (ISOCodeChild) {
                    if (itemParent['ISO Code'].toUpperCase() === ISOCodeChild.toUpperCase()) {
                        messageArray.push({
                            "ISO Code": itemParent['ISO Code'].toUpperCase(),
                            "language": itemParent['language'],
                            "defaultTranslate": moduleTranslate[defaultTranslate]['ISO Code'].toUpperCase(),
                            "moduleName": moduleName,
                            message: {},
                        })
                    } else if (ISOCodeChild.toUpperCase() !== 'Key'.toUpperCase()) {
                        console.info(`In module ${moduleName} translate "${ISOCodeChild}" not announced in package.json.`);
                    }
                }
            })
        } else {
            console.info(`In module ${moduleName} translate "${itemParent['ISO Code']}" is disabled.`);
        }
    });

    return messageArray;
};

const creatingFilesWithLanguagesForModules = (moduleDictionary, moduleName) => {
    console.log('run creatingFilesWithLanguagesForModules');
    const messages_directory_path = path.resolve(__dirname, `${publicPath}/messages/`);

    if (!fs.existsSync(messages_directory_path)) {
        console.log('Create folder messages...');
        fs.mkdirSync(path.resolve(__dirname, `${publicPath}`));
        fs.mkdirSync(messages_directory_path);
    } else {
        console.log('Directory created.');
    }

    console.log('moduleDictionary:',moduleDictionary);

    moduleDictionary.map((item) => {
        const messages_dir = path.resolve(__dirname, `${publicPath}/messages/${moduleName}`);
        if (!fs.existsSync(messages_dir)) {
            fs.mkdirSync(path.resolve(__dirname, `${publicPath}`));
            fs.mkdirSync(messages_dir);
        }
        fs.writeFileSync(`${messages_dir}/${item['ISO Code'].toUpperCase()}.json`, JSON.stringify(item));
        if (item['ISO Code'] === item.defaultTranslate) {
            fs.writeFileSync(`${messages_dir}/defaultTranslate.json`, JSON.stringify(item));
        }

    })

};

/*
* @param (object) packageJson -
* @param (string) packageJson.name -
* @param (array) packageJson.translate -
*
* @param (object) translateJson -
* @param (array) translateJson.data -
* @param (array) translateJson.translate -
* @description - собираем словари для модуля
* */
const initModuleTranslate = (packageJson, translateJson) => {
    const {
        translate: moduleTranslate, // списко локализаций объявленных в package json
        name: moduleName // Название модуля
    } = packageJson;
    const {
        data, // Словарь из xml перевода
        translate, // Список доступных в XML языков
    } = translateJson;

    let defaultTranslate = getDefaultModuleTranslate(packageJson);
    defaultTranslate = defaultTranslate === -1 ? 0 : defaultTranslate;
    let messagesArray = createMessageArray(packageJson, translateJson, defaultTranslate);


    if (messagesArray.length) {
        messagesArray = createDictionary(translateJson, messagesArray, moduleName);
        console.log('moduleName,messagesArray:', moduleName, messagesArray);
        allModulesMessage.push(messagesArray);
        if (splitForModules) {
            // creatingFilesWithModuleLanguages(moduleDictionary, moduleName);
        } else {

        }

    } else {
        console.error(`Module ${moduleName} does not contain localization files.  Please create a localization file for your module otherwise it will not be included in the system.`);
    }
};


/*
* @param (array) - Массив названий файлов и папок хранящихся в папке modules
* @description - обработка XML и Json, базовая валидация, очистка от лишних параметров
* */
const normalizeTranslateFiles = (modules) => {
    for (let i = 0; i < modules.length; i++) {
        // проверка не является ли строка названием файла
        if (modules[i].indexOf(".js") === -1) {
            // получаем содержимое папки модуля
            let module = fs.readdirSync(path.resolve(__dirname, srcPath + '/modules/' + modules[i]));

            if (module && module.length) {
                console.log('module', module);
                let translateJson = findXMLTranslate(modules[i], module);

                if (translateJson) {
                    // console.log(`'translateJson ${modules[i]}: '`, translateJson);

                    let packageJson = findPackageJson(modules[i], module);
                    if (packageJson && packageJson.translate && packageJson.translate.length) {
                        // console.log(`'packageJson ${modules[i]}: '`, packageJson);

                        initModuleTranslate(packageJson, translateJson);


                    } else {
                        console.error(`Can not find file "package.json" in ${modules[i]}`);
                    }

                } else {
                    console.error(`Can not find file "translate.xml" in ${modules[i]}`);
                }

            } else {
                console.error(`Folder "${modules[i]}"  is empty`);
            }

        }
    }
};

/*
* @description - генерация и запись файла со списком доступных языков
* */
const createLanguageListFile = (languageList, allModulesMessage) => {

    allModulesMessage.map((item) => {
        if (item.length) {
            item.map((childItem) => {
                if (languageList.length) {
                    let result = findIndex(languageList, (item) => childItem['ISO Code'] === item['code']);
                    if (result === -1) {
                        languageList.push({name: childItem['language'], code: childItem['ISO Code']})
                    }
                } else {
                    languageList.push({name: childItem['language'], code: childItem['ISO Code']})
                }

                if (childItem) {

                }

            })
        }
        // console.log('languageList', languageList);
    });


    const languageListDirectoryPath = path.resolve(__dirname, languageListPath);

    fs.writeFileSync(languageListDirectoryPath + '/localization.json', JSON.stringify(languageList));

    return languageList;
};


const creatingLocalizationFiles = (data) => {
    console.log('creatingLocalizationFiles:', data);
    // const messages_directory_path = path.resolve(__dirname, `${languageListPath}/messages`);
    const messages_directory_path = path.resolve(__dirname, `${publicPath}/messages/`);
    if (!fs.existsSync(messages_directory_path)) {
        console.log('Create folder messages...');
        fs.mkdirSync(path.resolve(__dirname, `${publicPath}`));
        fs.mkdirSync(messages_directory_path);
    } else {
        console.log('Directory created.');
    }
    let messagesList = {};

    data.map((itemParent) => {
        itemParent.map((itemChild) => {
            messagesList[itemChild['ISO Code']] = Object.assign(
                {},
                messagesList[itemChild['ISO Code']],
                {
                    ...itemChild.message
                }
            )
        })
    });
    console.log('messagesList: ', messagesList);
    Object.entries(messagesList).map(([key, value]) => {
        fs.writeFileSync(`${messages_directory_path}/${key.toUpperCase()}.json`, JSON.stringify(value));
    })

    // fs.writeFileSync(`${messages_dir}/${item['ISO Code'].toUpperCase()}.json`, JSON.stringify(item));

}

/*
* @description -
* */
export const initMessage = () => new Promise((resolve, reject) => {
    try {
        console.info('run: initMessage');
        // получаем массив названий всех файлов и папок в папке с модулями
        const modules = fs.readdirSync(path.resolve(__dirname, srcPath + '/modules'));

        normalizeTranslateFiles(modules);

        languageList = createLanguageListFile(languageList, allModulesMessage);

        /*
        * @description проверка во всех ли модулях есть переводы для доступных языков, если нет
        * добавляем вместо отсутствующего языка язык по умолчанию но в объекте ISO Code и language
        * берется из отсутствующего языка
        * */
        languageList.map(({code, name}, index) => {
            allModulesMessage.map((moduleLang, index) => {
                if (findIndex(moduleLang, (item) => item['ISO Code'] === code) === -1) {
                    const defaultTranslateIndex = findIndex(moduleLang, (item) => item['defaultTranslate'] === item['ISO Code']);
                    moduleLang.push({
                        ...Object.assign({},
                            moduleLang[defaultTranslateIndex],
                            {
                                'ISO Code': code,
                                language: name
                            })
                    })
                }
            })
        });
        creatingLocalizationFiles(allModulesMessage);

        resolve(true);
    } catch (err) {
        console.error('ERROR! initMessage', err);
        reject(err)
    }
});

export default initMessage();

//
// app.listen(4000, () => {
//     console.clear();
//     console.log(`RUN SERVER, RUN! SERVER PORT 4000`);
//     initMessage();
// });
