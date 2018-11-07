import Vue from 'vue'

const context = require.context('~/../modules/admin/client/designsystem/', true, /\.vue$/)
context.keys().forEach((key) => {
    let component = context(key).default
    Vue.component(component.name, component)
})
