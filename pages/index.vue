<template>
    <v-container>
        <v-row>
            <v-col v-for="now in news" :key="now.title">
                <sectionNews 
                :now="now"
                >
                 </sectionNews>

                <div class="mt-3">
                    <v-alert
                        type="info"
                        v-if="false"
                    >
                        <p>Disponivél apenas sabados e domingos</p>
                    </v-alert>
                </div>

                 <div class="mt-3">
                     <backBtn />
                 </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                news:[
                    {title:"Pratos do Dia", subtitle:"serve bem 2 pessoas", price: "25", frete: "grátis"},
                ]
            }
        }
    }
</script>