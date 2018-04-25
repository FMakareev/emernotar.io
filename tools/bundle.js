import webpack from 'webpack';
import {serverConfig} from "./config/webpack.server";
import {browserConfig} from "./config/webpack.client";


function bundle() {
    console.log('run bundle');
    return new Promise((resolve, reject) => {

        webpack([browserConfig(), serverConfig()]).run((err, stats) => {
            if (err) {
                return reject(err);
            }

            if (stats.hasErrors()) {
                return reject(new Error('Webpack compilation errors'));
            }
            return resolve(stats);
        });
    });
}
export default bundle;