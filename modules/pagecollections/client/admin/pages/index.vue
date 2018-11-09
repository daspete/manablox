<template>
    <div class="collections">
        <div class="admin__sidebar">
            <Button small v-on:click.native="AddRandomCollections">Add random collections</Button>

            <TreeItem
                v-if="collections"
                v-for="item in collections"
                :key="`tree-item-${ item._id }`"
                :item="item"
            />
        </div>

        <div class="admin__content">
            <nuxt-child />
        </div>
    </div>
</template>

<script>
const faker = process.client ? require('faker') : undefined

export default {

    async asyncData({ app, store }){
        let collections = []

        try{
            collections = await app.$axios.$get('pagecollections')
        }catch(e){}

        return {
            collections
        }
    },

    mounted(){
        this.$root.setLayout('withsockets')
    },

    methods: {
        async AddRandomCollections(){
            let collectionCount = 5;
            let collectionIndex = 0;

            for(collectionIndex = 0; collectionIndex < collectionCount; collectionIndex++){
                let collection = await this.$axios.$post('pagecollections', {
                    title: faker.random.words(2),
                    slug: faker.random.word()
                })

                let randomNumber = Math.round(Math.random() * 5 + 2);

                for(let i = 0; i < randomNumber; i++){
                    let subcollection = await this.$axios.$post('pagecollections', {
                        parentId: collection._id,
                        title: faker.random.words(2),
                        slug: faker.random.word()
                    })

                    let anotherRandomNumber = Math.round(Math.random() * 5 + 2);

                    for(let j = 0; j < anotherRandomNumber; j++){
                        let subsubcollection = await this.$axios.$post('pagecollections', {
                            parentId: subcollection._id,
                            title: faker.random.words(2),
                            slug: faker.random.word()
                        })
                    }
                }
            }

            let collections = await this.$axios.$get('pagecollections');
            this.collections = collections
        }
    }
}
</script>


<style lang="scss" scoped>
@import "~admin/designsystem/tokens/colors.scss";

$sidebar-width: 420px;

.collections {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
}

.admin {
    &__sidebar {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: $sidebar-width;
        background-color: white;
        border-right: 1px solid $color-lightergray;
    }

    &__content {
        position: absolute;
        top: 0;
        left: $sidebar-width;
        bottom: 0;
        right: 0;
        background-color: $color-lightestgray;
        padding: 1rem 1.66rem;
    }
}
</style>
