export const routes = [
    {
        exact: true,
        title: 'result_page_title',
        path: "/result",
        load: () => import('./view/result'),
    },
];