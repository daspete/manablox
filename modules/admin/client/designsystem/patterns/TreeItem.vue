<template>
    <div class="tree__item">
        <div class="tree__item__content" :style="`padding-left: ${ indentation * level }px`">
            <div class="row">
                <div class="col-9">
                    <Button class="tree__item__toggle" mini transparent v-on:click.native="ToggleOpen" v-if="item.children">
                        <span v-if="isOpen">-</span>
                        <span v-if="!isOpen">+</span>
                    </Button>
                    <span v-else :style="`width: 5px; display: inline-block; height: 10px;`"></span>

                    {{ item.title }}
                </div>
                <div class="col-3 text-right">

                </div>
            </div>



        </div>
        <TreeItem
            v-if="item.children && isOpen"
            v-for="child in item.children"
            :key="`tree-item-${ child._id }`"
            :item="child"
            :level="level + 1"
        />
    </div>
</template>

<script>
export default {
    name: 'TreeItem',

    props: {
        item: {
            type: Object
        },
        level: {
            type: Number,
            default: 0
        },
        indentation: {
            type: Number,
            default: 20
        }
    },

    data(){
        return {
            isOpen: false
        }
    },

    methods: {
        ToggleOpen(){
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style lang="scss">
@import "~admin/designsystem/tokens/tokens.scss";

.tree {
    &__item {
        font-size: 11px;

        &__toggle {
            width: 25px;
        }

        &__content {
            position: relative;
            padding: 5px;
            border-bottom: 1px solid rgba($color-gray, 0.3);
            background-color: white;
        }

    }
}
</style>
