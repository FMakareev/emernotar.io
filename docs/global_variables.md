# Global variables

> In npm scripts these variables are pre-set, through cli it is possible to redefine any of them
 ~*Example:*~ yarn build:ssr:dev --endpoint='http://localhost:5001'.

> Through npm, the override does not work
* [watch](https://webpack.js.org/configuration/watch/#watch) -**default: 'false'** 
* [mode](https://webpack.js.org/concepts/mode/) -**default: 'development'** 'development' or 'production'
* public_url -**default: 'build'** - The name of the directory where your project will be stored
* client_entry -**default: './src/client/index.js'** - entry point for the client
* server_entry -**default: './src/server/index.js'** - entry point for the server 
* ssr_fetch -**default: true** - is responsible for including graphql requests on the server (it is worth disabling if the server does not work)
* port -**default: 3000** - the port number on which the express server is launched
* endpoint_client -*default: 'http://localhost:5001'* - The address to which graphql requests will be sent from the browser 
(on production it is necessary to put an empty string for the browser to substitute the domain address)
* endpoint_server -*default: 'http://localhost:5001'* - the address where the graphql requests from the express server will go
* debug -**default: true** - this depends on the code at the output or is minified or not.
