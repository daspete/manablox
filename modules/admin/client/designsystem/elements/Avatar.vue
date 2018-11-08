<template>
    <div class="avatar">
        <img class="avatar__image" :src="image">
    </div>
</template>

<script>
export default {
    name: 'Avatar',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * the avatar image url
         */
        image: {
            type: String,
            default: '//placekitten.com/g/150/150'
        }
    }
}
</script>

<style lang="scss" scoped>
.avatar {
    display: inline-block;
    width: 38px;
    height: 38px;
    &__image {
        object-fit: cover;
        width: 38px;
        height: 38px;
        border-radius: 19px;
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
