<template>
    <v-container>
        <v-row>
            <v-col>
                <sectionTitle :sectionTitle="landingPage"/>
             
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
    </v-container>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        middleware:"initData",
        apollo: {
            landingPage: {
                query: gql`
                query {
                    landingPage{
                        header{
                            title
                            subtitle
                            description
                        }
                        sectionSale{
                        title
                            product{
                            name
                            img
                            description
                            }
                        }
                    }
                }
            `,
            update: data => data.landingPage
           }
        },
        computed:{
            categories(){
               return this.$store.getters.readCategories
            }
        }
    }
</script>