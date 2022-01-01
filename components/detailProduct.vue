<template>
    <v-dialog
          transition="dialog-bottom-transition"
          max-width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              small
              outlined
              v-bind="attrs"
              v-on="on"
            >
            <v-icon small>mdi-information-variant</v-icon>
            info</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card max-width="600">
                  <v-img contain min-height="":src="product.img"></v-img>
                    <v-card-title class="mb-2">{{product.name}}
                      <v-spacer></v-spacer>
                      R$ {{product.price}}
                    </v-card-title>
                    <v-card-subtitle>
                      {{product.description}} <br>
                      {{product.acompanhamentos}}
                    </v-card-subtitle>
                    <v-card-actions>
                          <v-btn
                          outlined
                          color="error"
                          text
                          @click="dialog.value = false"
                          >Fechar</v-btn>
                    </v-card-actions>
              
            </v-card>
          </template>
        </v-dialog>
</template>

<script>
export default {
    props:{
        product: Object
    }
}
</script>