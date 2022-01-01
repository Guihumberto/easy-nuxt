<template>
    <v-card
        color="#385F73"
        dark
    >
        <div class="pa-5">
            <img class="mx-7" src="@/assets/img/logo.png" />
            <h1>{{sectionTitle.header.title}}</h1>
        </div>
        <v-card-subtitle>{{sectionTitle.header.description}}</v-card-subtitle>
        <v-card-subtitle>Horário de Funcionamento: Segunda a Domingo, das 10:00hrs à 00hrs.</v-card-subtitle>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined text to="/menu">
                Cardápio
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: {
            sectionTitle: {
                requerid:true
            }
        }
    }
</script>