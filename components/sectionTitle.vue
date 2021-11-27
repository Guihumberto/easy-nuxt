<template>
    <v-card
        color="#385F73"
        dark
    >
        <div>
            <v-img
            src="https://easy-strapi-api.herokuapp.com/uploads/logo_21aada15af.png"
            max-height="130"
            max-width="130"
            ></v-img>
        </div>
    
        <v-card-subtitle>Pinheiro acabou de ganhar o melhor Hamburguer feito pelo ambiente mais agradável da cidade.</v-card-subtitle>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text to="/menu">
                Cardápio
            </v-btn>
        </v-card-actions>
    </v-card>
</template>