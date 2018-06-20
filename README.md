# Emernotar.io

## Getting Started

### Requirements

  * Mac OS X, Windows, or Linux
  * [Yarn](https://yarnpkg.com/) package or [npm](https://www.npmjs.com)
  * Text editor or IDE pre-configured with React/JSX
  
### 1. Get the latest version

You can start by cloning the latest version of React Starter Kit (RSK) on your
local machine by running:

```shell
$ git clone https://git.compaero.ru/emernotar.io/frontend-mechanic-ssr
$ cd frontend-mechanic-ssr
```
### 2. Run `yarn install` or `npm install`

This will install both run-time project dependencies and developer tools listed
in [package.json](./package.json) file.

### 3. Run developer mode `yarn start` or `npm run start`

This command will build the app from the source files (`/src`). 
As soon as the initial build completes, it will start.

> [http://localhost:3000/](http://localhost:3000/) 

### 4. Create production build `yarn build` or `npm run build`

Creates a release build for the release

## Documentation

* [NPM scripts](./docs/npm_scripts.md)- scripts to run from the console
* [Project structure](./docs/structure.md)- structure of the project file system
* [Global variables](./docs/global_variables.md)- list of global variables
* [ESLint](./docs/eslint_guide.md)- description of the code
* [Module](./docs/module.md)- description of the structure of the module in the project
* [Translate](./docs/module.md#translatexml)- description of the interface localization method


## Рецепты

### To replace the video on the main page, you need:

1. go to the file: `src/config.js`;
2. replace the value of the `youtube` property with the new video;
3. Run the command `npm run build`;
4. If you are on the main server to restart the client server, issue the command `service emc-front restart`;

### добавление новых языков или изменение старых

Для того чтобы добавить новый язык на страницу или изменить старый необходимо:

