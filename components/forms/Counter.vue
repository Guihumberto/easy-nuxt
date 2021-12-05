<template>
    <div >
        <div>
            <v-btn fab class="my-3 mr-2" x-small color="error" @click="decrementar"> <v-icon>mdi-minus</v-icon></v-btn>
            <v-btn fab class="my-3" x-small color="success" @click="incrementar"><v-icon>mdi-plus</v-icon></v-btn>
            <span>Qtd: {{ contador }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contador: 0
        }
    },
    methods: {
        decrementar(){
            this.contador --
        },
        incrementar(){
            this.contador ++
        }
    }
}
</script>