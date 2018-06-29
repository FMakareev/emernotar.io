export const routes = [
    {
        exact: true,
        title: 'Privacy Policy',
        path: "/policy",
        load: () => import('./view/policy'),
    },
];