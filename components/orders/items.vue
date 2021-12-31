<template>
    <v-card max-width="800" class="mx-auto">
        <v-card-text><h2>Monte seu pedido</h2></v-card-text>
        {{ order.category}}
        <v-card-text>
            <v-form @submit.prevent="onsubmit">

                <v-select
                label="Escolha seu prato"
                dense
                outlined
                :items= "prato"
                v-model="order.prato"
                ></v-select>

                <v-select
                label="Para quantas pessoas"
                dense
                outlined
                :items= "items"
                v-model="order.items"
                ></v-select>
                <h2>Arroz</h2> 
                <v-radio-group
                v-model="order.arroz"
                row
                >
                <v-radio
                    label="Branco"
                    value="Arroz Branco"
                ></v-radio>
                <v-radio
                    label="Brócolis"
                    value="Arroz com Brócolis"
                ></v-radio>
                </v-radio-group>

                <h2>Farinha/Farofa</h2>      
                <v-radio-group
                v-model="order.far"
                row
                >
                <v-radio
                    label="Farinha"
                    value="Farinha"
                ></v-radio>
                <v-radio
                    label="Farofa"
                    value="Farofa"
                ></v-radio>
                </v-radio-group>
                <v-select
                label="Forma de Envio"
                outlined
                dense
                :items="delivery"
                v-model="order.delivery"
                ></v-select>

                <v-select
                label="Forma de Pagamento"
                outlined
                dense
                :items="payment"
                v-model="order.payment"
                ></v-select>

                <v-text-field
                label="Troco"
                dense
                v-model="order.pay"
                placeholder="Troco para quanto?"
                :v-show="order.payment"
                ></v-text-field>

                <v-textarea
                label="Observação"
                outlined
                v-model="order.obs"
                dense
                placeholder="Informe algo sobre seu pedido para nós"
                ></v-textarea>
                <h2>Total: R$ 25,00</h2>
                <v-btn type="submit" class="mt-1" block color="primary">Enviar</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            prato: ['Mocotó', 'Feijoada'],
            items: ['1 ou 2 pessoas', '3 ou 4 pessoas', '5 ou 6 pessas'],
            delivery: ['Entrega', 'Retirada'],
            payment: ['Pix', 'Débito', 'Crédito', 'Dinheiro'],
            order:{
                type: Object,
                default: () => ({
                    prato: "",
                    items: "",
                    arroz: "",
                    far: "",
                    delivery:"",
                    payment:"",
                    pay: "",
                    obs: ""   
                })             
            }
            
        }
    },
    methods: {
        onsubmit (event) {
            this.$emit('dadosPedido', this.order)
            console.log(this.order)
        }
    }
}
</script>

<style scoped>
    .v-card.borderme{
    border: 2px solid #704232 !important;
    }
    .v-card.borderout{
        border: 1px solid #BCAAA4 !important;
    }
</style>