<template>
    <div>
        <v-card max-width="800" class="mx-auto">
            <v-card-title>Cadastrar Novo Produto</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="onsubmit">
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                dense
                                label="Nome do Produto"
                                outlined
                                v-model="product.name"
                                placeholder="Digite o nome do Produto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field
                                dense
                                label="Categoria"
                                outlined
                                v-model="product.category"
                                placeholder="Escolha a categoria do produto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field
                                dense
                                label="Quantidade de Pessoas"
                                outlined
                                v-model="product.qtd"
                                placeholder="Digite a quantidade de pessoas que este produto serve"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-select
                                :items="items"
                                label="Tipo do Produto"
                                outlined
                                dense
                                placeholder="Escolha o tipo do Produto"
                                v-model="product.type"
                                ></v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                dense
                                label="Descrição"
                                outlined
                                v-model="product.description"
                                placeholder="Descreva o produto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                dense
                                label="Imagem"
                                outlined
                                v-model="product.img"
                                placeholder="Copie o link da imagem do produto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                dense
                                label="Acompanhamentos"
                                outlined
                                v-model="product.acompanhamentos"
                                ></v-textarea>
                            </v-col>
                            <v-btn type="submit" block small class="primary">Cadastrar</v-btn>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>

    </div>
</template>

<script>
export default {
    data(){
        return {
            items: ['cozinha', 'cerveja', 'drinks', 'refrigerante', 'suco', 'energetico'],
        }
    },
    props:{
        product:{
            type: Object,
            default: () => ({
                name:"",
                description:"",
                img:"",
                qtd:1,
                acompanhamentos:"",
                type: "",
                category:1
            })
        }
    },
    methods:{
        async onsubmit(){
            const id = this.$auth.user.id
            const token = this.$auth.strategy.token.get()
            await this.$apollo.mutate({
                 context:{
                    headers:{
                        authorization:token
                    }
                 },
                 mutation:require('../../graphql/createProduct.gql'),
                 variables:this.product
            })
            .then(data => {
                console.log(data)
                this.$store.dispatch("snackbars/setSnack", {text:"Sucesso", color:'info'})
            })
            .catch(e => {
                console.log(e)
                this.$store.dispatch("snackbars/setSnack", {text:"Error", color:'error'})
            })
        }
    }
}
</script>