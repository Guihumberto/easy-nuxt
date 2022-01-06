<template>
    <v-card>
        <v-toolbar
        color="success"
        dark
        class="mb-2"
        >Entrega Grátis**</v-toolbar>
        <v-card-title>Mocotó e Feijoada</v-card-title>
        <v-card-text>
            <v-img
                        src="https://media.istockphoto.com/photos/feijoada-a-typical-brazilian-food-picture-id1313384844?b=1&k=20&m=1313384844&s=170667a&w=0&h=nzar6kVi6gG-iHPXo1cc82tBb-ilbQ-gmpLRgbon9eI="
                        max-height="350"
                        contain
                    ></v-img>
            <small>**Dentro da zona urbana de Pinheiro</small>
        </v-card-text>
        <v-card-actions>
            <v-btn
            outlined
            small
            color="success"
            @click="close"
            >Fechar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" small to="/test">Pedir Agora</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    methods: {
        close(){
            this.$emit('close', false)
        }
    }
}
</script>