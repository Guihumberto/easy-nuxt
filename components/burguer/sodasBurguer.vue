<template>
<v-container>
<v-card max-width="800" class="mx-auto">
    <v-card-title>Deseja Adicionar bebidas?</v-card-title>
    <v-card-actions>
        <v-btn small color="primary" outlined @click="goBack">Voltar</v-btn>
        <v-spacer></v-spacer>
        <v-btn small color="primary" @click="goAddress">Proximo</v-btn> 
    </v-card-actions>
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
</v-card>
<v-footer app fixed padless>
                <v-btn
                    :color="color"
                    dark
                    @click="sheet = !sheet"
                    block
                >
                    <v-icon small class="mr-2">mdi-cart</v-icon>Enviar Pedido ({{totalItems}}) R$ {{Total | formatCurrency}}
                </v-btn>
            </v-footer>

            <v-bottom-sheet v-model="sheet" persistent>
                <v-sheet
                min-width="375"
                min-height="500"
                class="text-center"
                >
                <v-btn
                    class="mt-6"
                    text
                    @click="sheet = !sheet"
                    icon
                >
                    <v-icon small class="mr-2">mdi-cart</v-icon>
                    Carrinho
                    <v-spacer></v-spacer><v-icon color="red">mdi-close</v-icon>
                </v-btn>
                <div class="py-3">

                    <div v-show="cartItems.length > 0">
                        <v-simple-table>
                            <template v-slot:default>
                                <tbody>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Qtd</th>
                                    <th>R$</th>
                                    <th>#</th>
                                </tr>
                                <tr
                                    v-for="item in cartItems"
                                    :key="item.id"
                                >
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.qtd }}</td>
                                    <td>{{ item.price }}</td>
                                    <td @click="removeItem(item.id)"><v-icon small color="error">mdi-trash-can</v-icon></td>
                                </tr>
                                <tr v-show="cartItems.length > 0">
                                    <td></td>
                                    <td>Total</td>
                                    <td>R$ {{Total | formatCurrency }}</td>
                                    <td></td>
                                </tr>
                                </tbody>              
                            </template>
                        </v-simple-table>
                            <v-btn @click="goAddress" color="primary">Enviar Pedido</v-btn>
                    </div>

                    <div v-show="cartItems.length === 0">
                        <p>Carrinho está vazio</p>
                    </div>
                </div>
                </v-sheet>
            </v-bottom-sheet>
</v-container>
</template>

<script>
    export default {
        data(){
            return{
                cartItems: [],
                mobileBreakpoint: 600,
                sheet: false,
                products: [
                    {
                        id: 1,
                        price: 5,
                        name: "Coca-cola em Lata",
                        img: "https://media.istockphoto.com/photos/classic-cocacola-can-picture-id465133878?b=1&k=20&m=465133878&s=170667a&w=0&h=yJBEv40IJfYVbFCoxLnbAOgVJsfrD39zBXMAsHIgNNo=",
                        description: "detalhes",
                        qtd: 1
                    },
                    {
                        id: 2,
                        price: 5,
                        name: "Guaraná Jesus em Lata",
                        img: "https://m.media-amazon.com/images/I/719NOxnAeGL._AC_SX679_.jpg",
                        description: "detalhes",
                        qtd: 1
                    },
                    {
                        id: 3,
                        price: 10,
                        name: "Heineken Longneck",
                        img: "https://media.istockphoto.com/photos/heineken-beer-on-ice-picture-id147307096?b=1&k=20&m=147307096&s=170667a&w=0&h=YiMONiiPvtH0XAdgTQP-vMze_LJXjzyYcPkqUNoKzbo=",
                        description: "detalhes",
                        qtd: 1
                    },
                    {
                        id: 4,
                        price: 8,
                        name: "Budweiser Longneck",
                        img: "https://media.istockphoto.com/photos/budweiser-picture-id458671967?b=1&k=20&m=458671967&s=170667a&w=0&h=P8AKwxEpxp7ASMaRyesfWwYx2qjtuYUAU0aCBxstr5w=",
                        description: "detalhes",
                        qtd: 1
                    }
                ]
            }
        },
        props: {
            burguer:{
                requerid: false
            }
        },
        created(){
            for(let i = 0; i < this.burguer.length; i++) {
                    this.cartItems.push(this.burguer[i])
                }
        },
        methods: {
            goAddress(event){
                this.$emit('dadosAdicionais', this.cartItems)
            },
            addCart(product){
                let found = false;

                let itemInCart = this.cartItems.filter(item => item.id===product.id);
			    let isItemInCart = itemInCart.length > 0;

                if (isItemInCart === false) {
                    this.cartItems.push(product);
                } else {
                    itemInCart[0].qtd ++;
                }
            },

            decrementar(product){
                if(product.qtd === 0){
                    this.$store.dispatch("snackbars/setSnack", {
                        text: 'Impossível quantidade inferior a 0(zero)',
                        color: "error",
                    });
                } else {
                    product.qtd --
                }
                
            },
            incrementar(product){
                product.qtd ++
            },

            removeItem(index) {
                for(let i = 0; i < this.cartItems.length; i++) {
                    if(this.cartItems[i].id == index) {
                        this.cartItems.splice(i, 1)
                    }
                }
            },
            goBack(){
                this.$emit('voltar', false)
            }
        },
        computed: {
            color() {
                switch (this.cartItems.length) {
                    case 0:
                        return 'secondary'
                    default:
                        return 'primary'
                }
            },
            totalItems(){
                return this.cartItems.reduce((accumulator , item) => {
                    return accumulator  + item.qtd;
                }, 0);
            },
            Total() {
                let total = 0;
                this.cartItems.forEach(item => {
                    total += (item.price * item.qtd);
                });
                return total;
            },
            priceBurguer(){
                let priceBurguer = this.burguer
                let price = priceBurguer[priceBurguer.length -1]
                return price
            }
        },
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

