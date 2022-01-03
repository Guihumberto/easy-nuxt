<template>
    <v-card max-width="800" class="mx-auto mb-2">
        <v-img
        max-height="180"
        class="white--text align-end"
        src="https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY="
        >
            <v-card-title class="font-weight-black">Monte Seu Burguer</v-card-title>
        </v-img>
    <v-card-actions>
        <v-btn
        color="green"
        text
        >
        <v-icon class="pa-2">mdi-hamburger</v-icon>Monte seu burguer
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
        color="green"
        icon
        out
        @click="onsubmit"
        >
        <v-icon>mdi-share-variant</v-icon>
        </v-btn>
    </v-card-actions>
    </v-card>
</template>