<template>
    <div>
        <h1>Contact</h1>
        <div>
            <cardInfo>
                <p>email</p>
                <p>celular</p>
                <p>whatsapp</p>
            </cardInfo>
        </div>
        {{ $fetchState }}
        <ul>
            <li v-for="cat in categories" :key="cat.id">{{cat.name}}</li>
            {{ categories }}
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                categories:[] //or null
            }
        },
        async fetch(){
            const client = this.$apollo.getClient()
            const query = {
                query:require("../graphql/categories.gql")
            }

            await client.query(query).then(data => {
                console.log(data)
                this.categories = data.data.categories
            })
        }   
    }
</script>