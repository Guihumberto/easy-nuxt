<template>
  <v-app>
    <ui-sideBar :subtitleSite="subtitleSite" :drawer="drawer" />
    <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp" color="green" dark>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="subtitleSite"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        v-model="search"
        :close-on-content-click="false"
        offset-y
      >
        <template v-slot:activator="{on}">
          <v-btn v-on="on"  icon>
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
            <v-btn v-on="on" icon>
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
        <v-btn small icon @click="dialog = true; type='forms-login'"><v-icon>mdi-login</v-icon></v-btn>
        <v-btn small icon @click="dialog = true; type='forms-register'"><v-icon>mdi-account-plus</v-icon></v-btn>
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
    <v-bottom-navigation
        app
        fixed
        hide-on-scroll
        scroll-target="#hide-on-scroll-example"
      >
        <v-btn
          color="green accent-4"
          text
          v-for="menuNav in links" :key="menuNav.text"
          :to="menuNav.url"
          v-show="menuNav.show"
        >
          <span>{{menuNav.text}}</span>
  
          <v-icon>{{menuNav.icon}}</v-icon>
        </v-btn>
    </v-bottom-navigation>

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
      }
    },
    // apollo: {
    //   landingPage: {
    //     query: gql`
    //       query {
    //         landingPage{
    //           header{
    //             title
    //             subtitle
    //             description
    //           }
    //         }
    //       }
    //     `,
    //     update: data => data.landingPage
    //   }
    // },
    computed:{
      ...mapGetters({
        titleSite: 'readTittleSite',
        subtitleSite: 'readSubtitleSite',
        snacks: "snackbars/readSnackbars"
      })
    },
    methods:{
      logout(){
        this.$auth.logout()
        this.loginmenu = false
      }
    }
  
  }
</script>
