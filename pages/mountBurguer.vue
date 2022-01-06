<template>
    <v-container>
        <div v-if="address">
            <burguer-payBurguer :address="address" :order="adicionais" @goAddress="address = false"/>
        </div>
        <div  v-else>
            <burguer-mountImg />
            <burguer-cadAddress v-if="pedido && adicionais" @dadosEntrega="address = $event" @dadosAdicionais="adicionais = $event"/>
            <burguer-sodasBurguer v-else-if="pedido" @dadosAdicionais="adicionais = $event" :burguer="pedido" @voltar="pedido = $event" />
            <burguer-formBurguer v-else @dadosPedido="pedido = $event" />
        </div>

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