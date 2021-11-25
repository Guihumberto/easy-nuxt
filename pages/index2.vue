<template>
  <v-container>
    
    <v-btn class="primary">primary</v-btn>
    <v-btn class="secondary">secondary</v-btn>
    <v-btn class="accent">{{ landingPage }}</v-btn>

    <div class="mt-2">
      <v-btn class="warning">primary</v-btn>
      <v-btn class="error">primary</v-btn>
      <v-btn class="success">success</v-btn>
      <v-btn class="info">info</v-btn>
    </div>

    {{ counter }}
    <v-btn @click="callMutations()">Mutation</v-btn>
    <v-btn @click="callActions()">Action</v-btn>
    <div>
      <ul>
        <li v-for="product in pro" :key="product.id">
          <v-btn
            :to="{
              name: 'product', 
              params:{product:product.name},
              query:{id:product.id}
              }"
            class="my-1"
          >{{ product.name }}</v-btn>
        </li>
      </ul>
      {{ categories }}
    </div>

  </v-container>
</template>

<script>
import { products } from '../graphql/query'

  export default {
    data(){
      return{
        query: products
      }
    },
    apollo:{
      pro: {
        query: products, 
        update: data => data.products
      }
    },
    computed:{
      counter(){
        return this.$store.getters.readCounter
      },
      landingPage(){
        return this.$store.getters.readLandingPage
      }
    },
    methods: {
      callMutations(){
        this.$store.commit("increment")
      },
      callActions(){
        this.$store.dispatch("increment")
      }
    },
    async asyncData(context){
      const client = context.app.apolloProvider.defaultClient

      const query = {
        query:require("../graphql/categories.gql")
      }

      let categories = []
      await client.query(query).then(data => {
        console.log(data)
        categories = data.data.categories
      })

      return {categories}
    }
  }
</script>