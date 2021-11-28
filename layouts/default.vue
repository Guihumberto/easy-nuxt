<template>
  <v-app>
    <v-navigation-drawer 
      app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
    >
     <v-list color="primary--text">
       <v-subheader>Easy Express</v-subheader>
       <v-list-item-group
          v-model="selectedItem"
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

    <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="landingPage.header.title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        v-model="search"
        :close-on-content-click="false"
        offset-y
      >
        <template v-slot:activator="{on}">
          <v-btn v-on="on" color="primary" icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Buscar...</v-card-title>
          <v-card-text>
            <v-text-field
              outlined
              label="Nome do Produto"
              dense
              v-model="findProduct"
            ></v-text-field>
            {{ findProduct }}
          </v-card-text>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main class="grey lighten-4">
      <nuxt/>
    </v-main>

    <v-footer padless>
      <v-row justify="center" no-gutters>
        <v-col class="text-center primary--text" cols="12">
          <img src="@/assets/img/logo.png" />
        </v-col>
        <v-btn color="primary" small icon  target="_blank" href="https://www.instagram.com/easyboteco/"><v-icon>mdi-instagram</v-icon></v-btn>
        <v-btn color="primary" small icon  target="_blank" href="https://www.instagram.com/easyboteco/"><v-icon>mdi-whatsapp</v-icon></v-btn>
        <v-btn color="primary" small icon  to="/about"><v-icon>mdi-email</v-icon></v-btn>
        <v-col class="text-center primary--text" cols="12">&copy; {{new Date().getFullYear()}} - Grupo Easy</v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
import gql from 'graphql-tag'

  export default {
    data(){
      return{
        drawer: false,
        search: false,
        findProduct: "",
        links: [
          { text: 'Home', icon: 'mdi-home', url:'/'},
          { text: 'Cardápio', icon: 'mdi-food-fork-drink', url:'/menu'},
          { text: 'Sobre', icon: 'mdi-help-box', url:'/about'}
        ]
      }
    },
    apollo: {
      landingPage: {
        query: gql`
          query {
            landingPage{
              header{
                logo{
                  name
                  url
                }
                title
              }
            }
          }
        `,
        update: data => data.landingPage
      }
    }
    
  }
</script>
