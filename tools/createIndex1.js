import fs from 'fs';
import path from 'path';
import findIndex from 'lodash/findIndex';

/** TODO:
 * что б парсилка работала всегда и нормалььно
 */

/**
 * @description read param from console
 * @param {string} process.argv params split by ','
*/
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
    console.log(env);
    return env;
};

/**
 * @description create lit of dir with index.js
 * @param {string} src - path to dir
*/
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
 * @description create file index.js with modules into src dir
 * @param {array} modulesList - arr with name of modules
 * @param {string} src - path to dir
*/
const createIndex = async (modulesList,src) => {
    
    let indexJS = '';

    modulesList.map(module => {
        indexJS += `export {default as ${module}} from './${module}';`;
    });
    console.log(modulesList);
    console.log(indexJS);
    fs.writeFileSync(src + "index.js",indexJS);

};

/** 
 * @description init script runing other function
 */
 const init = async () => {
    console.info('run createIndex');

    const env = getCliParams();

    /** @desc path to dir */
    const src = process.cwd() + '/src/modules/';


    let modulesList = await getModulesList(src);


    for (let prop in env) {
        console.log('run for in env');
        switch (prop) {
            /**
             * @description create moduleList exclude params
             */
            case ('exclude') :
                console.log('exclude');
                let excludeModules = env[ prop ].split(',');
                console.log(excludeModules);

                modulesList = modulesList.filter(n => excludeModules.indexOf(n) === -1);

                break;
            /**
             * @description create moduleList include params
             */
            case ('include') :
                console.log('include');
                let includeModules = env[ prop ].split(',');
                let newModulesList = [];

                modulesList.filter(e => !~excludeModules.indexOf(e));
                newModulesList = includeModules.filter(
                    function(n){
                        return modulesList.indexOf(n) >= 0;
                });
                
                modulesList = newModulesList;
                break;
        }

    }
    await createIndex(modulesList,src);
}

export default init();
