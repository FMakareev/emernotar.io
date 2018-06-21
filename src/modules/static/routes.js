export const routes = [
    // {
    //     exact: true,
    //     title: 'Cert',
    //     path: "/cert",
    //     load: () => import('./view/cert'),
    // },
    {
        exact: true,
        title: 'Cert',
        path: "/cert/:emerhash",
        load: () => import('./view/cert'),
    },
    {
        exact: true,
        title: 'Mail',
        path: "/mail/:emerhash",
        load: () => import('./view/mail'),
    },
];