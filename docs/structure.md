# Project structure

* config - configs for development
  * fileLoaderConfig.js - webpack file-loader
  * graphqlLoaderConfig.js - webpack graphql-loader
  * scriptsLoaderConfig.js - webpack config js
  * webpack.client.js - browser config
  * webpack.server.js - server config
* docs - project documentation 
* node_modules - project dependencis 
* public - final build
* src - source code
    * apollo - [Apollo client](https://www.apollographql.com/)
        * index.client.js - Browser config
        * index.server.js - Server config
        * package.json
        * ...
    * blocks - stateless components
        * ...
    * components - statefull components
        * ...
    * client - client entry
        * index.js 
        * package.json
    * [modules](./module.md) 
        * ...
        * index.js
        * package.json
    * routes
        * errors - template error page
        * index.js - create router array 
          > ** Important! **: the provider for routing is specified at the entry point separately for the client and server
                       you just create a list of routes
        * package.json
    * server - server entry
        * index.js 
        * package.json
    * style - css-in-js config
        * ...
        * index.js
        * package.json
* scripts
  * build.ssr - create build
  * start.ssr - run developer server
* tools 
  * getVariablesesEnvironment - the function receives variables from cli and passes them to process.env
  * clear - remove temporary files
  * createIndex - the method of creating the Index.js file in the src / modules folder has two command-line methods:
    * --exclude - array of modules that are not needed in the assembly `--exclude="home,about"`
    * --include - array of modules that are needed in the assembly `--include="home,about"`
  * initLocalizationFiles - creates files with localization for modules
  * compilerPromise - webpack compiler promise
  * logMessage - log developer server
