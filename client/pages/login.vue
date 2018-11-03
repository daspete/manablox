<template>
    <div class="login">
        LOGIN

        <div v-if="error">{{ error.message }}</div>

        <form v-on:submit.prevent="Login">
            <input type="text" v-model="credentials.email" placeholder="E-Mail">
            <input type="password" v-model="credentials.password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>

const Cookie = process.client ? require('js-cookie') : undefined

export default {

    middleware: 'loggedout',

    asyncData(){
        return {
            credentials: {
                email: 'daspetemail@gmail.com',
                password: 'hunter'
            },
            error: false
        }
    },

    methods: {
        async Login(){
            try {
                let { token } = await this.$axios.$post('auth/login', this.credentials)

                this.$store.commit('setAuth', {
                    accessToken: token
                })
                Cookie.set('auth', {
                    accessToken: token
                })
                this.$router.push('/admin')
            }catch(err){
                this.error = err.response.data;
            }



        }
    }

}
</script>
