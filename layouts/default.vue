<template>
  <v-app>
    <v-navigation-drawer 
      app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
    >
     <v-list color="primary--text">
       <v-subheader v-text="landingPage.header.subtitle"></v-subheader>
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

      <div v-if="$auth.loggedIn">
        <v-menu
          v-model="loginmenu"
          :close-on-content-click="false"
          offset-y
          >
          <template v-slot:activator="{on}">
            <v-btn small v-on="on" icon>
              <v-avatar class="secondary">
                <span class="white--text headline"> {{$auth.user.username[0]}} </span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $auth.user.username }}</v-list-item-title>
                  <v-list-item-subtitle>{{ $auth.user.email }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn small to="/user">Admin</v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-btn color="primary" @click="loginmenu = false" icon><v-icon>mdi-close</v-icon></v-btn>
              <v-btn color="primary" @click="logout()" icon><v-icon>mdi-logout</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
      <div v-else>
        <v-btn small icon color="primary" @click="dialog = true; type='forms-login'"><v-icon>mdi-login</v-icon></v-btn>
        <v-btn small icon color="primary" @click="dialog = true; type='forms-register'"><v-icon>mdi-account-plus</v-icon></v-btn>
      </div>

    </v-app-bar>

    <v-main class="grey lighten-4">
      <nuxt/>
      
      <v-snackbar 
        v-for="(snack, i) in snacks.filter((s)=> s.showing)" 
        :key="i + Math.random()"
        :color="snack.color" :timeout="snack.timeout" 
        right 
        :style="`bottom: ${i * 60 + 8}px`"
        v-model="snack.showing">
        {{snack.text}}
        <v-btn slot="action" small icon @click="snack.showing = false">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
    </v-main>

    <v-dialog v-model="dialog" max-width="600">
      <component :is="type" @close="dialog = $event"/>
    </v-dialog>

  </v-app>
</template>

<script>
import gql from 'graphql-tag'
import {mapGetters} from 'vuex'

  export default {
   // middleware:"initData",
    data(){
      return{
        drawer: false,
        search: false,
        findProduct: '',
        dialog: false,
        type: 'forms-login',
        snack: false,
        loginmenu: false,
        links: [
          { text: 'Home', icon: 'mdi-home', url:'/'},
          { text: 'Cardápio', icon: 'mdi-food-fork-drink', url:'/menu'},
          { text: 'Delivery', icon: 'mdi-moped-outline', url:'/test'},
          { text: 'Cadastrar', icon: 'mdi-hamburger-plus', url:'/addProducts'},
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
                title
                subtitle
                description
              }
            }
          }
        `,
        update: data => data.landingPage
      }
    },
    computed:{
      ...mapGetters({
        snacks: "snackbars/readSnackbars"
      })
    },
    methods:{
      // test(){
      //   this.$store.dispatch("snackbars/setSnack", {text:'hola action', color:'info'})
      // },
      logout(){
        this.$auth.logout()
        this.loginmenu = false
      }
    }
  
  }
</script>
