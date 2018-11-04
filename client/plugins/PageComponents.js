import Vue from 'vue'

const contexts = [
    require.context('~/components/', true, /\.vue$/),
]

contexts.forEach((context) => {
    context.keys().forEach((key) => {
        let component = context(key).default
        Vue.component(component.name, component)
    })
})


