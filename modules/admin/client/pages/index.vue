<template>
    <div class="admin">
        <div class="admin__header">
            <div class="row">
                <div class="col-9">
                    <span class="admin__name ml-2">manablox</span>
                    <span class="admin__breadcrumb ml-3">admin</span>
                </div>
                <div class="col-3 text-right">
                    <Button medium v-on:click.native="Logout">Logout</Button>
                </div>
            </div>
        </div>

        <nuxt-child />
    </div>
</template>





<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {

    middleware: 'loggedin',

    methods: {
        Logout(){
            Cookie.remove('auth')
            this.$store.commit('setAuth', null)
            this.$router.push('/login')
        }

    }

}
</script>






<style lang="scss">
@import "~admin/designsystem/tokens/colors.scss";

.admin {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: $color-lightestgray;

    &__header {
        position: absolute;
        border-bottom: 1px solid $color-lightergray;
        background-color: white;

        width: 100%;
        height: 42px;
        overflow: hidden;
    }

    &__name {
        font-size: 1.66rem;
        color: $color-darkgray;
    }

    &__breadcrumb {
        font-size: 0.8rem;
        font-weight: 700;
        color: $color-darkgray;
    }

}
</style>



