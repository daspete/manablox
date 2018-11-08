<template>
    <div class="widget">
        <div class="widget__header" v-if="$slots.header">
            <slot name="header" />
        </div>
        <div class="widget__content">
            <slot />
        </div>
    </div>
</template>

<script>
/**
 * Widget box
 */
export default {
    name: 'Widget',
    status: 'prototype',
    release: '0.0.1',
    props: {

    }
}
</script>

<style lang="scss" scoped>
@import "~admin/designsystem/tokens/tokens.scss";

.widget {
    background-color: white;
    padding: 20px 20px 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);

    font-size: 14px;
    font-family: "Source Sans Pro";
    color: $color-gray;

    &__content {
        padding-top: 10px;
    }
}
</style>


<docs>
```jsx
    <div>
        <Widget>
            <template slot="header">
                <div class="row">
                    <div class="col-8">
                        Translation Status
                        <Badge small backgroundColor="red">3</Badge>
                        <Badge small backgroundColor="orange">10</Badge>
                    </div>
                    <div class="col-4 text-right">
                        <Button mini inverted>
                            Edit
                            <SvgIcon name="edit" size="12px" color="blue" />
                        </Button>
                    </div>
                </div>
            </template>

            <div class="row">
                <div class="col-12">
                    This is a test content for a widget box
                </div>
            </div>
        </Widget>
    </div>
```
</docs>
