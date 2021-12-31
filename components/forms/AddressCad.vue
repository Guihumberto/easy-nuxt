<template>
    <v-card max-width="800" class="mx-auto">
        <v-card-title>Endereços Cadastrados</v-card-title>
        <v-card-text v-for="address in addresses" :key="address.id">
            <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <div>Endereço: {{address.Endereco}}, {{address.Numero}}, {{address.Bairro}}</div>
                    <div>{{address.Cidade}} - {{address.Estado}}</div>
                    <div>Ponto de Referência{{address.Referencia}}</div>
                </div>
                <div>
                    <v-checkbox
                    v-model="checkbox"
                    label="address.principal"
                    ></v-checkbox>
                </div>
            </div>
        </v-card-text>
        <v-divider></v-divider>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
                    checkbox: true,
        }
    },
    props:{
        addresses:{
            require: false
        }
    }
}
</script>