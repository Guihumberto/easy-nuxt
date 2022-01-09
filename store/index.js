
export const state = () => ({
    titleSite: "Easy Boteco",
    subtitleSite: "Easy Express",
    counter:0,
    categories:[],
    menuSingle: [
        {
        name: "Torta de Limão", 
        description:"Torta de limão inteira para até 8 pessoas.", 
        order:true, qtd:"serve 8 pessoas", 
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERzyAsPFqiE8LHI1cdQuLuFFjAfqIXOEMng&usqp=CAU", 
        show: true,
        delivery: true,
        qtd: 1,
        price:120
        },
        {
        name: "Mocotó", 
        order:false, 
        description:"Mocotó bem servido para 2 pessoas, acompanha arroz, farofa e limão.", 
        show: true,
        delivery: true,
        qtd:1,  
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfd5PnJ_abdG32e3U3a2xewqsIfel7cL5RA&usqp=CAU", 
        price:25
        },
        {
        name: "Feijoada", 
        description:"Feijoada bem servido para 2 pessoas, acompanha arroz, farofa e limão.", 
        order:false, 
        show: true,
        delivery: true,
        qtd:1, 
        url:"https://media.istockphoto.com/photos/feijoada-typical-brazilian-food-with-black-beans-pork-and-sausage-picture-id1297461651?b=1&k=20&m=1297461651&s=170667a&w=0&h=isjuNjtlupEATf0Aw7TESY_piPbPEuXMpK-3gxDd-2A=", 
        price:25
        },
        {
        name: "Hambúrguer", 
        description:"em breve", 
        order:false, 
        show: true,
        delivery: true,
        qtd:1,  
        url:"https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg", 
        price:13
        }
    ]
})

export const getters = {
    readTittleSite(state){
        return state.titleSite
    },
    readSubtitleSite(state){
        return state.subtitleSite
    },
    readMenuSingle(state){
        return state.menuSingle
    },
    readCategories(state){
        return state.categories
    },
    readCounter(state){
        return state.counter
    }
}

export const mutations = {
    addCategories(state, payload){
        state.categories = payload
    },
    increment(state){
        state.counter ++
    }
}

// export const actions = {
//     nuxtServerInit({commit}){
//         console.log("hola nuxt server")
//         return new Promise((resolve, reject) => {
//             const client = this.app.apolloProvider.defaultClient
//             const query = {
//                 query: require("../graphql/categories.gql")
//             }
    
//             client.query(query).then(data => {
//                 commit('addCategories', data.data.categories)
//                 resolve()
//             }).catch(error => {
//                 console.log(error)
//                 reject()
//             })
//         })
//     },
//     increment(context){
//         setTimeout(()=>{
//             context.commit("increment")
//         }, 1000)
//     }
// }