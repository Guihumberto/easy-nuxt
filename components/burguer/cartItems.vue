<template>
    <v-card max-width="800" class="mx-auto">
        <v-card-title></v-card-title>
        <v-card-text> {{order}} </v-card-text>
        <v-card-actions>
            <v-list>
                <v-list-item>
                    <span class="pa-2"> Refrigerante Coca-cola em Lata </span>
                    <v-btn x-small fab color="error"> - </v-btn>
                    <v-btn x-small fab color="success" class="ml-1" >+</v-btn>
                    <span class="ml-2">Qtd: {{qtd}}</span> 
                </v-list-item>
            </v-list>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        data(){
            return{
                qtd: 0
            }
        },
        props:{
            order:{
                require: false
            }
        }
    }
</script>