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
            >Detalhes</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="secondary" dark > {{ product.title }}</v-toolbar>
              <div class="d-flex pa-2">
                  <v-img contain width="150" :src="product.img"></v-img>
                  <div>
                      <v-card-subtitle>
                         Acompanhamentos:
                      </v-card-subtitle>
                      <v-card-actions>
                            <v-btn
                            text
                            @click="dialog.value = false"
                            >Fechar</v-btn>
                      </v-card-actions>

                  </div>
              </div>
              
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