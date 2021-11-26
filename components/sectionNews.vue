<template>
    <v-card class="mt-3">
        <v-card-title class="secondary--text">{{ now.title }}</v-card-title>
        <v-card-text class="black--text">
            <v-row>
                <v-col xs12 sm12 md6 lg6>
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        max-height="350"
                    ></v-img>
                </v-col>
                <v-col xs12 sm12 md6 lg6>
                    <v-chip small color="primary" outlined> 
                        <v-icon left>mdi-home</v-icon>
                    </v-chip>
                    <v-chip small color="primary" outlined> 
                        <v-icon left>mdi-heart</v-icon>
                    </v-chip>
                    <v-chip small color="primary" outlined> 
                        <v-icon left>mdi-fridge</v-icon>
                    </v-chip>

                    <v-divider class="mt-3"></v-divider>

                    <h4 class="body-1">Description</h4>
                    <v-html>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eaque praesentium, suscipit quidem blanditiis eius nisi? Quod similique modi impedit saepe illo sunt nobis laboriosam, eveniet corrupti, velit, nesciunt ullam!</v-html>
                    <div class="mt-3">
                        <backBtn label="comprar" />
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