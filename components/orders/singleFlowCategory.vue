<template>
   <v-item-group mandatory class="mt-n1">
            <v-container>
                <v-row justify="center">
                    <v-col cols="6" md="2" v-for="cat in category" :key="cat.title">
                        <v-item v-slot="{active, toggle}">
                            <v-card 
                                :color="active ? '#f6efef' : 'white'"
                                :class="active ? 'borderme' : 'borderout'"
                                clas="f-flex align-center rounded-lg mx-2"
                                dark
                                height="140"
                                @click="toggle"
                                flat
                                >
                                <v-row>
                                    <v-col cols="12" sm="12">
                                        <v-list-item three-line class="text-center">
                                            <v-list-item-content>
                                                <div align="center" justify="center">
                                                    <v-img :src="cat.url" :max-width="cat.tam" :max-height="cat.tam" contain></v-img>
                                                </div>
                                                <v-list-item-subtitle
                                                :class="active ? 'brown--text' : 'black--text'"
                                                class="caption mt-4"
                                                >{{ cat.title }}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>
</template>

<script>
export default {
    data(){
        return{
            category:[
                        {title: "Mocoto", tam:"110", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXehFy58qYVuHbx_zaY7ODXjvmMqMlS0kQg&usqp=CAU"},
                        {title: "Feijoada", tam:"80", url:"data:image/jpeg;base64,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"},
                     ],
        }
    }
}
</script>

<style scoped>
    .v-card.borderme{
    border: 2px solid #704232 !important;
    }
    .v-card.borderout{
        border: 1px solid #BCAAA4 !important;
    }
</style>