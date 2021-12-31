<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="mt-5"
        >
          Enviar Pedido
        </v-btn>
      </template>
      <v-card>
        <v-form @submit.prevent="checkPreenchimento" ref="form">
        <v-card-title>
          <span class="text-h5">Nome e Endereço</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Nome"
                  required
                  dense
                  v-model="address.name"
                  :rules="[rules.required, rules.min]"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Telefone"
                  hint="(98)9899-9999"
                  dense
                  v-model="address.phone"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Endereço"
                  hint="Av. Frederico Peixoto"
                  persistent-hint
                  required
                  dense
                  v-model="address.endereco"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Bairro"
                  required
                  dense
                  v-model="address.bairro"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Nro"
                  required
                  dense
                  v-model="address.nro"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>

              <v-col cols="8">
                <v-text-field
                  label="Cidade"
                  required
                  dense
                  v-model="address.city"
                  :rules="[rules.required]"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Estado"
                  required
                  dense
                  v-model="address.uf"
                  :rules="[rules.required]"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-textarea
                  label="Ponto de Referência"
                  dense
                  outlined
                  v-model="address.obs"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>

          <orders-checkSend v-if="check" :order="order" :address="address" />
          <v-btn outlined color="red" type="submit" text v-else>Enviar</v-btn>

        </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    data: () => ({
      check: false,
      dialog: false,
      address:{
          name: "",
          phone: "",
          endereco: "",
          nro: "",
          bairro:"",
          city:"Pinheiro",
          uf: "MA",
          obs: ""
      },
      rules: {
        required: (value) => !!value || "Este campo é obrigatório",
        min: (v) => (v||'').length >= 5 || "Mínimo de 5 caracteres",
      },
    }),
    props:{
        order: {
            required: false
        }
    },

    methods: {
      checkPreenchimento(){
        if (this.$refs.form.validate()) {
          this.check = !this.check
        }
      }
    }
}
</script>