export const routes = [
    {
        exact: true,
        title: 'user_active_page_title',
        path: "/user_activate/:message(success|server_error|email_is_exist)",
        load: () => import('./view/userActive'),
    },
];