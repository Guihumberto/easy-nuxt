<template>
    <v-container>
            <div class="text-center">
              <v-alert
                border="left"
                colored-border
                color="green"
                elevation="2"
                class="my-5 mr-2"
               ><v-icon>mdi-hamburger-plus </v-icon> Cadastrar Produtos
              </v-alert>
            </div>
            <h2 class="ma-5">Bem Vindo {{ $auth.user.username }}</h2>
            <v-divider class="mb-5"></v-divider>
            
            <div class="d-flex mx-5 my-5">
              <h3>Lista de Produtos</h3>
              <v-spacer></v-spacer>
              <v-btn to="/newProduct" small color="primary"> <v-icon small>mdi-plus</v-icon> Incluir Produtos</v-btn>
            </div>
            <div class="mx-5" v-if="products">
              <ui-listProducts :products="products"></ui-listProducts>
            </div>
            <div v-else>
              Não existem produtos cadastrados
            </div>
    </v-container>
</template>

<script>
  export default {
    middleware: 'auth',
    async asyncData({app}){
      let client = app.apolloProvider.defaultClient
      let query = {
        query:require("../graphql/products.gql")
      }
      let products = null
      await client.query(query).then(data => {
          products = data.data.products
      })
      return {products}
    }   
  }
</script>