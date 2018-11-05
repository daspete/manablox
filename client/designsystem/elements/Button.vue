<template>
    <component :is="elementType" :class="elementClasses" :style="elementStyles" :href="href" :to="to" :target="blank ? '_blank' : undefined">
        <slot />
    </component>
</template>

<script>
import designtokens from "~/designsystem/tokens/tokens.scss";

/**
 * Button element for links and action buttons
 */
export default {
    name: 'Button',
    status: 'prototype',
    release: '0.0.1',
    props: {

        /**
         * The url which should be visited on click/tap
         */
        href: {
            type: String,
            default: null,
        },

        /**
         * should the link open in a new tab? (only works with filled href prop)
         */
        blank: {
            type: Boolean,
            default: false,
        },

        /**
         * The nuxt page which should be loaded on click/tap
         */
        to: {
            type: String,
            default: null
        },

        /**
         * button with a border and no fill
         */
        inverted: {
            type: Boolean,
            default: false,
        },

        /**
         * button with no border and no fill
         */
        transparent: {
            type: Boolean,
            default: false,
        },

        /**
         * button with a border radius
         */
        borderRadius: {
            type: Boolean,
            default: false,
        },

        /**
         * reduce paddings of the button
         */
        small: {
            type: Boolean,
            default: false,
        },

        /**
         * reduce paddings of the button a bit more
         */
        mini: {
            type: Boolean,
            default: false,
        },

        /**
         * reduce paddings of the button a bit more
         */
        medium: {
            type: Boolean,
            default: false,
        },

        /**
         * custom classes
         */
        classes: {
            type: String,
            default: null,
        },

        /**
         * the color of the button
         */
        color: {
            type: String,
            default: null
        },

        /**
         * the backgroundColor of the button
         */
        backgroundColor: {
            type: String,
            default: null
        }


    },

    data(){
        return {
            tokens: designtokens
        }
    },

    computed: {
        elementType(){
            if(this.href != null) return 'a'
            if(this.to != null) return 'nuxt-link'
            return 'button'
        },

        elementClasses(){
            let classes = 'button';

            if(this.inverted) classes += ' button--inverted'
            if(this.transparent) classes += ' button--transparent'
            if(this.borderRadius) classes += ' button--border-radius'
            if(this.medium) classes += ' button--medium'
            if(this.small) classes += ' button--small'
            if(this.mini) classes += ' button--mini'
            if(this.classes) classes += ` ${ this.classes }`

            return classes;
        },

        elementStyles(){
            let styles = {}

            if(this.color){
                styles.color = this.tokens[`color-${ this.color }`];
            }

            if(this.backgroundColor){
                styles.backgroundColor = this.tokens[`color-${ this.backgroundColor }`];
            }

            return styles;
        }
    }
}

</script>

<style lang="scss" scoped>
@import "~/designsystem/tokens/tokens.scss";

.button {
    display: inline-block;
    text-decoration: none;
    border: 1px solid $color-blue;
    padding: 20px 60px;
    font-size: 18px;
    line-height: 24px;
    margin: 0;
    cursor: pointer;
    color: $color-white;
    background-color: $color-blue;
    outline: none;

    &--inverted {
        color: $color-blue;
        background-color: transparent;
    }

    &--transparent {
        color: $color-blue;
        background-color: transparent;
        border: 1px solid transparent;
    }

    &--border-radius {
        border-radius: 4px;
    }

    &--medium {
        padding: 8px 20px;
    }

    &--small {
        padding: 5px 20px;
    }

    &--mini {
        padding: 2px 5px;
        font-size: 14px;
        line-height: 14px;
    }

    .svg-icon {
        position: relative;
        top: -1px;
        margin-left: 2px;

        svg, path {
            fill: $color-blue !important;
        }
    }
}

</style>


<docs>

```jsx
    <div>
        <Button>This is a button</Button>
        <Button transparent>This is a transparent button</Button>
        <Button href="#" blank>This is a link, which opens in a new tab</Button>
        <Button inverted>This is an inverted button</Button>
        <Button inverted small>This is an inverted small button</Button>
        <Button inverted mini>This is an inverted mini button <SvgIcon name="review" size="12px" color="blue" /></Button>
    </div>
```

</docs>
