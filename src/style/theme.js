import {createBtnTheme} from "./createBtnTheme";

export const palette = {
    default: {
        light: '#ffffff',
        main: '#e0e0e0',
        dark: '#aeaeae',
        contrastText: '#ffffff',
    },
    primary: {
        light: '#fff',
        main: '#FDF396',
        dark: '#4F4F4F',
        contrastText: '#4F4F4F',
    },
    secondary: {
        light: '#E5E5E5',
        main: '#BDBDBD',
        dark: '#AEAEAE',
        contrastText: '#000',
    },
    warning: {
        light: '#FFB74D',
        main: '#FB8C00',
        dark: '#E65100',
        contrastText: '#000000',
    },
    error: {
        light: '#E57373',
        main: '#E53935',
        dark: '#B71C1C',
        contrastText: '#fff',
    },
};

export const Theme = {

    palette: palette,
    header: {
        color: '#fff',
    },
    layout: {
        padding: '0.9375rem',
        maxWidth: '992px',
    },
};

export const createTheme = (colorPallet) => {
    const gutter = '1rem';

    return {
        palette: colorPallet,
        createBtnTheme:createBtnTheme,
        gutter: gutter,
        container: '1170px',
        header: {
            backgroundColor: colorPallet.primary.dark,
            color: colorPallet.default.contrastText,
            // padding: '1px',
            zIndex: 3,
            height: 'fit-content',
            padding: '1rem 0'
        },
        layout: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: colorPallet.primary.light,
            overflow: 'hidden',
            ':after': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '3rem',
            }
        },
        footer: {
            height: '3.5rem',
            marginTop: '-3.5rem',
            textAlign: 'center',
            padding: '1rem',
            backgroundColor: colorPallet.primary.dark,
            color: colorPallet.default.contrastText,
            borderTop: '0.5rem solid #FDF396',
        },
        top: {
            backgroundColor: colorPallet.primary.main,
            color: colorPallet.primary.contrastText,
        },
        typography:{
            marginTop: '1.414rem',
            marginBottom: '0.5rem',
            fontWeight: 'inherit',
            lineHeight: 1.2,
            h1:{
                fontSize: '2.441rem',
            },
            h2:{
                fontSize: '1.953rem',
            },
            h3:{
                fontSize: '1.563rem',
            },
            h4:{
                fontSize: '1.25rem',
            },
            p: {
                fontSize: '1rem',
            }
        }
    }

};