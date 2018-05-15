import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript'


const Html = ({content,request,title,cache,style,reduxState,asyncState,getStatic = false}) => (
    <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{title}</title>
            <style></style>
    </head>
    <body>
    <div id="app" dangerouslySetInnerHTML={{__html: content}}/>
    {
        cache && <script
            charSet="UTF-8"
            dangerouslySetInnerHTML={{
                __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract())};`,
            }}
        />
    }
    {
        reduxState &&
        <script
            charSet="UTF-8"
            dangerouslySetInnerHTML={{
                __html: `window.__PRELOADED_REDUX_STATE__=${JSON.stringify(reduxState)};`,
            }}
        />
    }
    {
        asyncState &&
        <script
            charSet="UTF-8"
            dangerouslySetInnerHTML={{
                __html: `window.__ASYNC_COMPONENTS_STATE__=${serialize(asyncState)};`,
            }}
        />
    }

    {
        !getStatic && <script src="/bundle.js" charSet="UTF-8"/>
    }

    </body>
    </html>
);
Html.propTypes = {
    content: PropTypes.string,
    client: PropTypes.shape({
        cache: PropTypes.object,
    }),
    reduxState: PropTypes.string,
    style: PropTypes.string,
    asyncState: PropTypes.string,
};
Html.defaultProps = {
    content: null,
    client: null,
    reduxState: null,
    style: null,
    asyncState: null,
};

export default Html;