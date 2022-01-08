<template>
  <v-app>
    <ui-sideBar :subtitleSite="subtitleSite" :drawer="drawer" />
    <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> {{titleSite}} </v-toolbar-title>
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
          <v-btn color="success" small to="/test"> <v-icon small class="mr-2">mdi-moped-outline</v-icon> Delivery</v-btn>
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

  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    data(){
      return{
        drawer: false,
        search: false,
        findProduct: '',
        dialog: false,
        snack: false,
      }
    },
    computed:{
      ...mapGetters({
        titleSite: 'readTittleSite',
        subtitleSite: 'readSubtitleSite',
        snacks: "snackbars/readSnackbars"
      }),
    }, 
  }
</script>
