

export default {
    path: 'users',
    name: 'admin_users_index',
    component: require('~users/pages/admin/index.vue').default,
    children: [
        {
            path: 'test',
            name: 'admin_users_test',
            component: require('~users/pages/admin/test.vue').default
        }
    ]
}
