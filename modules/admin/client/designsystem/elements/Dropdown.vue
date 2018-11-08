<template>
    <div :class="dropdownClasses" :style="`width: ${ width }`" v-if="isOpen">
        <span class="dropdown__label" :style="`color: ${ Color }`" v-html="option ? option.label : placeholder"></span>
        <span class="dropdown__toggle">
            <SvgIcon :name="icon" size="14px" :fill="Color" />
        </span>

        <div class="dropdown__options">
            <div
                :class="`dropdown__option`"
                v-for="cOption in options"
                :key="cOption.value"
                v-if="option == null || cOption.value != option.value"
                v-html="cOption.label"
                :style="`color: ${ Color }`"
                v-on:click="SetStatus(cOption)"
            />
        </div>
    </div>
</template>

<script>
import designtokens from "~admin/designsystem/tokens/colors.scss";

/**
 * Dropdown element
 */
export default {
    name: 'Dropdown',
    status: 'prototype',
    release: '0.0.1',
    props: {

        /**
         * current object, example `{ label: 'John Doe', value: 1 }`
         *
         */
        value: {
            type: Object,
            default: null
        },

        /**
         * all available options for the dropdown
         *
         * example:
         * ```
         * [
         *  {
         *     label: 'John Doe',
         *     value: 1,
         *  },
         *  {
         *     label: 'Jane Doe',
         *     value: 0,
         *  }
         * ]
         * ```
         */
        options: {
            type: Array,
            default: null
        },

        /**
         * placeholder, when no options is selected
         */
        placeholder: {
            type: String,
            default: null
        },

        /**
         * the icon which should be used for the dropdown indicator
         */
        icon: {
            type: String,
            default: 'small-arrow-down'
        },

        /**
         * the font and icon color (equals the token color names)
         */
        color: {
            type: String,
            default: 'darkgray'
        },

        /**
         * the width of the dropdown
         */
        width: {
            type: String,
            default: '100%'
        },

        /**
         * should the dropdown has a border
         */
        border: {
            type: Boolean,
            default: false
        }

    },

    data(){
        return {
            tokens: designtokens,
            option: this.value,
            isOpen: true
        }
    },

    computed: {
        dropdownClasses(){
            return {
                'dropdown': true,
                'dropdown--bordered': this.border
            }
        },

        Color(){
            return this.tokens[`color_${ this.color }`];
        }
    },

    methods: {
        SetStatus(option){
            this.option = option;

            this.$emit('input', option);

            this.isOpen = false;

            this.$nextTick(() => {
                this.isOpen = true;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~admin/designsystem/tokens/tokens.scss";

.dropdown {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    border-radius: 2px;
    cursor: pointer;
    font-size: 14px;
    color: $color-darkgray;
    background-color: $color-white;

    &--bordered {
        box-shadow: 0 2px 3px rgba(0,0,0,0.1);
        border: 1px solid $color-lightergray;
    }

    &__label {
        position: relative;
        z-index: 99;
        box-sizing: inherit;
        display: inline-block;
        padding: 10px 25px;
        width: calc(100% - 40px);
    }

    &__toggle {
        box-sizing: inherit;
        display: inline-block;
        padding: 10px 5px;
        width: 30px;
        text-align: center;
        border-left: 1px solid $color-white;
        // transition: transform 0.12s;
        .svg-icon {
            position: relative;
            top: -1px;
        }
    }

    &__options {
        position: absolute;
        top: 100%;
        border-top: 1px solid transparent;
        display: none;
        opacity: 0;
        z-index: 1000;
        left: 0;
        box-shadow: 0 2px 3px rgba(0,0,0,0.1);
        border: 1px solid $color-lightergray;
        background-color: $color-white;
        min-width: 100%;
    }

    &__option {
        position: relative;
        z-index: 101;
        padding: 8px 25px;

        min-width: 100%;
    }

    &:hover {
        .dropdown__options {
            display: block;
            animation-name: dropdown-fade-in;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
        }

        // .dropdown__toggle {
        //     transform: rotate(180deg);
        // }
    }
}

@keyframes dropdown-fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1
    }
}
</style>


<docs>
```vue

    <template>
        <div>
            <Dropdown
                v-model="option"
                width="40%"
                :options="[
                    {
                        label: 'John Doe',
                        value: 1
                    },
                    {
                        label: 'Jane Doe',
                        value: 2
                    }
                ]"
            />

            <Dropdown
                border
                width="40%"
                v-model="option"
                :options="[
                    {
                        label: 'John Doe',
                        value: 1
                    },
                    {
                        label: 'Jane Doe',
                        value: 2
                    }
                ]"
            />
        </div>
    </template>

    <script>
    export default {
        data(){
            return {
                option: {
                    label: 'John Doe',
                    value: 1
                }
            }
        },

        watch: {
            option(value){
                console.log(value);
            }
        }
    }
    </script>



```
</docs>
