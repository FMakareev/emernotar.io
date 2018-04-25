import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {asyncComponent} from 'react-async-component';
import * as modules from '../modules/index';
import Layout from "../blocks/layout/layout";
import {PreLoader} from "../components/preloader/index";


const MainRoute = ({component: Component, ...rest}) => {
    try {
        if (rest.hasOwnProperty('routes') && rest.routes) {
            return (
                <Switch>
                    <Route exact={true} {...rest} render={matchProps => {
                        return (
                            <Component {...matchProps} />
                        )
                    }}/>
                    {
                        rest.routes.map((item, index) => (
                            <MainRoute
                                key={`${item.path}-${index}`}
                                exact={item.exact}
                                path={item.path}
                                component={item.component}
                                routes={item.children || null}
                            />))
                    }
                </Switch>
            )
        } else {
            return (
                <Route exact={true} {...rest} render={matchProps => {
                    return (
                        <Component {...matchProps} />
                    )
                }}/>
            )
        }

    } catch (error) {
        console.error(error);
    }

};

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
                component: asyncComponent({
                    resolve: modulesRoutes[i].load,
                    LoadingComponent: () => <PreLoader/>,
                    ErrorComponent: ({error}) => <div>{error.message}</div>
                }),

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
//
// export const RootRouter = () => (
//     <Layout>
//
//         <Route path="/">
//             <Switch>
//                 {
//                     routes.map((item, index) => {
//
//                             return (
//                                 <MainRoute
//                                     key={`${item.path}-${index}`}
//                                     exact={true}
//                                     path={item.path}
//                                     component={item.component}
//                                     routes={item.children || null}
//                                 />)
//                         }
//                     )
//                 }
//             </Switch>
//         </Route>
//
//     </Layout>
// );
