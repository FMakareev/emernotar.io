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

            console.log('run bundle finish!');
            // console.log('__ENDPOINT_CLIENT__: ',__ENDPOINT_CLIENT__);
            // console.log('__ENDPOINT_SERVER__: ',__ENDPOINT_SERVER__);
            console.log('process.env.ENDPOINT_CLIENT: ',process.env.ENDPOINT_CLIENT);
            console.log('process.env.ENDPOINT_SERVER: ',process.env.ENDPOINT_SERVER);

            return stats;
        });
}
export default bundle;