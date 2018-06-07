import fs from 'fs';
import path from 'path';
import findIndex from 'lodash/findIndex';


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
    return env;
};

/**
 * @param {string} src - путь к целевой дирректории
 * @desc создание списка дирректорий которые имеют свой index.js */
const getModulesList = (src) => {
    const modulesList = [];
    return new Promise((resolve,reject) => {
        try {
            fs.readdir(src,(err,data) => {
                if (err) {
                    console.log(err);
                }
                data.map(moduleName => {
                    if (fs.statSync(src + moduleName).isDirectory()) {
                        const dirContent = fs.readdirSync(src + moduleName);
                        if (dirContent.filter((dirItem) => dirItem === 'index.js').length) {
                            modulesList.push(moduleName);
                        } else {
                            console.warn(`WARNING!: folder ${moduleName} is empty.`)
                        }
                    } else if (moduleName === 'index.js') {
                        fs.unlinkSync(src + moduleName);
                    }
                });
                resolve(modulesList);
            })
        } catch (err) {
            console.log(err);
            reject(err);
        }
    })


};

/**
 * @param {array} modulesList - массив с названиями модулей
 * @param {string} src - путь к целевой дирректории
 * @desc создание списка дирректорий которые имеют свой index.js */
const createIndex = async (modulesList,src) => {

    let indexJS = '';

    modulesList.map(module => {
        indexJS += `export {default as ${module}} from './${module}';`;
    });

    fs.appendFileSync(src + "index.js",indexJS);

};

/** @desc */
export const init = async () => {
    console.info('run createIndex');
    console.log(getCliParams());

    const env = getCliParams();

    /** @desc путь к целевой дирректории */
    const src = process.cwd() + '/src/modules/';


    let modulesList = await getModulesList(src);


    for (let prop in env) {

        switch (prop) {
            case ('exclude') :
                console.log('exclude');
                let excludeModules = env[ prop ].split(',');
                excludeModules.map(excludeModule => {
                    if (findIndex(modulesList,module => module === excludeModule) !== -1) {
                        modulesList.splice(findIndex(modulesList,module => module === excludeModule), 1);
                    } else {
                        console.warn(`WARNING: module with name '${excludeModule}' does not exist.`)
                    }
                });

                break;
            case ('include') :
                console.log('include');
                let includeModules = env[ prop ].split(',');
                let newModulesList = [];
                includeModules.map(includeModule => {
                    if (findIndex(modulesList,module => module === includeModule) !== -1) {
                        newModulesList = [...newModulesList, ...modulesList.splice(findIndex(modulesList,module => module === includeModule), 1)]
                    } else {
                        console.warn(`WARNING: module with name '${includeModule}' does not exist.`)
                    }
                });
                modulesList = newModulesList;
                break;
            case ('pathModule') :
                // TODO: придумать как использовать выше по коду
                break;

        }

    }


    await createIndex(modulesList,src);
};

export default init();
