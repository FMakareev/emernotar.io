export const routes = [
    {
        exact: true,
        title: 'contact_page_title',
        path: "/contact",
        load: () => import('./view/contact'),
    },
];