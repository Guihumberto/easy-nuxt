<template>
    <v-card  max-width="1080"
        class="mx-auto">
        <v-card-title class="secondary--text">Todos os Sábados e Domingos</v-card-title>
        <v-card-subtitle>Mocotó e Feijoada</v-card-subtitle>
        <v-card-text class="black--text">
            <v-row>
                <!-- <v-col xs12 sm12 md6 lg6>
                    <v-img
                        src="https://media.istockphoto.com/photos/feijoada-a-typical-brazilian-food-picture-id1313384844?b=1&k=20&m=1313384844&s=170667a&w=0&h=nzar6kVi6gG-iHPXo1cc82tBb-ilbQ-gmpLRgbon9eI="
                        max-height="350"
                    ></v-img>
                </v-col> -->
                <v-col cols="6" xs6 sm6 md6 lg6>
                     <v-img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqgyMBzGryF_7OllYYEY4SKfBvh-GDWmHrQ&usqp=CAU"
                        max-height="350"
                    ></v-img>
                    
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