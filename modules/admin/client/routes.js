import AdminIndex from '~admin/pages/index.vue'

// import UsersAdminIndex from '~users/pages/admin/index.vue'

export default [
    {
        path: '/admin',
        name: 'admin_index',
        component: AdminIndex,
        children: [
            {
                path: 'users',
                name: 'admin_users_index',
                component: require('~users/pages/admin/index.vue').default
            }
        ]
    }
]
