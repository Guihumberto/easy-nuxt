<template>
    <v-container>
        <div v-if="address">
            <burguer-payBurguer :address="address" :order="pedido" />
        </div>
        <div  v-else>
            <burguer-mountImg />
            <burguer-cadAddress v-if="pedido" @dadosEntrega="address = $event" />
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
            show: false
        }
    }
}
</script>