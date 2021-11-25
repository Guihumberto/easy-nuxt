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
    </v-app-bar>

    <v-main class="grey lighten-4">
      <nuxt/>
    </v-main>

    <v-footer padless>
      <v-row justify="center" no-gutters>
        <v-col class="text-center primary--text" cols="12">
          <img :src="'https://easy-strapi-api.herokuapp.com'+ landingPage.header.logo.url" />
        </v-col>
        {{ 'maria'+ landingPage.header.logo.url }}
        <v-btn color="primary" small icon><v-icon>mdi-instagram</v-icon></v-btn>
        <v-btn color="primary" small icon><v-icon>mdi-whatsapp</v-icon></v-btn>
        <v-btn color="primary" small icon><v-icon>mdi-email</v-icon></v-btn>
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
        links: [
          { text: 'Home', icon: 'mdi-home', url:'/'},
          { text: 'Cardápio', icon: 'mdi-food-fork-drink', url:'/menu'},
          { text: 'Contato', icon: 'mdi-email-fast', url:'/contact'},
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
