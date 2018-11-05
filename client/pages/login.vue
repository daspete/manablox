<template>
    <div class="login">

        <div class="login__form vertical-center">


            <div class="login__form__content">
                <Label class="mb-2" big bold>manablox login</Label>

                <div v-if="error" class="login__error mb-2">{{ error.message }}</div>

                <form v-on:submit.prevent="Login" class="text-right">
                    <Input type="text" v-model="credentials.email" placeholder="E-Mail" />
                    <Input class="mt-1" type="password" v-model="credentials.password" placeholder="Password" />
                    <Button class="mt-3" small type="submit">Login</Button>
                </form>
            </div>

        </div>


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

<style lang="scss">
@import "~/designsystem/tokens/colors.scss";

.login {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: $color-lightergray;

    &__error {
        padding: 0.5rem 0.833rem;
        background-color: $color-darkred;
        color: white;
    }

    &__form {
        width: 40%;
        max-width: 400px;
        min-width: 300px;

        background-color: $color-lightestgray;
        margin: 0 auto;
        box-shadow: 3px 11px 30px rgba(black, 0.2);

        &__content {
            padding: 1rem 1.66rem;
        }
    }
}
</style>
