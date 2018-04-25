// import path from 'path';
// import webpack from 'webpack';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import express from 'express';
// import browserSync from 'browser-sync';

// import {serverConfig} from "./config/webpack.server";
// import {browserConfig} from "./config/webpack.client";
import {getVariablesesEnvironment} from './lib/env';
import bundle from "./bundle";
import watch from "./watch";
import {initMessage} from "./initLocalizationFiles";
import {Clear} from "./clear";

// const clientCompiler = webpack(browserConfig);
// const serverCompiler = webpack(serverConfig);
// const isomorphicCompiler = webpack([browserConfig, serverConfig]);


const start = async () => {
    await Clear();
    await getVariablesesEnvironment();

    if (process.env.WATCH === "true") {
        await watch();

    } else if (process.env.MODE === 'production') {
        await bundle();
    }
    await initMessage();
};

start();

//
// const start = async () => {
//     const server = express();
//     let app;
//
//     server.use(express.static(path.resolve(__dirname, '../public')));
//
//
//     // https://github.com/webpack/webpack-dev-middleware
//     server.use(
//         webpackDevMiddleware(clientCompiler, {
//             publicPath: browserConfig.output.publicPath,
//             logLevel: 'silent',
//             watchOptions: {},
//         }),
//     );
//
//     // https://github.com/glenjamin/webpack-hot-middleware
//     server.use(webpackHotMiddleware(clientCompiler, {log: false}));
//
//     // https://github.com/webpack/webpack-dev-middleware
//     server.use(
//         webpackDevMiddleware(serverCompiler, {
//             publicPath: serverConfig.output.publicPath,
//             logLevel: 'silent',
//             watchOptions: {},
//         }),
//     );
//
//     // https://github.com/glenjamin/webpack-hot-middleware
//     server.use(webpackHotMiddleware(serverCompiler, {log: false}));
//
//
//     await webpack([browserConfig, serverConfig]).watch({}, (err,status) => {
//         console.log('err:', err);
//         // console.log('status:', status);
//         // console.log('stats:',stats);
//     })
//
//
//     // Launch the development server with Browsersync and HMR
//     await new Promise((resolve, reject) =>
//         browserSync.create().init(
//             {
//                 // https://www.browsersync.io/docs/options
//                 server: 'src/server/index.js',
//                 middleware: [server],
//                 open: true,
//                 // ...(isDebug ? {} : { notify: false, ui: false }),
//             },
//             (error, bs) => (error ? reject(error) : resolve(bs)),
//         ),
//     );
//
//
//     // server.listen(3000, () => console.log('Example app listening on port 3000!'))
//
//
//     return server;
// }

// // console.log(bundler);
// bundler.run((error, stats)=>{
//     console.log('stats',stats);
//     console.log('error',error);
// });


