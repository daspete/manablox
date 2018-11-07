import Vue from 'vue'

const contexts = [
    require.context('~admin/designsystem/elements/', true, /\.vue$/),
    require.context('~admin/designsystem/patterns/', true, /\.vue$/),
    require.context('~admin/designsystem/templates/', true, /\.vue$/),
]

contexts.forEach((context) => {
    context.keys().forEach((key) => {
        let component = context(key).default
        Vue.component(component.name, component)
    })
})
