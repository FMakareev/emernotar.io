import {createRenderer} from 'fela'
import monolithic from 'fela-monolithic'

/**
 * {@linkcode http://fela.js.org/docs/advanced/RendererConfiguration.html}
 * */
export const createStyleRenderer = () => {
    const renderer = createRenderer({
        plugins: [],
        enhancers: [monolithic({prettySelectors: true})],
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
        './assets/fonts/Roboto.ttf',
    ]);
    renderer.renderFont('Icons', [
        './assets/fonts/icon-emernotario.ttf',
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
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            lineHeight: '1.45rem',
        },
        'html,body,#root'
    );
    renderer.renderStatic({minHeight: '100%',}, 'main');
    renderer.renderStatic(`@page {
    size: A4 landscape;
    margin: 0;
    padding: 0;
}`)

    // @page {
    //     size: A4 landscape;
    //     margin-top: 4cm;
    //     margin-left: 4cm;
    // }
    return renderer
}