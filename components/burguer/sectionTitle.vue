<template>
    <v-card class="mx-auto mb-2" max-width="800">
        <v-img
        class="white--text align-end"
        src="https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY="
        >
            <v-card-title class="font-weight-black">Monte Seu Burguer</v-card-title>
        </v-img>
    <v-card-subtitle class="pb-0">Monte seu hamburguer do seu jeito!!</v-card-subtitle>
    <v-card-text class="text--primary">
        <div class="text-justify">Escolha o pão, o queijo a carne, molho e a salada. Inclua adicionais de bacon, batata, mandioca, bolinho de bacalhau e outros.</div>
    </v-card-text>
    <v-card-actions>
        <v-btn
        color="orange"
        text
        outlined
        to="/mountBurguer"
        >
        <v-icon class="pa-2">mdi-hamburger</v-icon>Montar agora
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
        color="orange"
        icon
        out
        @click="onsubmit"
        >
        <v-icon>mdi-share-variant</v-icon>
        </v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
export default {
    methods: {
            onsubmit() {
                const urlApi = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send" 
                const texto = "?text=https://www.easyboteco.com.br"
                window.open(urlApi + texto, "_blank")
            },
    }
}
</script>