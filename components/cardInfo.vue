<template>
<div>
    <v-btn @click="active = !active" v-text="active?'ocultar':'ver'">ver</v-btn>
    <transition name="page">
        <div v-show="active">
            <slot/>
        </div>
    </transition>
</div>
    
</template>

<script>
    export default {
        data(){
            return{
                active: false
            }
        }
        
    }
</script>