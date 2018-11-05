<template>
    <div :class="inputClasses" :style="inputContainerStyles">
        <input :style="inputStyles" :type="type" v-model="inputValue" :placeholder="placeholder">
    </div>
</template>

<script>
import designtokens from "~/designsystem/tokens/tokens.scss";

export default {
    name: 'Input',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * current value
         *
         */
        value: {
            type: String,
            default: null
        },

        /**
         * the font color (equals the token color names)
         */
        color: {
            type: String,
            default: 'darkgray'
        },

        /**
         * don't draw background or borders
         */
        transparent: {
            type: Boolean,
            default: false
        },

        /**
         * the input type
         */
        type: {
            type: String,
            default: 'text'
        },

        /**
         * the width of the dropdown
         */
        width: {
            type: String,
            default: '100%'
        },

        /**
         * the placeholder text for the input
         */
        placeholder: {
            type: String,
            default: ''
        }
    },

    computed: {
        inputClasses(){
            return {
                'input': true
            }
        },

        inputContainerStyles(){
            return {
                width: this.width
            }
        },

        inputStyles(){
            let styles = {
                color: this.tokens[`color_${ this.color }`]
            }

            if(this.transparent){
                styles.backgroundColor = 'transparent'
                styles.border = '0'
                styles.boxShadow = 'none'
            }

            return  styles
        }
    },

    data(){
        return {
            tokens: designtokens,
            inputValue: this.value
        }
    },

    watch: {
        inputValue(value){
            this.$emit('input', value);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/designsystem/tokens/tokens.scss";

.input {
    display: inline-block;

    input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        border-radius: 2px;
        font-size: 14px;
        background-color: $color-white;
        box-shadow: 0 2px 3px rgba(0,0,0,0.1);
        border: 1px solid $color-lightergray;
        padding: 10px 25px;
    }

}
</style>


<docs>
```vue
<template>
    <div>
        <div class="row">
            <div class="col-1">
                <UILabel>Text</UILabel>
            </div>
            <div class="col-11">
                <UIInput v-model="inputValue" />
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-1">
                <UILabel>Password</UILabel>
            </div>
            <div class="col-11">
                <UIInput type="password" v-model="passwordValue" />
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12">
                <SvgIcon name="search" color="gray" size="20px" /><UIInput transparent width="300px" placeholder="search" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputValue: '',
            passwordValue: ''
        }
    }
}
</script>


```
</docs>
