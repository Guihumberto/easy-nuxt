<template>
  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
    <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
            <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-4 white--text"
            icon
            :href="icon.url" target="_blank" 
            >
                <v-icon size="24px">
                    {{ icon.icon }}
                </v-icon>
            </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
            <v-btn dark small text v-for="category in categories" :key="category.id"
              :to="{
                name:'category',
                params:{category:category.slug},
              }">
              <v-icon small class="mr-1">{{category.icon}}</v-icon> {{category.name}}
            </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
             <img src="@/assets/img/logo.png" />
             <v-divider></v-divider>
            Rua Frederico Peixoto, 108, Centro.<br>
            Pinheiro-MA - CEP: 65200-000<br>
             &copy; {{new Date().getFullYear()}} — <strong>Grupo Easy</strong>
        </v-card-text>
    </v-card>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {icon:'mdi-map-marker-radius', url: 'https://goo.gl/maps/pdjqTcvidsy17oQHA'},
        {icon:'mdi-youtube', url: 'https://www.youtube.com/channel/UChSfBWVfMee02wRcqhsQ1FQ'},
        {icon:'mdi-email', url: 'juninho.joao@hotmail.com'},
        {icon:'mdi-instagram', url: 'https://www.instagram.com/easyboteco/'},
      ],
    }),
    props: {
        categories:{
            required: false
        }
    }
  }
</script>