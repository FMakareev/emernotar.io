export const routes = [
    {
        exact: true,
        title: 'help_page_title',
        path: "/help",
        load: () => import('./view/help'),
    },
];