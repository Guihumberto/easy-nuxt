<template>
    <v-container>
        <v-row>
            <v-col>
                <sectionTitle />
            </v-col>
        </v-row>
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
            </v-col>
        </v-row>
        <menuSingleCard />
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                news:[
                    {title:"Promoção", subtitle:"serve bem 2 pessoas", price: "25", frete: "grátis"},
                ]
            }
        }
    }
</script>