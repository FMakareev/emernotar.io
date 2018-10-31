/* global process */
import webpack from 'webpack';
import { serverConfigGenerator } from '../config/webpack.server';
import { browserConfigGenerator } from '../config/webpack.client';
import { Clear } from '../tools/clear';
import { initMessage } from '../tools/initLocalizationFiles';
import { getVariablesesEnvironment } from '../tools/getVariablesesEnvironment';
import { compilerPromise } from '../tools/compilerPromise';
import { logMessage } from '../tools/logMessage';
import {init as createIndex} from '../tools/createIndex';

const build = async () => {
  await Clear();
  await initMessage();
  await getVariablesesEnvironment();
  await createIndex();

  const clientConfig = browserConfigGenerator();
  const serverConfig = serverConfigGenerator();
  const multiCompiler = webpack([clientConfig, serverConfig]);

  const clientCompiler = multiCompiler.compilers[0];
  const serverCompiler = multiCompiler.compilers[1];


	clientCompiler.run((error, stats) => {
		if(error && stats.hasErrors()){
			console.log(error);
		}
		console.log('Client compiler has finished execution.');
		process.stdout.write(stats.toString() + "\n");
	});

	serverCompiler.run((error, stats) => {
		if(error && stats.hasErrors()){
			console.log(error);
		}
		console.log('Server compiler has finished execution.');
		process.stdout.write(stats.toString() + "\n");
	});

	// const clientPromise = compilerPromise(clientCompiler);
  // const serverPromise = compilerPromise(serverCompiler);


  // serverCompiler.watch({}, (error, stats) => {
  //   if (!error && !stats.hasErrors()) {
  //     console.log(stats.toString(serverConfig.stats));
  //   }
  //   return null;
  // });
  //
  // clientCompiler.watch({}, (error, stats) => {
  //   if (!error && !stats.hasErrors()) {
  //     console.log(stats.toString(clientConfig.stats));
  //   }
  //   return null;
  // });
  //
  // // wait until client and server is compiled
  // try {
  //   await serverPromise;
  //   await clientPromise;
  //   logMessage('Done!', 'info');
  //   process.exit();
  // } catch (error) {
  //   logMessage(error, 'error');
  // }
};

build();
