import {createRenderer} from 'fela'
import monolithic from 'fela-monolithic'
import prefixer from 'fela-plugin-prefixer'
import fallbackValue from 'fela-plugin-fallback-value'
import removeUndefined from 'fela-plugin-remove-undefined'

import felaPluginFlexBoxPrefixerIE from './felaPluginFlexBoxPrefixerIE';


/**
 * {@linkcode http://fela.js.org/docs/advanced/RendererConfiguration.html}
 * */
export const createStyleRenderer = () => {
    const renderer = createRenderer({
        plugins: [
            removeUndefined(),
            prefixer(),
            fallbackValue(),
            felaPluginFlexBoxPrefixerIE,
        ],
        enhancers: [
            // monolithic({prettySelectors: true}),
        ]
        ,
    });

    const keyframe = props => ({
        '0%': {
            height: '10px',
            marginTop: '24px',
        },
        '50%': {
            height: '49px',
            marginTop: '0px',
        },
        '100%': {
            height: '10px',
            marginTop: '24px',
        }
    })

    renderer.renderKeyframe(keyframe); // => k1

    renderer.renderFont('Roboto', [
        '/assets/fonts/Roboto.ttf',
    ]);
    renderer.renderFont('Icons', [
        '/assets/fonts/icon-emernotario.ttf',
    ]);

    renderer.renderFont('Exo-Regular', [
        '/assets/fonts/exo/Exo2-Regular.eot',
        '/assets/fonts/exo/Exo2-Regular.ttf',
        '/assets/fonts/exo/Exo2-Regular.otf',
        '/assets/fonts/exo/Exo2-Regular.woff',
        '/assets/fonts/exo/Exo2-Regular.woff2',
    ]);
    renderer.renderFont('Exo-Bold', [
        '/assets/fonts/exo/Exo2-Bold.eot',
        '/assets/fonts/exo/Exo2-Bold.ttf',
        '/assets/fonts/exo/Exo2-Bold.otf',
        '/assets/fonts/exo/Exo2-Bold.woff',
        '/assets/fonts/exo/Exo2-Bold.woff2',
    ]);

    renderer.renderFont('Vollkorn-Regular', [
        '/assets/fonts/Vollkorn/Vollkorn-Regular.eot',
        '/assets/fonts/Vollkorn/Vollkorn-Regular.ttf',
        '/assets/fonts/Vollkorn/Vollkorn-Regular.otf',
        '/assets/fonts/Vollkorn/Vollkorn-Regular.woff',
        '/assets/fonts/Vollkorn/Vollkorn-Regular.woff2',
    ]);
    renderer.renderFont('Vollkorn-Bold', [
        '/assets/fonts/Vollkorn/Vollkorn-Bold.eot',
        '/assets/fonts/Vollkorn/Vollkorn-Bold.ttf',
        '/assets/fonts/Vollkorn/Vollkorn-Bold.otf',
        '/assets/fonts/Vollkorn/Vollkorn-Bold.woff',
        '/assets/fonts/Vollkorn/Vollkorn-Bold.woff2',
    ]);


    /**
     * {@linkcode http://fela.js.org/docs/api/fela/Renderer.html#renderstatic}
     * */
    renderer.renderStatic({boxSizing: 'border-box'}, '*');
    renderer.renderStatic({margin: 0, padding: 0,}, 'ul,ol');
    renderer.renderStatic({margin: 0, padding: 0, listStyle: 'none'}, 'li');

    renderer.renderStatic(
        {
            width: '100%',
            minHeight: '100%',
            margin: 0,
            padding: 0,
            backgroundColor: '#ffffff',
            fontFamily: "'Exo-Regular', sans-serif, 'Roboto', sans-serif",
            fontWeight: 400,
            lineHeight: '1.45rem',
        },
        'html,body,#root'
    );
    renderer.renderStatic(`
        html{
            font-size: 10px;        
        }
        @media (min-width:768px){
            html{
                font-size: 12px;        
            }
        }
        @media (min-width:1024px){
            html{
                font-size: 16px;        
            }
        }
    `);
    renderer.renderStatic({
        fontFamily: "'Vollkorn-Regular', serif, 'Roboto', sans-serif",
    }, 'h1,h2,h3,h4,h5,h6');

    renderer.renderStatic({minHeight: '100%',}, 'main');
    renderer.renderStatic({border: 'none !important',}, 'img');
    renderer.renderStatic(`@page {
    size: A4 landscape;
    margin: 0;
    padding: 0;
}`);


    return renderer
}