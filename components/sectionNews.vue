<template>
    <v-card>
        <v-card-title class="secondary--text">{{ now.title }}</v-card-title>
        <v-card-text class="black--text">
            <v-row>
                <v-col xs12 sm12 md6 lg6>
                    <v-img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkPveEOrFMKXTS5SytrPxLqMaOGH-Fnbqxg&usqp=CAU"
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

                    <h4 class="body-1">Pack com 6 budweiser longneck por R$20</h4>
                    <v-html>
                        6 unidades de budweiser longneck natural para retirada.
                        Limitado a 10 packs.
                        acrescente o valor de R$ 5 para levar o pack gelado. 
                        Corre!!!
                    </v-html>
                    <div class="mt-3">
                        <backBtn label="Pedir" />
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