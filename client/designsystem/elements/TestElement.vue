<template>
    <div class="test-element" v-html="content"></div>
</template>

<script>
/**
 * The TestElement just shows, how to create an element
 */

export default {
    name: 'TestElement',

    props: {
        /**
         * Content of the element
         */
        content: {
            type: String,
            default: 'This is a testelement'
        }
    }
}
</script>

<docs>
``` jsx
    <div>
        <TestElement />
        <TestElement content="This is a custom content" />
    </div>
```
</docs>
