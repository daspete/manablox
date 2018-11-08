<template>
    <div class="demo">
        Welcome to your demo admin module
    </div>
</template>

<script>

export default {

    async asyncData({ app, store }){
        let democontent = null

        try{
            democontent = await app.$axios.$get('demomodule')
        }catch(e){}

        return {
            democontent
        }
    }

}
</script>
