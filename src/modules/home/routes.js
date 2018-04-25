export const routes = [
    {
        exact: true,
        title: 'home_page_title',
        path: "/",
        load: () => import('./view/home'),
    },
];