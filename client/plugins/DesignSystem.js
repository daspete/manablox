import Vue from 'vue'

const contexts = [
    require.context('~/designsystem/elements/', true, /\.vue$/),
    require.context('~/designsystem/patterns/', true, /\.vue$/),
    require.context('~/designsystem/templates/', true, /\.vue$/),
]

contexts.forEach((context) => {
    context.keys().forEach((key) => {
        let component = context(key).default
        Vue.component(component.name, component)
    })
})


