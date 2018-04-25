// import {manifest} from '../../modules/manifest';
import findIndex from 'lodash/findIndex';
import * as modules from '../../modules';

const createModuleManifest = () => {
    try {
        const manifest = {};

        const test = (routes, newRoutes = [], parent) => {
            for (let i = 0; i < routes.length; i++) {

                if (parent !== routes[i].path) {
                    if (parent === '/') {
                        newRoutes.push(routes[i].path.replace(/\/:[A-Za-z]\w+/g, ''));
                    } else {
                        newRoutes.push(parent + routes[i].path.replace(/\/:[A-Za-z]\w+/g, ''));
                    }
                }

                if (routes[i].hasOwnProperty('children')) {
                    newRoutes.push(...test(routes[i].children, [], newRoutes[newRoutes.length - 1].replace(/\/:[A-Za-z]\w+/g, '')))
                }

            }
            return newRoutes;
        };

        for (let prop in modules) {
            if(!Array.isArray(modules[prop].routes)) {
                manifest[prop] = {
                    moduleName: prop,
                    routes: [modules[prop].routes.path, ...test(modules[prop].routes.children, [], modules[prop].routes.path)],
                }
            } else if(Array.isArray(modules[prop].routes)) {
                modules[prop].routes.map((item, index) => {
                    manifest[prop] = {
                        moduleName: prop,
                        routes: [item.path, ...test(item.children, [], item.path)],
                    }
                })
            }
        }
        return manifest
    } catch (err) {
        console.error(err);
    }
}
export const getModuleName = (url) => {
    if(!url) return false;
    const URL = url.replace(/\?[A-Za-z0-9]\w+=[A-Za-z0-9]\w+/g, '');
    const manifest = createModuleManifest();
    console.log('manifest:',manifest);
    for (let prop in manifest) {
        if (findIndex(manifest[prop].routes, (item) => item === URL) >= 0) {
            return prop;
        }
    }
    return false;
}