<template>
    <div :class="labelClasses" :style="labelStyles">
        <slot />
    </div>
</template>

<script>
import designtokens from "~admin/designsystem/tokens/colors.scss";

export default {
    name: 'Label',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * The color of the label font
         */
        color: {
            type: String,
            default: 'darkgray'
        },

        /**
         * doubles the font size
         */
        big: {
            type: Boolean,
            default: false
        },

        /**
         * font-size times 1.5
         */
        medium: {
            type: Boolean,
            default: false
        },

        /**
         * use bold font
         */
        bold: {
            type: Boolean,
            default: false
        }
    },

    data(){
        return {
            tokens: designtokens
        }
    },

    computed: {
        labelStyles(){
            return {
                fontWeight: this.bold ? '700' : '400',
                color: this.tokens[`color_${ this.color }`]
            }
        },

        labelClasses(){
            return {
                'label': true,
                'label--medium': this.medium,
                'label--big': this.big
            }
        }
    }


}
</script>

<style lang="scss" scoped>
.label {
    font-size: 14px;
    line-height: 14px;
    display: inline-block;

    &--medium {
        font-size: 18px;
        line-height: 18px;
    }

    &--big {
        font-size: 28px;
        line-height: 28px;
    }
}
</style>


<docs>
```jsx
<div>
    <Label>I am a label</Label><br>
    <Label big>I am a big label</Label><br>
    <Label big color="orange">I am a big orange label</Label>
</div>
```
</docs>
