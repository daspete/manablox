<template>
    <div class="progress" :style="progressStyles">
        <div class="progress__line" :style="progressBarStyles"></div>
    </div>
</template>

<script>
import designtokens from "~admin/designsystem/tokens/tokens.scss";

export default {
    name: 'ProgressBar',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * current percent of the bar
         */
        percent: {
            type: Number,
            default: 50
        },

        /**
         * the width of the progressbar
         */
        width: {
            type: String,
            default: '100%'
        },

        /**
         * the height of the progressbar
         */
        height: {
            type: String,
            default: '4px'
        },

        /**
         * the color of the progressbar
         */
        color: {
            type: String,
            default: 'teal'
        },

        /**
         * the background color of the progressbar
         */
        backgroundColor: {
            type: String,
            default: 'lightestgray'
        }
    },

    data(){
        return {
            tokens: designtokens,
        }
    },

    computed: {
        progressBarStyles(){
            return {
                width: this.percent + '%',
                height: this.height,
                backgroundColor: this.tokens[`color_${ this.color }`]
            }
        },

        progressStyles(){
            return {
                width: this.width,
                height: this.height,
                backgroundColor: this.tokens[`color_${ this.backgroundColor }`]
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.progress {
    display: inline-block;
    border-radius: 2px;

    &__line {
        display: block;
        border-radius: 2px;
        box-shadow: 0 0 3px rgba(0,0,0,0.1);
    }
}
</style>

<docs>
``` vue
<template>
    <div class="row">
        <div class="col-6">
            <ProgressBar />
        </div>
    </div>
</template>
<script>
export default {

}
</script>


```
</docs>
