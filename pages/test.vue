<template>
<v-card max-width="800" class="mx-auto">
    <v-container id="app">
        <v-app id="inspire">
            <div class="text-center">
                <v-card 
                    outlined
                    class="mb-2"
                >
                    <v-card-title>Cardápio <v-icon>mdi-silverware </v-icon></v-card-title>
                </v-card>
            <v-expansion-panels
                multiple
            >
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
                                    <detailProduct :product="product" />
                                </div>
                                
                            </div>
                        </div>  
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>{{burguer.name}}<v-spacer></v-spacer> a partir de R$ {{burguer.price | formatCurrency}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div class="d-flex">
                            <div class="mr-5">
                                <v-img class="borderImg" contain width="100" :src="burguer.img"></v-img>
                            </div>
                            <div>
                                <div class="d-flex">
                                    <p>Monte seu burguer do seu jeito</p>
                                    <div class="mt-4"></div>
                                </div>

                                <div class="mt-2 d-flex">
                                    <v-btn color="success" class="mr-2" small to="/burguer" >Montar Burguer</v-btn>
                                    <detailProduct :product="burguer" />
                                </div>
                                
                            </div>
                        </div>  
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

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
                            <orders-checkIn :order="cartItems" />
                    </div>

                    <div v-show="cartItems.length === 0">
                        <p>Carrinho está vazio</p>
                    </div>
                </div>
                </v-sheet>
            </v-bottom-sheet>
            </div>
        </v-app>
    </v-container>
</v-card>
</template>

<script>
    export default {
        layout: "menuRestaurant",
        data(){
            return{
                mobileBreakpoint: 600,
                sheet: false,
                cartItems: [],
                burguer:{
                    name: "Hamburguer",
                    img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY=",
                    price: 15,
                    description: "Escolha o pão, o ponto da carne, a salada, inclua adicionais e muito mais!"
                }
            }
        },
        async asyncData({app}){
        const client = app.apolloProvider.defaultClient
        const query = {
            query: require("../graphql/products.gql")
        }
        let products = []
        await client.query(query).then(data => {
            products = data.data.products
        }).catch(e => console.log(e))
        return {products}
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
            }
        },
        methods:{
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
            checkIn(){
    
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

