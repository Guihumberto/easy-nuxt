<template>
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn block 
          color="success" 
          v-bind="attrs"
          v-on="on"
          type="submit">ENCOMENDAR</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
              class="mb-2"
            >Confirmação dos Dados</v-toolbar>
            <v-card-text>
                <p>
                    Nome:  {{order.name}}<br>
                    Data da Retirada/Entrega: {{order.dateOrder}} <br>
                    Observações: {{order.obs}} <br>
                    <div v-if="order.delivery == 'Entrega'">
                        <strong>Entrega</strong>
                        Endereço: {{order.address}} {{order.nro}} {{order.district}} <br>
                        {{order.city}}, {{order.uf}} <br>
                        Ponto de Referência:  {{order.referencePoint}}
                    </div>
                    <div v-else>
                        <strong>Retirada</strong><br>
                        Av. Frederico Peixoto, 108, Centro<br>
                        Pinheiro - MA <br>
                        Easy Conveniência
                    </div>
                </p>
                <p style="color: red">Enviar comprovante de pagamento para o whatsapp da loja que aparecera na próxima tela, no valor de R$60,00 (50% do valor do pedido), para confirmar a encomenda

                </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                @click="dialog.value = false"
              >Fechar</v-btn>
              <v-spacer></v-spacer>
              <v-btn small color="primary" @click="sendMsg">
                  <v-icon class="mr-2">mdi-whatsapp</v-icon>
                  Enviar Pedido</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
</template>

<script>
export default {
    data(){
        return{
             phone: 559884650786,
        }
    },
    props:{
        order:{
            required: false
        }
    },
    computed:{
        orderss(){
              let pedido = "Encomenda - Torta de Limão inteira (6 a 8 fatias)"
              return pedido
            }
    },
    methods:{
        sendMsg(){
                let novo = this.orderss
                const urlApi = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send" 
                const somaTotal = "120,00"
                const troco = "Pagamento de 50% (R$60,00)"
                const atexto = "*Pedido*: \n"+ novo +"\n====================\n*Valor Total* R$" + somaTotal + this.order.obs +" \n *Pagamento*: \n" + troco + " \n ====================\n *Nome*: " + this.order.name + " \n *Endereço*: "+ this.order.address +", Nro: " + this.order.nro + ", Bairro: " + this.order.district + "\n Ponto de Referência: "+ this.order.referencePoint +"\n=====================";
                const texto = window.encodeURIComponent(atexto);
                window.open(urlApi + "?phone=" + this.phone + "&text=" + texto, "_blank")
                this.$router.push('confirmOrder')
        }
    }
}
</script>