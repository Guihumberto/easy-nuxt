<template>
<v-card max-width="800" class="mx-auto my-2">
    <v-container id="app">
        <v-app id="inspire">
            <div class="text-center">
                <v-card 
                    outlined
                    class="mb-2"
                    color="teal lighten-3"
                    dark
                >
                    <v-card-title >Cardápio <v-icon>mdi-silverware </v-icon></v-card-title>
                </v-card>
            <v-expansion-panels
                multiple
            >
                <v-expansion-panel v-for="product in products" :key="product.id">
                    <v-expansion-panel-header>{{ product.name }} <v-spacer></v-spacer> R$ {{ product.price | formatCurrency }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content v-if="product.show">
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
                    <v-expansion-panel-content v-else>
                        <v-alert
                        dense
                        outlined
                        type="error"
                        >
                        apenas sábados e domingos
                        </v-alert>
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
                                    <p class="text-left">Monte seu burguer do seu jeito</p>
                                    <div class="mt-4"></div>
                                </div>

                                <div class="mt-2 d-flex">
                                    <v-btn color="success" class="mr-2" small to="/burguer" >Montar</v-btn>
                                    <detailProduct :product="burguer" />
                                </div>
                                
                            </div>
                        </div>  
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel v-for="i in encomendar" :key="i.name">
                    <v-expansion-panel-header>{{i.name}}<v-spacer></v-spacer>R$ {{i.price | formatCurrency}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div class="d-flex">
                            <div class="mr-5">
                                <v-img class="borderImg" contain width="100" :src="i.img"></v-img>
                            </div>
                            <div>
                                <div class="d-flex">
                                    <p class="text-left">Torta de Limão Inteira - apenas para encomenda.</p>
                                    <div class="mt-4"></div>
                                </div>

                                <div class="mt-2 d-flex">
                                    <v-btn color="success" class="mr-2" small to="/encomenda" >Encomendar</v-btn>
                                    <detailProduct :product="i" />
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
                today: new Date(),
                result: true,
                mobileBreakpoint: 600,
                sheet: false,
                cartItems: [],
                burguer:{
                    name: "Hamburguer",
                    img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY=",
                    price: 15,
                    description: "Escolha o pão, o ponto da carne, a salada, inclua adicionais e muito mais! Delivery de quarta a domingo, das 18hrs às 23hrs.",
                    show: true
                },
                encomendar:[
                    {
                        name: "Torta de Limão",
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6SN-QRjFVV1V6m0ZlTEIgylct32dmmddIQ&usqp=CAU",
                        price: 120,
                        description:"Torta de Limão Inteira (6 a 8 fatias). Apenas para encomenda.",
                        show: true, 
                    }
                ],
                products: [
                    {
                    id: 1,
                    name: "Feijoada",
                    img: "https://media.istockphoto.com/photos/feijoada-typical-brazilian-food-with-black-beans-pork-and-sausage-picture-id1297461651?b=1&k=20&m=1297461651&s=170667a&w=0&h=isjuNjtlupEATf0Aw7TESY_piPbPEuXMpK-3gxDd-2A=",
                    price: 25,
                    description: "Serve bem 2 pessoas. Acompahnha arroz, farofa ou farinha e limão.",
                    qtd: 1,
                    show: true
                    },
                     {
                    name: "Mocotó",
                    img: "data:image/jpeg;base64,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",
                    price: 25,
                    description: "Serve bem 2 pessoas. Acompahnha arroz, farofa ou farinha e limão.",
                    qtd: 1,
                    show: true
                    },
                     {
                    id: 2,
                    name: "Coca-cola em Lata",
                    img: "https://media.istockphoto.com/photos/classic-cocacola-can-picture-id465133878?b=1&k=20&m=465133878&s=170667a&w=0&h=yJBEv40IJfYVbFCoxLnbAOgVJsfrD39zBXMAsHIgNNo=",
                    price: 5,
                    description: "Refrigerante Jesus em Lata 330ml.",
                    qtd: 1,
                    show: true
                    },
                     {
                    id: 3,
                    name: "Jesus em Lata",
                    img: "https://m.media-amazon.com/images/I/719NOxnAeGL._AC_SX679_.jpg",
                    price: 5,
                    description: "Refrigerante Jesus em Lata 330ml.",
                    qtd: 1,
                    show: true
                    },
                     {
                    id: 4,
                    name: "Heineken Longneck",
                    img: "https://media.istockphoto.com/photos/heineken-beer-on-ice-picture-id147307096?b=1&k=20&m=147307096&s=170667a&w=0&h=YiMONiiPvtH0XAdgTQP-vMze_LJXjzyYcPkqUNoKzbo=",
                    price: 10,
                    description: "Cerveja Budweiser Budwieser 330ml gelada.",
                    qtd: 1,
                    show: true
                    },
                     {
                    id: 5,
                    name: "Budweiser longneck",
                    img: "https://media.istockphoto.com/photos/budweiser-picture-id458671967?b=1&k=20&m=458671967&s=170667a&w=0&h=P8AKwxEpxp7ASMaRyesfWwYx2qjtuYUAU0aCBxstr5w=",
                    price: 8,
                    description: "Cerveja Longneck Budwieser 330ml gelada.",
                    qtd: 1,
                    show: true
                    },
                ]
            }
        },
        // async asyncData({app}){
        // const client = app.apolloProvider.defaultClient
        // const query = {
        //     query: require("../graphql/products.gql")
        // }
        // let products = []
        // await client.query(query).then(data => {
        //     products = data.data.products
        // }).catch(e => console.log(e))
        // return {products}
        // },
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
            currentDate(){
                return this.today.getDay()
            }
        },
        created(){
        switch(this.currentDate){
            case 0:
                this.products[0].show = true
                this.products[1].show = true
                break;
            
            case 1:
                this.products[0].show = false
                this.products[1].show = false
                break;

            case 2:
                this.products[0].show = false
                this.products[1].show = false
                break;
            
            case 3:
                this.products[0].show = false
                this.products[1].show = false
                break;
            
            case 4:
                this.products[0].show = false
                this.products[1].show = false
                break;

            case 5:
                this.products[0].show = false
                this.products[1].show = false
                break;

            case 6:
                this.products[0].show = true
                this.products[1].show = true
                break;
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
    
            },
            desativar(index){
               for(let i = 0; i < this.products.length; i++) {
                    if(this.products[i].id == index) {
                        this.products[i].show = false
                    }
                }
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
</style>

