<template>
    <div :class="badgeClasses" :style="badgeStyles">
        <slot />
    </div>
</template>

<script>
import designtokens from "~admin/designsystem/tokens/colors.scss";

export default {
    name: 'Badge',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * the background color (equals the token color names)
         */
        backgroundColor: {
            type: String,
            default: 'red'
        },

        /**
         * the font and icon color (equals the token color names)
         */
        color: {
            type: String,
            default: 'white'
        },

        /**
         * should the font be bold?
         */
        bold: {
            type: Boolean,
            default: false
        },

        /**
         * no paddings
         */
        small: {
            type: Boolean,
            default: false
        },

        /**
         * mini version
         */
        mini: {
            type: Boolean,
            default: false
        },
    },

    data(){
        return {
            tokens: designtokens
        }
    },

    computed: {
        badgeClasses(){
            return {
                'badge': true,
                'badge--small': this.small,
                'badge--mini': this.mini
            }
        },

        badgeStyles(){
            return {
                color: this.tokens[`color_${ this.color }`],
                backgroundColor: this.tokens[`color_${ this.backgroundColor }`],
                fontWeight: this.bold ? '700' : '400'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.badge {
    box-sizing: border-box;
    display: inline-block;
    padding: 2px 8px;
    border-radius: 16px;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;

    &--small {
        padding: 2px;
        width: 20px;
    }

    &--mini {
        padding: 1px;
        width: 16px;
        height: 16px;
        font-size: 10px;
        border-radius: 8px;
    }

    .svg-icon {
        position: relative;
        top: -1px;
    }
}
</style>



<docs>
``` jsx
    <div>
        <Badge>I am a badge</Badge>
        <Badge bold>I am a bold badge</Badge>
        <Badge backgroundColor="green">I am a green badge</Badge>
        <Badge backgroundColor="green" color="black" small>
            <SvgIcon name="review" size="12px" color="white" />
        </Badge>
    </div>
```
</docs>
