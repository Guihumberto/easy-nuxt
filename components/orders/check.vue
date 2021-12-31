<template>
    <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIHwZDq8V_V7IzgyyAHKtTOnXcXqbPVNTtw&usqp=CAU"
      gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
      height="200px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title>
          <v-btn
            dark
            icon
            class="ml-7"
            @click="editOrder()"
          >
            <v-icon>mdi-chevron-left</v-icon>Editar <v-icon small>mdi-pencil</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text px-auto pt-12">
          <div class="text-h4 pl-12 pt-12">
            Pedido {{$auth.user.username}}
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
            mdi-order-bool-ascending
            </v-icon>
          </v-list-item-icon>
           <v-list-item-content>
          <v-list-item-title>Pedido</v-list-item-title>
          <v-list-item-subtitle>
              Para: {{pedido.items}} <br>
              com {{pedido.arroz}} e {{pedido.far}} <br>
              Forma de envio: {{pedido.delivery}} <br>
              Forma de Pagamento: {{ pedido.payment}} <br>
              Precisa de troco: {{pedido.pay}} <br>
              Observação: {{pedido.obs}}
              <v-divider></v-divider>
              Valor da Entrega: Grátis <br>
              Valor do Pedido: R$ 25,00 <br>
              <v-divider></v-divider>
              <h2>Total: R$ 25,00</h2> 
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(98) 98465-0786</v-list-item-title>
          <v-list-item-subtitle>Celular</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Endereço de Entrega</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-action>
          <v-list-action-item>
              <v-btn class="mx-auto" color="success" block> <v-icon>mdi-whatsapp</v-icon> Enviar Pedido</v-btn>
          </v-list-action-item>
      </v-list-action>
    </v-list>
  </v-card>
</template>

<script>
export default {
    props: {
        pedido: {
            requerid:undefined
        }
    },
    methods: {
        editOrder(event){
            this.$emit('back', false)
        }
    }
}
</script>