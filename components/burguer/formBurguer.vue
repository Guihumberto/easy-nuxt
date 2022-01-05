<template>
    <v-card max-width="800" class="mx-auto">
    <div v-if="show">
    <v-form @submit.prevent="onsubmit(order)" ref="form">
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col
            cols="6"
            sm="6"
            md="6"
          >
           <h3>Pão <v-icon>mdi-baguette</v-icon> </h3>
            <v-radio-group
              v-model="order.bread"
              column
              :rules="[rules.required]"
            >
            
              <v-radio
                label="Brioche"
                color="red"
                value="Brioche"
              ></v-radio>
              <v-radio
                label="Australiano"
                color="red darken-3"
                value="Australiano"
              ></v-radio>
              <v-radio
                label="Francês"
                color="indigo"
                value="Francês"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col
            cols="6"
            sm="6"
            md="6"
          >
            <h3>Queijo <v-icon>mdi-cheese</v-icon> </h3>
            <v-radio-group
              v-model="order.cheese"
              column
              :rules="[rules.required]"
            >
              
              <v-radio
                label="Coalho"
                color="primary"
                value="Coalho"
              ></v-radio>
              <v-radio
                label="Mussarela"
                color="secondary"
                value="Mussarela"
              ></v-radio>
              <v-radio
                label="Prato"
                color="success"
                value="Prato"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      <v-select
          dense
          :items="molhos"
          label="Molhos"
          outlined
          v-model="order.sauce"
          :rules="[rules.required]"
        ></v-select> 
        <v-select
          dense
          :items="steak"
          label="Ponto da carne"
          outlined
          v-model="order.meatSpot"
          :rules="[rules.required]"
        ></v-select> 
        <h3>Salada <v-icon>mdi-food-apple</v-icon></h3>    
        <v-row class="mb-2">
          <v-col
            cols="4"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="order.salad"
              label="Alface"
              color="green"
              value="alface"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col
            cols="4"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="order.salad"
              label="Tomate"
              color="red"
              value="tomate"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col
            cols="4"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="order.salad"
              label="Pepino"
              color="green"
              value="pepino"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
        <h3>Carne (gramas)  <v-icon>mdi-food-steak</v-icon> </h3>
        <v-radio-group
        v-model="order.meatAmunt"
        row
        :rules="[rules.required]"
        >
        <v-radio
          label="180g"
          value="180g"
        ></v-radio>
        <v-radio
          label="200g"
          value="200g"
        ></v-radio>
        <v-radio
          label="220g"
          value="220g"
        ></v-radio>
   
    </v-radio-group>
     <h3>Adicionais <v-icon>mdi-french-fries</v-icon> </h3>    
        <v-row>
          <v-col
            cols="4"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="order.add"
              label="Batata"
              color="red"
              value="Batata"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="order.add"
              label="Bacon"
              color="red darken-3"
              value="Bacon"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col
            cols="4"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="order.add"
              label="Bolinho"
              color="indigo"
              value="Bolinho"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="order.add"
              label="Linguiça"
              color="indigo darken-3"
              value="Linguiça"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col
            cols="4"
            sm="4"
            md="4"
          >
            <v-checkbox
              v-model="order.add"
              label="queijo"
              color="orange"
              value="queijo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="order.add"
              label="cebola"
              color="orange darken-3"
              value="cebola"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-textarea
        class="mt-5"
        label="Observação"
        placeholder="digite alguma observação sobre o seu pedido"
        v-model="order.obs"
        dense outlined
        ></v-textarea>
        <v-card>
        <v-card-title>Meu Burguer 
          <v-spacer></v-spacer> R${{totalPrice | formatCurrency }}</v-card-title>
        <v-card-subtitle>Veja aqui como tá ficando a combinação do teu hamburguer!</v-card-subtitle>
        <v-card-text>
          <div>
            <span v-if="order.bread">Pão {{order.bread}}</span>
            <span v-if="order.cheese">, com queijo {{order.cheese}}</span>
            <span v-if="order.salad.length">, com 
              <i v-for="item in order.salad" :key="item">{{item}}, </i></span>
            <span v-if="order.sauce">e molho de {{order.sauce}}</span>
          </div>
          <div>
            <span v-if="order.meatSpot">A carne vai {{order.meatSpot}}</span>
            <span v-if="order.meatAmunt">e com {{order.meatAmunt}}</span>
            <span v-if="order.add.length">, com os seguintes adicionais 
              <i v-for="item in order.add" :key="item">{{item}}, </i>
            </span>
          <br> 
            <span v-if="order.obs">Obs: {{order.obs}}</span>
          </div>
        </v-card-text>
      </v-card>
      </v-container>
    </v-card-text>
    <v-card-actions>
        <v-btn type="submit" block color="success">Fazer pedido</v-btn>
    </v-card-actions>
    </v-form>
    </div>
    <div v-else>
      <v-card-title>Pedido</v-card-title>
      <v-card-text>
        <v-list>
          <template v-for="i in orders"> 
          <v-list-item :key="i.id">{{i}}
          </v-list-item>
          <v-divider></v-divider>
          </template>
          <burguer-sodasBurguer />
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="show = !show" small>montar +1 Burguer</v-btn>
        <v-btn color="success" @click="sendOrder" small>Concluir Pedido</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
    export default {
        data(){
            return{
                rules: {
                    required: (value) => !!value || "Este campo é obrigatório",
                },
                molhos: ['', 'Gorgonzola', 'Pimenta', 'Verde', 'Cheddar'],
                steak: ['', 'mal passada', 'ao ponto', 'bem passada'],
                order:{
                    id: 0,
                    bread: false,
                    cheese: false,
                    salad: [],
                    sauce: false,
                    meatSpot: false,
                    meatAmunt: false,
                    add: [],
                    obs: "",
                    price: 15
                },
                show: true,
                hints: true,
                qtd: 0,
                orders: [],
            }
        },
        computed:{
          totalPrice() {
            let total = 0
            total += this.order.price
            switch(this.order.meatAmunt){
              case '200g':
                total+= 5
                break;
              
              case '220g':
                total+= 8
                break;

              default:
                total
            }

            for(let i = 0; i < this.order.add.length; i++) {
                if(this.order.add[i] == "Batata") {
                  total+= 8
                }
                if(this.order.add[i] == "Bacon") {
                  total+= 2
                }
                if(this.order.add[i] == "Linguiça") {
                  total+= 2
                }
                if(this.order.add[i] == "Bolinho") {
                  total+= 2
                }
                if(this.order.add[i] == "queijo") {
                  total+= 2
                }
                if(this.order.add[i] == "cebola") {
                  total+= 2
                }
            }


            return total
          }
        },
        methods:{
            onsubmit(product){
                if (this.$refs.form.validate()) {
                    product.id++
                    this.orders.push(`${product.id} - Burguer carne ${product.meatAmunt} (${product.meatSpot}), pão ${product.bread}, queijo ${product.cheese} e com molho ${product.sauce}, salada ${product.salad} e adicionais de ${product.add}. Obs: ${product.obs} R$${this.totalPrice}`)
                    this.show = false
                }
            },
            sendOrder(event){
              this.$emit('dadosPedido', this.orders)
            }
        }
        
    }
</script>