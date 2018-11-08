<template>
    <div class="checkbox">
        <div
            v-if="Array.isArray(checked)"
            v-on:click="OnClick"
        >
            <div class="checkbox__box checkbox__box--checked" v-if="checked.includes(value)">
                <SvgIcon name="check" color="blue" size="18px" />
            </div>
            <div class="checkbox__box" v-else>
                <SvgIcon name="nocheck" color="lightblue" size="18px" />
            </div>
            <Label
                v-if="label"
                v-html="label"
            ></Label>
        </div>

        <div v-else v-on:click="$emit('input', value)">
            <div class="checkbox__box checkbox__box--checked" v-if="checked == value">
                <SvgIcon name="radiocheck" color="blue" size="18px" />
            </div>
            <div class="checkbox__box" v-else>
                <SvgIcon name="radionocheck" color="lightblue" size="18px" />
            </div>
            <Label
                v-if="label"
                v-html="label"
            ></Label>
        </div>


    </div>
</template>

<script>
import designtokens from "~admin/designsystem/tokens/tokens.scss";

export default {
    name: 'Select',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * target model
         *
         */
        checked: {
            default: null
        },

        /**
         * current value
         *
         */
        value: {
            default: null
        },

        /**
         * current label
         *
         */
        label: {
            default: null
        },


    },

    model: {
        prop: 'checked',
        event: 'input'
    },

    data(){
        return {
            tokens: designtokens
        }
    },

    methods: {
        OnClick(){
            if(this.checked.includes(this.value)){
                this.checked.splice(this.checked.indexOf(this.value), 1)
            }else{
                this.checked.push(this.value)
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.checkbox {
    display: block;
    cursor: pointer;

    &__box {
        display: inline-block;
        width: 20px;
    }
}
</style>


<docs>
```vue
<template>
    <div class="row">
        <div class="col-4">
            <Label big>Checkbox buttons</Label>
            <Select v-model="selectedOptions" value="test" label="Test" />
            <Select v-model="selectedOptions" value="test2" label="Test2" />
            <Select v-model="selectedOptions" value="test3" label="Test3" />
        </div>
        <div class="col-4">
            <Label big>Radio buttons</Label>
            <Select v-model="selectedOption" value="test1" label="Test1" />
            <Select v-model="selectedOption" value="test2" label="Test2" />
            <Select v-model="selectedOption" value="test3" label="Test3" />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selectedOptions: [],
            selectedOption: null
        }
    },

    watch: {
        selectedOptions(value){
            console.log(value);
        },
        selectedOption(value){
            console.log(value);
        }
    }
}
</script>


```

</docs>
