<template>
    <v-container>
        <div v-if="address">
            <burguer-payBurguer :address="address" :order="pedido" />
        </div>
        <div  v-else>
            <burguer-mountImg />
            <burguer-cadAddress v-if="pedido && adicionais" @dadosEntrega="address = $event" @dadosAdicionais="adicionais = $event"/>
            <burguer-sodasBurguer v-else-if="pedido" @dadosAdicionais="adicionais = $event" :burguer="pedido" @voltar="pedido = $event" />
            <burguer-formBurguer v-else @dadosPedido="pedido = $event" />
        </div>
        <!-- <v-footer app fixed padless>
           <v-btn
                    color="primary"
                    dark
                    @click="sheet = !sheet"
                    block
                >
                    <v-icon small class="mr-2">mdi-cart</v-icon>Enviar Pedido ({{totalItems}}) R$ {{Total | formatCurrency}}
            </v-btn>
        </v-footer> -->
    </v-container>
</template>

<script>
export default {
    layout: "menuRestaurant",
    data(){
        return{
            pedido: undefined,
            address: undefined,
            show: false,
            adicionais: false
        }
    }
}
</script>

<style scoped>

</style>