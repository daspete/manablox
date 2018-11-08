<template>
    <div :class="dropdownClasses" v-if="isOpen">
        <span class="status-dropdown__label" v-html="status.label"></span>
        <span class="status-dropdown__toggle">
            <SvgIcon name="arrow-down" size="14px" color="white" />
        </span>

        <div class="status-dropdown__options">
            <div
                :class="`status-dropdown__option status-dropdown__option--${ option.color }`"
                v-for="option in options"
                :key="option.value"
                v-if="option.value != status.value"
                v-html="option.label"
                v-on:click="SetStatus(option)"
            />
        </div>
    </div>
</template>

<script>
/**
 * Dropdown for status settings
 */
export default {
    name: 'StatusDropdown',
    status: 'prototype',
    release: '0.0.1',
    props: {

        /**
         * current status object, example `{ label: 'published', value: 1, color: 'green' }`
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
         *     label: 'published',
         *     value: 1,
         *     color: 'green'
         *  },
         *  {
         *     label: 'refused',
         *     value: 0,
         *     color: 'red'
         *  }
         * ]
         * ```
         */
        options: {
            type: Array,
            default: null
        }
    },

    data(){
        return {
            status: this.value,
            isOpen: true
        }
    },

    computed: {
        dropdownClasses(){
            return {
                'status-dropdown': true,
                'status-dropdown--green': this.status.color ? this.status.color == 'green' ? true : false : false,
                'status-dropdown--orange': this.status.color ? this.status.color == 'orange' ? true : false : false,
                'status-dropdown--red': this.status.color ? this.status.color == 'red' ? true : false : false
            }
        }
    },

    methods: {
        SetStatus(option){
            this.status = option;

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

.status-dropdown {
    position: relative;
    display: inline-block;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: $color-white;


    &--green {
        background-color: $color-green;
    }

    &--orange {
        background-color: $color-orange;
    }

    &--red {
        background-color: $color-red;
    }

    &__label {
        display: inline-block;
        padding: 10px 25px 10px 40px;
    }

    &__toggle {
        display: inline-block;
        padding: 10px 20px;
        border-left: 1px solid $color-white;
        .svg-icon {
            position: relative;
            top: -1px;
        }
    }

    &__options {
        position: absolute;
        top: 100%;
        display: none;
        opacity: 0;
        z-index: 100;
        left: 15px;
        box-shadow: 2px 3px 3px rgba(0,0,0,0.12);
    }

    &__option {
        padding: 8px 25px;
        background-color: $color-white;
        min-width: calc(100% - 32px);

        &--green {
            background-color: $color-green;
        }

        &--orange {
            background-color: $color-orange;
        }

        &--red {
            background-color: $color-red;
        }
    }

    &:hover {
        .status-dropdown__options {
            display: block;
            animation-name: dropdown-fade-in;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
        }
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
            <StatusDropdown
                v-model="status"
                :options="[
                    {
                        label: 'published',
                        value: 1,
                        color: 'green'
                    },
                    {
                        label: 'pending',
                        value: 2,
                        color: 'orange'
                    },
                    {
                        label: 'refused',
                        value: 0,
                        color: 'red'
                    }
                ]"
            />
        </div>
    </template>

    <script>
    export default {
        data(){
            return {
                status: {
                    label: 'published',
                    value: 1,
                    color: 'green'
                }
            }
        },

        watch: {
            status(value){
                console.log(value);
            }
        }
    }
    </script>



```
</docs>
