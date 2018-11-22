
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
        path: "/email-template-0",
        load: () => import('./view/mail'),
    }, {
        exact: true,
        title: 'MailIOS',
		    path: "/email-template-1",
        load: () => import('./view/mailIOS'),
    },
];
