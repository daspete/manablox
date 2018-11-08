<template>
    <component :is="type" :aria-label="ariaLabel" class="svg-icon" v-html="svg" />
</template>

<script>
import designtokens from "~admin/designsystem/tokens/tokens.scss";
const req = require.context("~admin/assets/icons/", true, /^\.\/.*\.svg$/)

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product.
 */

export default {
    name: "SvgIcon",
    status: "prototype",
    release: "0.0.1",
    props: {
        /**
         * The name of the icon to display.
         */
        name: {
            required: true,
            default: "settings",
        },
        /**
         * The fill color of the SVG icon.
         */
        color: {
            type: String,
            default: "gray",
        },
        /**
         * Descriptive text to be read to screenreaders.
         */
        ariaLabel: {
            type: String,
            default: "icon",
        },
        /**
         * The html element name used for the icon.
         */
        type: {
            type: String,
            default: "span",
        },
        /**
         * The size of the icon.
         */
        size: {
            type: String,
            default: "16px",
        },
    },

    watch: {
        name(value){
            let color = designtokens[`color_${ this.color }`];

            this.svg = req("./" + value + ".svg")
                .replace(
                    /^<svg /,
                    `<svg style="width: ${this.size}; height: ${this.size}; fill: ${color}" `
                )
                .replace(/<path /, `<path style="fill: ${color}" `);
        },
        color(value){
            let color = designtokens[`color_${ value }`];

            this.svg = req("./" + this.name + ".svg")
                .replace(
                    /^<svg /,
                    `<svg style="width: ${this.size}; height: ${this.size}; fill: ${color}" `
                )
                .replace(/<path /, `<path style="fill: ${color}" `);
        }
    },

    data() {
        let color = designtokens[`color_${ this.color }`];

        return {
            svg: req("./" + this.name + ".svg")
                .replace(
                    /^<svg /,
                    `<svg style="width: ${this.size}; height: ${this.size}; fill: ${color}" `
                )
                .replace(/<path /, `<path style="fill: ${color}" `)
        }
    }
}
</script>


<docs>
  ```jsx
  <div>
    <svg-icon name="ready" aria-label="Component is ready" color="green" size="24px" />
    <svg-icon name="review" color="orange" size="24px" />
    <svg-icon name="deprecated" color="red" size="24px" />
    <svg-icon name="prototype" color="teal" size="24px" />
  </div>
  ```
</docs>
