<template>
    <v-container>
        <v-card max-width="800" class="mx-auto">
        <v-dialog
        v-model="dialog"
        max-width="400"
        >
            <sales-mocoto @close="dialog = $event" />
        </v-dialog>
        <v-row>
            <v-col>
                <sectionTitle :sectionTitle="landingPage"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <section-fds :now="landingPage" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <sectionNews 
                :now="landingPage"
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
        <footerLinks :categories="categories" />
        </v-card>
    </v-container>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        data(){
            return{
                dialog: true,
                landingPage: {
                       header: {
                             title: "Easy Boteco",
                             subtitle: "Easy Express",
                             description: `Faça seus pedidos e acompanhe nossas promoções pela Easy Express, o site da <b>Easy Conveniência.<b> <br>
                                            Disponível para retirada e  entregas.
                                            <br><br>
                                            Horário de Funcionamento: Segunda a Domingo, das 10:00hrs às 23hrs.`
                         },
                         sectionSale:{
                             title: "Promoção",
                             product:{
                                name: "Feijoada",
                                img: "https://media.istockphoto.com/photos/feijoada-a-typical-brazilian-food-picture-id1313384844?b=1&k=20&m=1313384844&s=170667a&w=0&h=nzar6kVi6gG-iHPXo1cc82tBb-ilbQ-gmpLRgbon9eI=",
                                description: "Feijoada para 2 (duas) pessoas. Acompanha arroz, farofa ou farinha e limão."
                                }
                         }
                     }
            }
        },
        middleware:"initData",
        // apollo: {
        //     landingPage: {
        //         query: gql`
        //         query {
        //             landingPage{
        //                 header{
        //                     title
        //                     subtitle
        //                     description
        //                 }
        //                 sectionSale{
        //                 title
        //                     product{
        //                     name
        //                     img
        //                     description
        //                     }
        //                 }
        //             }
        //         }
        //     `,
        //     update: data => data.landingPage
        //    }
        // },
        computed:{
            categories(){
               return this.$store.getters.readCategories
            }
        }
    }
</script>