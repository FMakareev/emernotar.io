export const routes = [
    {
        exact: false,
        title: 'about_page_title',
        path: "/about",
        load: () => import('./view/about'),
    },
];