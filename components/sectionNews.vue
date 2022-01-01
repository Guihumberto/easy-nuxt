<template>
    <v-card>
        <v-card-title class="secondary--text">{{ now.sectionSale.title }}</v-card-title>
        <v-card-text class="black--text">
            <v-row>
                <v-col xs12 sm12 md6 lg6>
                    <v-img
                        :src="now.sectionSale.product.img"
                        max-height="350"
                    ></v-img>
                </v-col>
                <v-col xs12 sm12 md6 lg6>
                    <v-chip small color="primary" outlined> 
                        <v-icon small left>mdi-account-multiple</v-icon>2
                    </v-chip>
                    <v-chip small color="primary" outlined> 
                        <v-icon small left>mdi-heart</v-icon>20
                    </v-chip>
                    <v-chip small color="primary" outlined> 
                        <v-icon small left>mdi-comment-text-multiple</v-icon>10
                    </v-chip>

                    <v-divider class="mt-3"></v-divider>

                    <h4 class="body-1">{{now.sectionSale.product.name}} por R$25</h4>
                    <div>
                        {{now.sectionSale.product.description}}
                    </div>
                    <div class="mt-3">
                        <v-btn color="primary" to="/test">Pedir agora</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props:{
                now:{     
                    required:true
                }
    
            }
    }
</script>