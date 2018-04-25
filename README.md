

## Структура проекта

* src
    * apollo - [Apollo client](https://www.apollographql.com/)
        * ...
        * index.client.js - Browser config
        * index.server.js - Server config
        * package.json
    * blocks - Список блоков
        * ...
        * index.js - блоки обязательно прописываются сюда и импортирутся отсуда
        * package.json
    * components - Набор компонентов
        * ...
        * index.js - компоненты обязательно прописываются сюда и импортирутся отсуда
        * package.json
    * client - Точка входа клиента
        * index.js 
        * package.json
    * modules - Модули 
        * ...
        * index.js
        * package.json
    * routes - [React router](https://reacttraining.com/) + [loadable-components](https://github.com/smooth-code/loadable-components)
        * errors - шаблоны страниц с ошибками
        * index.js - тут генерируется список маршрутов. 
            > **Важно!**: провайдер для маршрутизации указывается в точке входа отдельно для клиента и сервера
            сдесь просто создается список маршрутов
        * package.json
    * server - Точка входа для сервера
        * html - шаблон html разметки для любой страницы
        * index.js 
        * package.json
    * style - Стили и все что с ними связано
        * ...
        * index.js
        * package.json


## NPM Scripts

* No ssr
    * start
    * start:server
    * start:prod
    * start:dev
    
* SSR
    * start:ssr 
    * start:ssr:server
    * start:ssr:prod
    * start:ssr:dev

* Utilities
    * create-index - создание файла с экспортами модулей в дирректории ./src/modules/   
    * clear - удоляет временные файлы и мусор
    * localization:prod - создает файлы локализации  
    

* Variables Environment
    > В npm скриптах заранее проставлены эти переменные, через cli можно переопределить любую из них
     ~*Пример:*~ yarn build:ssr:dev --endpoint='http://localhost:5001'
    * watch -*default: 'false'*
    * mode -*default: 'development'*
    * public_url -*default: 'public'*
    * client_entry -*default: './src/client/index.js'*
    * server_entry -*default: './src/server/index.js'*
    * ssr_fetch -*default: true* отвечает за включение запросов graphql на сервере (стоит отключить если сервер не работает)
    * port -*default: 3000* 
    * endpoint -*default: 'http://192.168.1.188:5001'* 




* добавить чтение переменных из командной строки - 0.5 часа
* npm scripts
    * start - запус в режиме разработки без node server
    * start:ssr - запуск в режиме разработки с server side render
    * start:server - сервер отдающий статику без ssr
    * start:server:ssr - сервер с ssr, в dev режиме
    
    * build:prod - получить билд без node server на production
    * build:dev - получить билд без node server development по умолчанию включен watch
    
    * build:ssr:prod - получить билд без node server на production
    * build:ssr:dev - получить билд без node server на development по умолчанию включен watch
    * test - запуск тестов
    




### TODO:
* ~~ssr~~
* ~~apollo~~
* ~~fela~~
* ~~routing~~
* redux
    * подключить на клиенте и сервере
    * синхранизировать состояния клиента и сервера
* intl
    * получать из кук запроса текущую локаль пользователя (либо системную либо из куки)
    * отдавать клиенту куки и словарь с его локализацией
* ~~dynamic import~~
    * ~~динамические импорты работают на сервере~~
    * ~~синхранизация сервера и клиента~~
    * ~~code-split на основе import маршрутов~~
* meta tag
* ~~import image - png,jpg,svg~~
* css
    * ~~поддержка import '[file-name].css'~~
    * генерация файла css файлов
    * поддержка sass/less
    * postcss
* prod config
* no-ssr config
* live-reload
* Отрефакторить webpack конфиг
* ~~перенести webpack на es6~~
* покрыть комментариями
* создать yoman config
* собрать конфиги в npm пакет и написать CLI на подобии react-script или next.js
* переменные окружения через cli
    * endpoint
    * port
    


### server config
* env
    * entry
    * output
    * isDebug
    * mode - development/production
 



### Протестировать

* подключение css/sass/less/scss файлов
* подключение стилей
