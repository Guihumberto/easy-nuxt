<template>
    <v-card>
        <v-img :src="product.img || 'imgDefault'" height="170"></v-img>
        <v-card-title class="body-1" >{{product.name}}
            <v-spacer></v-spacer>
            <i>R$ 25</i> 
        </v-card-title>
        
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            imgDefault: '@/assets/img/logo.png'
        }
    },
    props:{
        product: {
            type: Object,
            required: true
        }
    }
}
</script>