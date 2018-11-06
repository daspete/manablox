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

        <div class="admin__sidebar">
            <Button small v-on:click.native="AddRandomDataObjects">Add random dataobjects</Button>

            <TreeItem
                v-if="dataobjects"
                v-for="item in dataobjects"
                :key="`tree-item-${ item._id }`"
                :item="item"
            />
        </div>

        <div class="admin__content">
            CONTENT
        </div>

    </div>
</template>





<script>
const Cookie = process.client ? require('js-cookie') : undefined
const faker = process.client ? require('faker') : undefined

export default {

    middleware: 'loggedin',

    async asyncData({ app, store }){
        // let dataobjects = await app.$axios.$get('dataobjects');

        return {
            dataobjects: []
        }
    },

    mounted(){

    },

    methods: {
        Logout(){
            Cookie.remove('auth')
            this.$store.commit('setAuth', null)
            this.$router.push('/login')
        },

        async AddRandomDataObjects(){
            let dataobjectCount = 5;
            let dataobjectIndex = 0;

            for(dataobjectIndex = 0; dataobjectIndex < dataobjectCount; dataobjectIndex++){
                let dataobject = await this.$axios.$post('dataobjects', {
                    title: faker.random.words(2),
                    slug: faker.random.word()
                })

                let randomNumber = Math.round(Math.random() * 5 + 2);

                for(let i = 0; i < randomNumber; i++){
                    let subdataobject = await this.$axios.$post('dataobjects', {
                        parentId: dataobject._id,
                        title: faker.random.words(2),
                        slug: faker.random.word()
                    })

                    let anotherRandomNumber = Math.round(Math.random() * 5 + 2);

                    for(let j = 0; j < anotherRandomNumber; j++){
                        let subsubdataobject = await this.$axios.$post('dataobjects', {
                            parentId: subdataobject._id,
                            title: faker.random.words(2),
                            slug: faker.random.word()
                        })
                    }
                }
            }

            let dataobjects = await this.$axios.$get('dataobjects');
            this.dataobjects = dataobjects
        }
    }

}
</script>






<style lang="scss">
@import "~/designsystem/tokens/colors.scss";

$sidebar-width: 420px;

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

    &__sidebar {
        position: absolute;
        top: 42px;
        bottom: 0;
        left: 0;
        width: $sidebar-width;
        background-color: white;
        overflow: auto;
        border-right: 1px solid $color-lightergray;
    }

    &__content {
        position: absolute;
        top: 42px;
        left: $sidebar-width;
        bottom: 0;
        right: 0;
        background-color: $color-lightestgray;
        padding: 1rem 1.66rem;
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



