<template>
    <div class="demo-element">
        <img class="demo-element__image" :src="image">
    </div>
</template>

<script>
export default {
    name: 'DemoElement',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * the demo element image url
         */
        image: {
            type: String,
            default: '//placekitten.com/g/150/150'
        }
    }
}
</script>

<style lang="scss" scoped>
.demo-element {
    display: inline-block;
    width: 48px;
    height: 48px;
    &__image {
        object-fit: cover;
        width: 48px;
        height: 48px;
        border-radius: 24px;
    }
}
</style>

<docs>
```jsx
<div>
    <Avatar />
</div>
```
</docs>
