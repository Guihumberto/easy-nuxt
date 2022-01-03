<template>
    <v-container>
        <burguer-mountImg />
        <burguer-cadAddress v-if="pedido" @dadosEntrega="address = $event" />
        <burguer-formBurguer v-else @dadosPedido="pedido = $event" />
    </v-container>
</template>

<script>
export default {
    layout: "menuRestaurant",
    data(){
        return{
            pedido: undefined,
            address: undefined
        }
    }
}
</script>