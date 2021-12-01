export const strict = false

export const state = () => ({
    counter:0,
    landingPage:null
})

export const getters = {
    readLandingPage(state){
        return state.landingPage
    },
    readCounter(state){
        return state.counter
    }
}

export const mutations = {
    addLandingPage(state, payload){
        state.landingPage = payload
    },
    increment(state){
        state.counter ++
    }
}

export const actions = {
    nuxtServerInit(context){
        console.log("hola nuxt server")
        return new Promise((resolve, reject) => {
            const client = this.app.apolloProvider.defaultClient
            const query = {
                query: require("../graphql/landingPage.gql")
            }
    
            client.query(query).then(data => {
                
                resolve()
            }).catch(error => {
                console.log(error)
                reject()
            })
        })
    },
    increment(context){
        setTimeout(()=>{
            context.commit("increment")
        }, 1000)
    }
}