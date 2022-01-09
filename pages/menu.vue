<template>
    <v-card max-width="800" class="mx-auto my-2" flat>
        <div class="ml-2">
            <v-chip-group
                v-model="select"
                active-class="deep-purple accent-4 white--text"
            >
                <v-chip @click="filtrarNowOrder">Pronta Entrega</v-chip>
                <v-chip @click="filtrarAll">Tudo</v-chip>
                <v-chip @click="filtrarOrder">Encomenda</v-chip>
            </v-chip-group>
        </div>
        <div class="ml-2"> 
            <h1 class="secondary--text">Cardápio
                <v-icon color="blue" large>mdi-moped</v-icon>
            </h1>
            <p class="secondary--text">Nossa melhor cozinha.</p>
        </div>
        <v-row>
            <v-col xs12 sm6 md8 lg8 v-for="menu in menuSingle" :key="menu.name" v-if="menu.order != selection">
                <menuSingle
                    :menu="menu"
                ></menuSingle>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        layout: "menuRestaurant",
        data(){
            return{
                selection: "f",
                select: 1,
            }
        },
        methods:{
            filtrarNowOrder(){
                this.selection = true
            },
            filtrarOrder(){
                this.selection = false
            },
            filtrarAll(){
                this.selection = "f"
            },
        },
        computed:{
            ...mapGetters({
                menuSingle: 'readMenuSingle'
            })
        }
        
    }
</script>