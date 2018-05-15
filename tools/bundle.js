import webpack from 'webpack';
import {serverConfig} from "./config/webpack.server";
import {browserConfig} from "./config/webpack.client";


function bundle() {
    console.log('run bundle');

        webpack([browserConfig(), serverConfig()]).run((err, stats) => {
            if (err) {
                return err
            }

            if (stats.hasErrors()) {
                return new Error('Webpack compilation errors')
            }


            return stats;
        });
}
export default bundle;