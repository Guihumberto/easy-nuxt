<template>
      <v-card max-width="800" class="mx-auto mb-2">
        <v-form @submit.prevent="onsubmit" ref="form">
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Check</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              outlined
              type="submit"
            >
              Enviar
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card max-width="800" class="mt-5 mx-auto">
        <v-list
          three-line
          subheader
        >
          <v-subheader>Confirme seu pedido e endereço</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-justify"><b>Pedido</b></v-list-item-title>
            <v-simple-table>
                <div>
            <span v-if="order.bread">Pão {{order.bread}}</span>
            <span v-if="order.cheese">, com queijo {{order.cheese}}</span>
            <span v-if="order.salad.length">, com 
              <i v-for="item in order.salad" :key="item">{{item}}, </i></span>
            <span v-if="order.sauce">e molho de {{order.sauce}}</span>
          </div>
          <div>
            <span v-if="order.meatSpot">A carne vai {{order.meatSpot}}</span>
            <span v-if="order.meatAmunt">e com {{order.meatAmunt}}</span>
            <span v-if="order.add.length">, com os seguintes adicionais 
              <i v-for="item in order.add" :key="item">{{item}}, </i>
            </span>
          <br> 
            <span v-if="order.obs">Obs: {{order.obs}}</span>
          </div>
            </v-simple-table>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Entrega</v-list-item-title>
                  <strong>Cliente:</strong>{{address.name}} - {{address.phone}}<br>
                  {{address.endereco}}, {{address.nro}}, {{address.bairro}},<br>
                  <b>Ponto de Referência:</b> {{address.obs}}

            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Pagamento</v-subheader>
          <v-list-item>
            <v-select
            label="Forma de Pagamento"
            :items="items"
            v-model="pay.method"
            :rules="[rules.required]"
            ></v-select>
          </v-list-item>
          <v-list-item>
            <v-list-item-content v-if="pay.method == 'Pix'">
              <v-list-item-title>Chave CPF: 01791743390</v-list-item-title>
              <v-list-item-subtitle>João Humberto Silva Ribeiro Júnior</v-list-item-subtitle>
              <v-list-item-subtitle>Encaminhe o comprovante do pagamento para o número a seguir, após a confirmação.</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content v-else-if="pay.method == 'Dinheiro'">
              <v-list-item-title>Precisa de Troco?</v-list-item-title>
              <v-text-field
              label="Troco para quanto?"
              v-model="pay.troco"
              ></v-text-field>
            </v-list-item-content>
            <v-list-item-content v-else-if ="pay.method == 'Débito' || 'Crédito'">
              <v-list-item-title>Será levado a máquina para passar o cartão.</v-list-item-title>
              <v-list-item-subtitle color="error">Obs. não parcelamos o valor.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        </v-card>
        </v-form>
      </v-card>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        phone: 559884650786,
        notifications: true,
        sound: true,
        widgets: true,
        items: ['', 'Pix', 'Débito', 'Crédito', 'Dinheiro'],
        pay:{
            method:"",
            troco:""
        },
        rules: {
        required: (value) => !!value || "Este campo é obrigatório",
      },
      }
    },
    props:{
        address: {
            required: false
        },
        order: {
            required: false
        }
    },
    computed: {
            // totalItems(){
            //     return this.order.reduce((accumulator , item) => {
            //         return accumulator  + item.qtd;
            //     }, 0);
            // },
            // Total() {
            //     let total = 0;
            //     this.order.forEach(item => {
            //         total += (item.price * item.qtd);
            //     });
            //     return total;
            // },
            // orderss(){
            //   let pedido = []
            //   this.order.forEach(function(i){
            //       pedido += `-${i.name} - qtd(${i.qtd}) \n`
            //   })
            //   return pedido
            // }
    
    },
    methods: {
            onsubmit() {
              if (this.$refs.form.validate()) {
                let novo = this.orderss
                const urlApi = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send" 
                const somaTotal = this.Total
                const troco = `Troco para R$${this.pay.troco}`
                const atexto = "*Pedido*: \n"+ novo +"====================\n*Valor Total* R$" + somaTotal + " \n *Pagamento*: " + this.pay.method +"\n" + troco + " \n ====================\n *Nome*: " + this.address.name + " \n *Endereço*: "+ this.address.endereco +", Nro: " + this.address.nro + ", Bairro: " + this.address.bairro + "\n Ponto de Referência: "+ this.address.obs +"\n=====================";
                const texto = window.encodeURIComponent(atexto);
                window.open(urlApi + "?phone=" + this.phone + "&text=" + texto, "_blank")
                this.$router.push('confirmOrder')
              }
            }
    }
  }
</script>