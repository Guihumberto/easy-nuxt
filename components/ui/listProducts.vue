<template>
    <div>

        <div v-if="products.length != 0">
            <v-list>
                <v-list-item-group>
                    <template v-for="product in products">
                        <v-list-item two-line :key="product.id">
                            <v-list-item-content>
                                <v-list-item-title>{{ product.name }}</v-list-item-title>
                                <v-list-item-subtitle>{{ product.category.name }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </template>
                </v-list-item-group>
            </v-list>
        </div>

        <div v-else>
            Não há Produtos disponíveis
        </div>
        
    </div>
    
</template>

<script>
    export default {
        props: {
            products: {
                typ:Array, 
                default:() => ([])
            }
        }
        
    }
</script>