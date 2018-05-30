export const routes = [
    {
        exact: true,
        title: 'Cert',
        path: "/cert",
        load: () => import('./view/cert'),
    }, {
        exact: true,
        title: 'Cert',
        path: "/cert/:emerhash",
        load: () => import('./view/cert'),
    },
    {
        exact: true,
        title: 'Mail',
        path: "/mail",
        load: () => import('./view/mail'),
    },
];