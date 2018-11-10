let routes = null

try{
    routes = {
        name: 'admin_users_index',
        component: require('~users/admin/pages/index.vue').default,
        children: [
            {
                path: 'test',
                name: 'admin_users_test',
                component: require('~users/admin/pages/test.vue').default
            }
        ]
    }
}catch(e){}

export default routes
