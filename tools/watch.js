import webpack from 'webpack';
import {serverConfig} from "./config/webpack.server";
import {browserConfig} from "./config/webpack.client";
import {initMessage} from "./initLocalizationFiles";
import nodemon from 'nodemon';





function watch() {
    console.log('run watch');
    // let runServer = false;
    // return new Promise((resolve, reject) => {


        webpack([browserConfig(), serverConfig()]).watch({}, (err, status) => {
            console.log('-----webpack reload...',);
            // if (!runServer) {
            //     nodemon({script: 'public/server.js'}).on('start', function () {
            //         console.log('nodemon started');
            //     }).on('crash', function () {
            //         console.log('script crashed for some reason');
            //     });
            // } else {
            //     // force a restart
            //     nodemon.emit('restart');
            // }
            if (err) {
                return err;
            }

            if (status.hasErrors()) {
                return new Error('Webpack compilation errors')
            }
            console.log(status);
        })

    // });
}

export default watch;