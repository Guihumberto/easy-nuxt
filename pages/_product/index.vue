<template>
    <div>
        <h1>Produtos {{ $route.params.product }}</h1>
        <p>{{ product }}</p>
    </div>
</template>

<script>
import { product } from '../../graphql/query'

    export default {
        data(){
            return {
                query: product
            }
        },
        apollo:{
            product:{
                query: product,
                variables(){
                    return{
                        id:this.$route.query.id
                    }
                }
            }
        }
    }
</script>

