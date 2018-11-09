<template>
    <div class="demo">
        <DemoElement />
        Welcome to your demo admin module
        <br>
        <br>
        API Response:
        <br>
        {{ democontent }}
    </div>
</template>

<script>

export default {

    async asyncData({ app, store }){
        let democontent = null

        try{
            democontent = await app.$axios.$get('demo')
        }catch(e){}

        return {
            democontent
        }
    }

}
</script>
