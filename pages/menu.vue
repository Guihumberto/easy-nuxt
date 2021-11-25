<template>
    <v-container>
        <h1 class="secondary--text">Cardápio para Pronta Entrega
            <v-icon color="blue" large>mdi-moped</v-icon>
        </h1>
        <p class="secondary--text">Mocotó e feijoada apenas sábados e domingos.</p>
        <v-row>
            <v-col xs12 sm6 md8 lg8 v-for="menu in menuSingle" :key="menu.name">
                <menuSingle
                    :menu="menu"
                ></menuSingle>
            </v-col>
        </v-row>
        <h1 class="secondary--text">Cardápio para Encomendas
            <v-icon color="blue" large>mdi-moped</v-icon>
        </h1>
        <p class="secondary--text">Pratos para pedidos apenas por encomenda com antecedência de 2 dias.</p>
        <v-row>
            <v-col xs12 sm6 md8 lg8 v-for="menu in menuSingle" :key="menu.name">
                <menuSingle
                    :menu="menu"
                ></menuSingle>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                menuSingle: [
                    {name: "Mocotó", qtd:"serve 2 pessoas", frete:"grátis"},
                    {name: "Feijoada", qtd:"serve 2 pessoas", frete:"grátis"},
                    {name: "Torta de Limão", qtd:"serve 8 pessoas", frete:"grátis"},
                    {name: "Feijoada", qtd:"serve 2 pessoas", frete:"grátis"}
                ]
            }
        }
        
    }
</script>