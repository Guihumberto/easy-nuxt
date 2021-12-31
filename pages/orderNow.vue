<template>
    <v-container>
        <v-toolbar color="rgba(0,0,0,0)" flat>
            <v-toolbar-title class="mt-n3">Easy Express</v-toolbar-title>
        </v-toolbar>

        <orders-check 
        v-if="pedido"
        :pedido="pedido" 
        @back="pedido = event"
        />

        <orders-items 
        v-else
        @dadosPedido="pedido = $event"
        />
        
    </v-container>
    
</template>

<script>
export default {
    data(){
        return{
            pedido: undefined
        }
    }   
}
</script>