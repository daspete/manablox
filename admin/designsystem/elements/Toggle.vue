<template>
    <div class="toggle" v-on:click="Toggle" :style="toggleStyles">
        <div :class="toggleButtonClasses"><slot>&nbsp;</slot></div>
    </div>
</template>

<script>
import designtokens from "~admin/designsystem/tokens/tokens.scss";

export default {
    name: 'Toggle',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * the v-model to toggle
         */
        value: {
            type: Boolean
        },

        /**
         * the color of the toggle background
         */
        color: {
            type: String,
            default: 'lightgray'
        },

        /**
         * the active color of the toggle background
         */
        activeColor: {
            type: String,
            default: 'blue'
        },
    },

    data(){
        return {
            tokens: designtokens,
            currentValue: this.value
        }
    },

    watch: {
        value(_value){
            this.currentValue = _value
        }
    },

    computed: {
        toggleButtonClasses(){
            return {
                'toggle__button': true,
                'toggle__button--on': this.currentValue == true
            }
        },

        toggleStyles(){
            return {
                backgroundColor: this.tokens[`color_${ this.currentValue ? this.activeColor : this.color }`]
            }
        }
    },

    methods: {
        Toggle(){
            this.currentValue = !this.currentValue

            this.$emit('input', this.currentValue)
        }
    }


}
</script>

<style lang="scss" scoped>
.toggle {
    display: inline-block;
    width: 32px;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &__button {
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background-color: white;
        margin-top: 2px;
        margin-left: 2px;
        transition: margin 0.2s;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        user-select: none;

        &--on {
            margin-left: 14px;
        }
    }
}
</style>


<docs>
```vue
<template>
    <div>
        <Toggle v-model="isActive" />

        <Toggle v-model="isActive2">
            x
        </Toggle>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isActive: false,
            isActive2: false
        }
    }
}
</script>

```
</docs>
