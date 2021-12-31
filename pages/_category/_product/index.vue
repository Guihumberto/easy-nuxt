<template>
    <v-container>
        <h1 class="secondary--text">Detalhes do Produto</h1>
       <v-row>
           <v-col cols="3">
               <nav-card-product :product="product" />
           </v-col>
       </v-row>
    </v-container>
</template>

<script>
export default {
    async asyncData({app, route}){
        const id = route.params.product
        const client = app.apolloProvider.defaultClient
        const query = {
            query: require("../../../graphql/product.gql"),
            variables: {id}
        }
        let product = null
        await client.query(query).then(data => {
            product = data.data.product
        }).catch(e => console.log(e))
        return {product}
    }
}
</script>