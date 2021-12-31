<template>
    <v-container>
        <nuxt-link to="/">Voltar</nuxt-link>
        <h1>{{$route.params.category}}</h1>
        
        <v-list max-width="800" class="mx-auto">
            <v-list-item v-for="product in products" :key="product.id">
              <nuxt-link
                style="text-decoration: none; color: inherit;"
               :to="{
                name:'category-product',
                params:{category: $route.params.category, product: product.id},
              }">
                <div class="d-flex listwrapper">
                    <v-list-item-avatar height="80" width="80" rounded>
                        <v-img :src="product.img"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{product.name}} R${{product.price}}<v-list-item-subtitle v-html="product.description"></v-list-item-subtitle></v-list-item-title>
                        
                    </v-list-item-content>
                </div>
              </nuxt-link> 
            </v-list-item>   
        </v-list>
    </v-container>
</template>

<script>
export default {
    data() {
        return{

        }
    },

    async asyncData({app, route}){
        const slug = route.params.category
        const client = app.apolloProvider.defaultClient
        const query = {
            query: require("../../graphql/productCategory.gql"),
            variables: {slug}
        }
        let products = []
        await client.query(query).then(data => {
            products = data.data.products
        }).catch(e => console.log(e))
        return {products}
    }
}
</script>

<style scoped>
</style>