<template>
    <v-card max-width="800" class="mx-auto">
    <v-form @submit.prevent="onsubmit" ref="form">
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
        <v-card-title>Meu Burguer</v-card-title>
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
                    bread: false,
                    cheese: false,
                    salad: [],
                    sauce: false,
                    meatSpot: false,
                    meatAmunt: false,
                    add: [],
                    obs: "",
                },
                fav: true,
                menu: false,
                message: false,
                hints: true,
                alert: true,
            }
        },

        methods:{
            onsubmit(event){
                if (this.$refs.form.validate()) {3
                    this.$emit('dadosPedido', this.order)
                    console.log(this.order)
                }
            }
        }
        
    }
</script>