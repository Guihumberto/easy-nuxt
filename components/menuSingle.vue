<template>
    <v-card
      :loading="loading"
      class="mx-auto my-auto"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        :src="menu.url"
      ></v-img>
  
      <v-card-title>{{ menu.name }}</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            4.5 (413)
          </div>
        </v-row>
        <div class="my-4"> <v-chip> Entrega:  </v-chip></div>  
        <div class="text-subtitle-1">
          R${{ menu.price }}
        </div>
  
        <div>{{ menu.description | truncate(42) }}</div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          to="/test"
        >
          Fazer pedidos
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props:{
      menu: {
        type: Object,
        requerid:true
      }
    },
    data() {
        return{
            loading: false,
            selection: 1,
        }
    },
    methods:{
        reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
        },
    }
}
</script>