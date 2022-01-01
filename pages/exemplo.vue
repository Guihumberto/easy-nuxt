<template>
<v-container>
    <h1>test</h1>
    <v-btn color="primary" @click="show = !show">mostrar</v-btn>
    <p v-show="show">maria aparecer</p>
</v-container>
    
</template>

<script>
export default {
    data(){
        return{
            show: false
        }   
    }, 
}
</script>


