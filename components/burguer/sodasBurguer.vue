<template>
    <v-expansion-panels multiple>
        <v-expansion-panel v-for="product in products" :key="product.id">
            <v-expansion-panel-header>{{ product.name }} <v-spacer></v-spacer> R$ {{ product.price | formatCurrency }}</v-expansion-panel-header>
            <v-expansion-panel-content>
                <div class="d-flex">
                    <div class="mr-5">
                        <v-img class="borderImg" contain width="100" :src="product.img"></v-img>
                    </div>
                    <div>
                        <div class="d-flex">
                            <v-btn fab class="my-3 mr-2" x-small color="error" @click="decrementar(product)"> <v-icon>mdi-minus</v-icon></v-btn>
                            <v-btn fab class="my-3 mr-5" x-small color="success" @click="incrementar(product)"><v-icon>mdi-plus</v-icon></v-btn>
                            <div class="mt-4">Qtd: {{ product.qtd }}</div>
                        </div>

                        <div class="mt-2 d-flex">
                            <v-btn color="success" class="mr-2" small @click="addCart(product)" >Adicionar</v-btn>
                        </div>                  
                    </div>
                </div>  
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
    export default {
        data(){
            return{
                products: [
                    {
                        id: 1,
                        price: 5,
                        name: "Coca-cola em Lata",
                        img: "https://media.istockphoto.com/photos/classic-cocacola-can-picture-id465133878?b=1&k=20&m=465133878&s=170667a&w=0&h=yJBEv40IJfYVbFCoxLnbAOgVJsfrD39zBXMAsHIgNNo=",
                        description: "detalhes"
                    },
                    {
                        id: 2,
                        price: 5,
                        name: "Guaraná Jesus em Lata",
                        img: "https://m.media-amazon.com/images/I/719NOxnAeGL._AC_SX679_.jpg",
                        description: "detalhes"
                    },
                    {
                        id: 3,
                        price: 10,
                        name: "Heineken Longneck",
                        img: "https://media.istockphoto.com/photos/heineken-beer-on-ice-picture-id147307096?b=1&k=20&m=147307096&s=170667a&w=0&h=YiMONiiPvtH0XAdgTQP-vMze_LJXjzyYcPkqUNoKzbo=",
                        description: "detalhes"
                    },
                    {
                        id: 4,
                        price: 8,
                        name: "Budweiser Longneck",
                        img: "https://media.istockphoto.com/photos/budweiser-picture-id458671967?b=1&k=20&m=458671967&s=170667a&w=0&h=P8AKwxEpxp7ASMaRyesfWwYx2qjtuYUAU0aCBxstr5w=",
                        description: "detalhes"
                    }
                ]
            }
        }
        
    }
</script>

<style>
    .v-expansion-panel{
    border: 2px solid #704232 !important;
    }
    .v-expansion-panel{
        border: 1px solid #BCAAA4 !important;
    }
    .borderImg{
        border: 1px solid #BCAAA4 !important;
    }
</style>

