export const routes = [
    {
        exact: true,
        title: 'notification_page_title',
        path: "/notification",
        load: () => import('./view/notification'),
    },
];