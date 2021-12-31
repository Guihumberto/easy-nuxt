<template>
    <v-card max-width="800" class="mx-auto">
            <v-card-title>Cadastrar Endereço</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="onsubmit">
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                dense
                                label="Endereço"
                                outlined
                                v-model="address.name"
                                placeholder="Rua, Avenida, Travessa"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field
                                dense
                                label="Número"
                                outlined
                                v-model="address.nro"
                                placeholder="DIgite o número da casa."
                                ></v-text-field>
                            </v-col>
                            <v-col cols="8">
                                <v-text-field
                                dense
                                label="Bairro"
                                outlined
                                v-model="address.bairro"
                                placeholder="Digite o nome do bairro"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="8">
                                <v-text-field
                                dense
                                label="Cidade"
                                outlined
                                v-model="address.city"
                                placeholder="Pinheiro"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field
                                dense
                                label="Estado"
                                outlined
                                v-model="address.uf"
                                placeholder="MA"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                dense
                                label="Ponto de Referência"
                                outlined
                                v-model="address.obs"
                                ></v-textarea>
                            </v-col>
                            <v-btn type="submit" block small class="primary">Cadastrar</v-btn>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
</template>

<script>
export default {
    data(){
        return{
            address: {
                type: Object,
                default: ()=>({
                    name: "",
                    nro: "",
                    bairro: "",
                    city: "Pinheiro",
                    uf: "MA",
                    obs: "",
                })
            }
        }
    },
    methods:{
        onsubmit(){

        }
    },
}
</script>