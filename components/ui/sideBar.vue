<template>
    <v-navigation-drawer 
      app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
    >
     <v-list color="primary--text">
       <v-subheader v-text="subtitleSite"></v-subheader>
       <v-list-item-group
          color="primary"
        >
        <v-list-item v-for="link in links" :key="link.text" :to="link.url">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> {{ link.text }} </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
       </v-list-item-group>
     </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data(){
        return{
            links: [
                { text: 'Home', icon: 'mdi-home', url:'/'},
                { text: 'Cardápio', icon: 'mdi-food-fork-drink', url:'/menu'},
                { text: 'Delivery', icon: 'mdi-moped', url:'/test'},
                //{ text: 'Hamburguer', icon: 'mdi-hamburger', url:'/burguer'},
                //{ text: 'Cadastrar', icon: 'mdi-hamburger-plus', url:'/addProducts'},
                { text: 'Sobre', icon: 'mdi-information', url:'/about'}
            ]
        }
    },
    props:{
        drawer:{
            required: true
        },
        subtitleSite:{
            required: true
        }
    },
    methods:{
        
    }
}
</script>