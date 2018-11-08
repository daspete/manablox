<template>
    <span class="button-menu">
        <SvgIcon :name="icon" color="gray" />
        <div class="button-menu__box" :style="boxStyles">
            <div class="button-menu__arrow" :style="arrowStyles"></div>
            <div class="button-menu__content">
                <slot />
            </div>
        </div>
    </span>
</template>

<script>
export default {
    name: 'ButtonMenu',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
        * the icon which should be used for the dropdown indicator
        */
        icon: {
            type: String,
            default: 'more-indicator'
        },

        /**
         * the width of the dropdown box
         */
        width: {
            type: Number,
            default: 300
        },

        /**
         * the horizontal align of the box
         */
        align: {
            type: String,
            default: 'center'
        }
    },

    computed: {
        boxStyles(){
            let marginLeft = this.width * 0.5;
            if(this.align == 'left') marginLeft = this.width * 0.25
            if(this.align == 'right') marginLeft = this.width * 0.75
            if(this.align == 'maxright') marginLeft = this.width * 0.88

            return {
                width: `${ this.width }px`,
                marginLeft: `-${ marginLeft }px`
            }
        },

        arrowStyles(){
            let left = this.width * 0.5;
            if(this.align == 'left') left = this.width * 0.25
            if(this.align == 'right') left = this.width * 0.75
            if(this.align == 'maxright') left = this.width * 0.88

            return {
                left: `${ left }px`
            }
        }
    }
}
</script>

<style lang="scss">
@import "~admin/designsystem/tokens/tokens.scss";

.button-menu {
    display: inline-block;
    position: relative;
    cursor: pointer;

    &__box {
        display: none;
        position: absolute;
        top: 100%;
        padding: 14px;
        z-index: 101;
    }

    &__arrow {
        position: absolute;
        top: 5px;
        width: 16px;
        height: 16px;
        transform: rotate(45deg);
        background-color: $color-white;
        border-top: 1px solid $color-lightergray;
        border-left: 1px solid $color-lightergray;
        z-index: 101;
    }

    &__content {
        background-color: $color-white;
        padding: 16px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.12);
        position: relative;

        .button {
            display: block;
            text-align: left;
            position: relative;
            width: 100%;
            padding-left: 0;
            border-bottom: 1px solid $color-lightergray;

            .svg-icon {
                display: inline-block;
                padding-right: 10px;
            }
        }
    }

    &:hover {
        .button-menu__box {
            display: block;
            opacity: 0;
            animation-name: reveal-button-menu;
            animation-duration: 0.3s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
        }
    }
}

@keyframes reveal-button-menu {
    0% {
        opacity: 0;
        margin-top: -20px;
    }

    100% {
        opacity: 1;
        margin-top: 0;
    }
}
</style>


<docs>
```jsx
<div>
    <div class="row">
        <div class="col-1">
            <ButtonMenu>
                <Button medium transparent color="gray"><SvgIcon name="edit" /> Edit page overview</Button>
                <Button medium transparent color="gray"><SvgIcon name="contentbuilder" /> Content editor</Button>
                <Button medium transparent color="gray"><SvgIcon name="translations" /> Edit page translations</Button>
                <Button medium transparent color="gray"><SvgIcon name="seo" /> Edit page SEO</Button>
                <Button medium transparent color="gray"><SvgIcon name="duplicate" /> Duplicate page</Button>
                <Button medium transparent color="gray"><SvgIcon name="shortcut" /> Create page shortcut</Button>
                <Button medium transparent color="gray"><SvgIcon name="visibility-off" /> Hide page in menu</Button>
                <Button medium transparent color="gray"><SvgIcon name="trash" /> Delete page</Button>
            </ButtonMenu>
        </div>

        <div class="col-1">
            <ButtonMenu icon="translations">
                <Button medium transparent color="gray"><SvgIcon name="edit" /> Edit page overview</Button>
                <Button medium transparent color="gray"><SvgIcon name="contentbuilder" /> Content editor</Button>
                <Button medium transparent color="gray"><SvgIcon name="translations" /> Edit page translations</Button>
                <Button medium transparent color="gray"><SvgIcon name="seo" /> Edit page SEO</Button>
                <Button medium transparent color="gray"><SvgIcon name="duplicate" /> Duplicate page</Button>
                <Button medium transparent color="gray"><SvgIcon name="shortcut" /> Create page shortcut</Button>
                <Button medium transparent color="gray"><SvgIcon name="visibility-off" /> Hide page in menu</Button>
                <Button medium transparent color="gray"><SvgIcon name="trash" /> Delete page</Button>
            </ButtonMenu>
        </div>

        <div class="col-1">
            <ButtonMenu icon="contentbuilder">
                <Label>Username</Label>
                <Input />

                <Label>Password</Label>
                <Input type="password" />
            </ButtonMenu>
        </div>
    </div>
</div>
```
</docs>
