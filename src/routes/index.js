import React, {Component} from 'react';
import {asyncComponent} from 'react-async-component';
import * as modules from '../modules/index';
import Layout from "../blocks/layout/layout";
import {PreLoader} from "../components/preloader/index";
import {getPageTitle} from "../utils/component/get_page_title";
import {Store} from '../store'



/**
 * @param {array} modulesRoutes - array routes
 * @param {array} newRoutes - empty array
 * @param {string} moduleName - name current module
 * @description - recursive generator of an array of application routing objects
 * */
const createRoutes = (modulesRoutes, newRoutes, moduleName) => {

    for (let i = 0; i < modulesRoutes.length; i++) {
        if (modulesRoutes[i].hasOwnProperty('load')) {
            newRoutes.push({
                exact: modulesRoutes[i].exact,

                name: modulesRoutes[i].name || modulesRoutes[i].title,
                path: modulesRoutes[i].path || console.error(`Error: in the module ${moduleName} in one of the routes there is no property "path".`),

                component: getPageTitle({Store})(asyncComponent({
                    resolve: modulesRoutes[i].load,
                    LoadingComponent: () => <PreLoader/>,
                    ErrorComponent: ({error}) =>{
                                console.log(error);
                        return  (<div>{error.message}</div>)
                    }
                })),

            })
        } else if (modulesRoutes[i].hasOwnProperty('component')) {
            newRoutes.push({
                exact: modulesRoutes[i].exact,
                name: modulesRoutes[i].name || modulesRoutes[i].title,
                path: modulesRoutes[i].path || console.error(`Error: in the module ${moduleName} in one of the routes there is no property "path".`),
                component: modulesRoutes[i].component
            })
        } else {
            console.error(`Error: in the module ${moduleName} there is no component at 
            the address ${modulesRoutes[i].path}. Make sure that you added the "load: () => import('...')" 
            property with the component import or React component. `);
        }

        if (modulesRoutes[i].hasOwnProperty('children')) {
            newRoutes[newRoutes.length - 1].children = [...createRoutes(modulesRoutes[i].children, [], moduleName)]
        }
    }
    return newRoutes
};

let routes = [];


Object.entries(modules).map(([key, value]) => {
    if (value.hasOwnProperty('routes')) {
        routes = [...routes, ...createRoutes(value.routes, [], key)];
    } else {
        console.error(`ERROR:in the module "${key}" there is no property "routes".
        Add the property "routes" to the module "${key}" and determine at least
        one route otherwise the module will be inaccessible to users.`)
    }
});

routes.push({
    exact: true,
    path: '/500',
    name: 'Internal Server Error',
    component: asyncComponent({
        resolve: () => import(/* webpackChunkName: "500",webpackPrefetch: true */ './errors/500'),
        LoadingComponent: () => <PreLoader/>,
    }),
});
routes.push({
    exact: true,
    path: '/payment-error',
    name: 'Payment Error',
    component: asyncComponent({
        resolve: () => import(/* webpackChunkName: "payment-error",webpackPrefetch: true */ './errors/payment-error'),
        LoadingComponent: () => <PreLoader/>,
    }),
});

routes.push({
    exact: true,
    path: '/404',
    name: 'Page not found',
    component: asyncComponent({
        resolve: () => import(/* webpackChunkName: "404",webpackPrefetch: true */ './errors/404'),
        LoadingComponent: () => <PreLoader/>,
    })
});

routes.push({
    exact: true,
    path: '*',
    name: 'Page not found',
    component: asyncComponent({
        resolve: () => import(/* webpackChunkName: "404",webpackPrefetch: true */ './errors/404'),
        LoadingComponent: () => <PreLoader/>,
    })
});

export const ConfigRouter = [
    {
        component: Layout,
        routes: routes
    }
];