<template>
    <v-container>
        <v-card max-width="800" class="mx-auto" color="green" dark>
            <v-card-title>Pedido Realizado</v-card-title>
            <v-card-content>
                <v-card-text>  acompanhe o status do seu pedido pelo Whatsapp <v-icon>mdi-whatsapp</v-icon></v-card-text>
                <v-card-text><v-icon x-large>mdi-moped-outline</v-icon></v-card-text>
            </v-card-content>
            <v-card-actions>
                <v-btn outlined class="mt-5" to="/">Home</v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined class="mt-5" @click="onsubmit">
                <v-icon class="mr-2">mdi-whatsapp</v-icon>Contato</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
    
</template>

<script>
export default {
    methods: {
            onsubmit() {
                const urlApi = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send" 
                const texto = "Boa noite, gostaria de uma informação sobre o meu pedido"
                window.open(urlApi + "?phone=559884650786&text=" + texto, "_blank")
            }
    }
}
</script>