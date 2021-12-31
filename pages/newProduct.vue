<template>
    <v-container>
        <div class="text-center">
              <v-alert
                border="left"
                colored-border
                color="green"
                elevation="2"
                class="my-5 mr-2"
                icon="mdi-hamburger-plus"
               > Cadastrar Produtos
              </v-alert>
            </div>
            <v-divider class="mb-5"></v-divider>
            <forms-produtos class="mx-5"></forms-produtos>        
    </v-container>
</template>

<script>
export default {
    middleware: 'auth',
}
</script>