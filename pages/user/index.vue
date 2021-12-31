<template>
    <div>
        <v-card>
            novo {{id}}
            <v-card-title>Bem Vindo {{$auth.user.username}}</v-card-title>
            <v-btn @click="painel = !painel" color="primary" class="ml-2">Add endereço</v-btn>
            <v-card-text v-if="painel">
                <v-alert dense
                outlined
                type="error">Você não possui um endereço cadastrado!</v-alert>            
                <forms-Address />
            </v-card-text> 
            <v-card-text v-else>
                <forms-AddressCad :addresses="addresses" />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    data(){
        return{
            painel: false,
            id: this.$auth.user.id
        }
    },
    async asyncData({app}){
        const client = app.apolloProvider.defaultClient
        const id = 1
        const query = {
            query:require("../../graphql/address.gql"),
            variables:{id}
        }
        let addresses = []
        await client.query(query).then(data => {
            addresses = data.data.addresses
        }).catch(e => console.log(e))

        return {addresses}
    }
}
</script>