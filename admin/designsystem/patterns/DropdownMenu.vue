<template>
    <div class="dropdown-menu">
        <button class="dropdown-menu__button" v-on:click="ToggleCanvas">
            <div v-if="!isOpen" class="dropdown-menu__closed-icons">
                <SvgIcon name="list" color="white" size="18px" />
                <SvgIcon name="arrow-down-unfilled" color="white" size="18px" />
            </div>
            <SvgIcon v-if="isOpen" name="close" color="white" size="24px" />
        </button>

        <div class="dropdown-menu__content" v-if="isOpen" :style="dropdownStyles">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropdownMenu',
    status: 'prototype',
    release: '0.0.1',

    props: {
        /**
         * the width of the dropdown content
         */
        width: {
            type: String,
            default: '500px'
        },

        /**
         * the height of the dropdown content
         */
        height: {
            type: String,
            default: 'calc(100vh - 70px)'
        }
    },

    data(){
        return {
            isOpen: false
        }
    },

    computed: {
        dropdownStyles(){
            return {
                width: this.width,
                height: this.height
            }
        }
    },

    methods: {
        ToggleCanvas(){
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style lang="scss">
@import "~admin/designsystem/tokens/tokens.scss";

.dropdown-menu {
    position: relative;
    display: inline-block;

    &__button {
        position: relative;
        padding: 20px;
        background-color: $color-blue;
        width: 70px;
        height: 70px;
        border: 0;
    }

    &__closed-icons {
        margin-top: -8px;
    }

    &__content {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: $color-white;
        overflow: auto;
        z-index: 1000;
    }
}
</style>


<docs>
```jsx
    <div>
        <DropdownMenu>
            Testing
        </DropdownMenu>
    </div>
```
</docs>
