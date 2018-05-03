export const routes = [
    {
        exact: true,
        title: 'verify_page_title',
        path: "/verify/:hash",
        load: () => import('./view/verify'),
    },
];