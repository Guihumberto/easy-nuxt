import gql from "graphql-tag"

export const products = gql`
    query {
        products {
            id
            name
            value
            category
            sale
            promocao
        }
    }
`

export const product = gql`
    query($id:ID!){
        product(id:$id){
            id
            name
            value
            category
            sale
            promocao
        }
    }
`