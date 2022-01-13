<template>
    <v-card max-width="800" class="mx-auto">
        <!-- <v-form @submit.prevent="onsubmit()" ref="form"> -->
        <v-card-title>Torta de Limão Inteira R$120,00</v-card-title>
        <v-card-subtitle>Preencha os campos abaixo para efetuar a encomenda</v-card-subtitle>
        <v-card-text>
            <v-text-field
            label="Nome"
            v-model="address.name"
            :rules="[rules.required]"
            required
            placeholder="Digite seu nome"
            outlined
            dense
            ></v-text-field>
            <v-text-field
            label="Data da Entrega"
            type="date"
            v-model="address.dateOrder"
            :rules="[rules.required, rules.dateLimit]"
            dense
            outlined
            ></v-text-field>

            <v-select
            label="Entrega"
            outlined
            dense
            v-model="address.delivery"
            :rules="[rules.required]"
            :items="items"
            ></v-select>

        <div v-if="address.delivery == 'Entrega'">
            <v-text-field
            label="Endereço"
            :rules="[rules.required]"
            dense
            outlined
            v-model="address.address"
            ></v-text-field>

            <v-row>
                <v-col
                cols="12"
                sm="6"
                md="6">
                    <v-text-field
                    label="Bairro"
                    :rules="[rules.required]"
                    dense
                    outlined
                    v-model="address.district"
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                sm="6"
                md="6">
                    <v-text-field
                    label="Número"
                    :rules="[rules.required]"
                    dense
                    outlined
                    v-model="address.nro"
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                sm="6"
                md="6">
                    <v-text-field
                    label="Cidade"
                    dense
                    outlined
                    v-model="address.city"
                    disabled
                    ></v-text-field>

                </v-col>
                <v-col
                cols="12"
                sm="6"
                md="6">
                    <v-text-field
                    label="Estado"
                    dense
                    outlined
                    v-model="address.uf"
                    disabled
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-textarea
            label="Ponto de Referência"
            v-model="address.referencePoint"
            dense
            outlined
            ></v-textarea>
    </div>
    <div v-else-if="address.delivery == 'Retirada'">
            <div class="address">
                <strong>Retirada</strong><br>
                Av. Frederico Peixoto, 108, Centro<br>
                Pinheiro - MA <br>
                Easy Conveniência
            </div>
    </div>
            <v-textarea
            label="Observações"
            placeholder="Utilize esse campo para informar algo, caso necessário"
            v-model="address.obs"
            dense
            outlined
            ></v-textarea>
            <encomenda-sendMsg :order="address" />
        </v-card-text>
        <!-- </v-form> -->
    </v-card>
</template>

<script>
    export default {
        data(){
            return{
                items: ['', 'Entrega', 'Retirada'],
                rules: {
                    required: (value) => !!value || "Este campo é obrigatório",
                    dateLimit: (v) => (v||'') > new Date().toLocaleDateString('pt-BR', {timeZone: 'UTC'}).split("/").reverse().join("-") || "Nao pode mesmo dia ou data anterior",
                },
                address:{
                    name: "",
                    address: "",
                    dataOrder: "",
                    nro: "",
                    district: "",
                    city: "Pinheiro",
                    uf: "MA",
                    referencePoint: "",
                    obs: ""
                }
            }
        },
        computed:{
            onsubmit(){
                if (this.$refs.form.validate()) {
                    return true
                }
            },
        }
    }
</script>

<style scoped>
    .address{
        border: 1px solid rgb(110, 134, 134);
        padding: 8px;
        margin: 10px 0px 10px 0px;
        border-radius: 8px;
    }
</style>