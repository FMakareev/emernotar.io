export const getVariablesesEnvironment = () => {
    console.info('run: getVariablesesEnvironment');
    return new Promise((resolve, reject) => {

        try {
            let env = {};

            process.argv.map((item) => {
                if (item.indexOf('--') !== -1) {
                    env[item.substring(2, item.indexOf('='))] = item.substring(item.indexOf('=') + 1);
                    console.log('env[item.substring(2, item.indexOf(\'=\'))]',env[item.substring(2, item.indexOf('='))]);
                    process.env[item.substring(2, item.indexOf('=')).toUpperCase()] = item.substring(item.indexOf('=') + 1);
                }
            });

            resolve(env);
        } catch (error) {
            reject(error);
        }

    })
};
