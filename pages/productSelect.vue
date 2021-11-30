<template>
    <v-container>
        <v-toolbar color="rgba(0,0,0,0)" flat>
            <v-toolbar-title class="mt-n3">Escolha a Categoria</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field label="Buscar..." class="mt-5" color="brown" filled append-icon="mdi-magnify"
                dense
                solo
                flat
                background-color="grey lighten-2"
            ></v-text-field>
        </v-toolbar>
        <v-item-group mandatory class="mt-n1">
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" md="2" v-for="cat in category" :key="cat.title">
                        <v-item v-slot="{active, toggle}">
                            <v-card 
                                :color="active ? '#f6efef' : 'white'"
                                :class="active ? 'borderme' : 'borderout'"
                                clas="f-flex align-center rounded-lg mx-2"
                                dark
                                height="140"
                                @click="toggle"
                                flat
                                >
                                <v-row>
                                    <v-col cols="12" sm="12">
                                        <v-list-item three-line class="text-center">
                                            <v-list-item-content>
                                                <div align="center" justify="center">
                                                    <v-img :src="cat.url" :max-width="cat.tam" :max-height="cat.tam" contain></v-img>
                                                </div>
                                                <v-list-item-subtitle
                                                :class="active ? 'brown--text' : 'black--text'"
                                                class="caption mt-4"
                                                >{{ cat.title }}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>
        <v-toolbar color="#EEEEEE" flat>
            <v-toolbar-title>
                Refeição Menu
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span color="grey">2 (duas) opções encontradas</span>
        </v-toolbar>
        <v-row>
            <v-col cols="12" sm="6">
                <v-card flat class="rounded-lg mx-5">
                    <v-list-item three-line>
                        <v-list-item-avatar rounded size="120" color="grey lighten-4">
                            <v-img src="data:image/jpeg;base64,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"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5">Mocotó</v-list-item-title>
                            <v-list-item-subtitle class="mt-1">Refeição de mocotó para 2 ou 4 pessoas</v-list-item-subtitle>
                            <strong class="mt-3">R$25</strong>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" sm="6" class="mt-1">
                                <strong class="ml-3">Arroz</strong>
                                <v-item-group mandatory class="mt-n1">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="4" v-for="arroz in arrozes" :key="arroz.title">
                                                <v-item v-slot="{active, toggle}">
                                                    <v-card
                                                    color="#F6EFEF"
                                                    :class="active ? 'borderme' : ''"
                                                    class="d-flex align-center rounded"
                                                    dark
                                                    width="80"
                                                    height="40"
                                                    @click="toggle"
                                                    flat>
                                                        <v-list-item class="text-center">
                                                            <v-list-item-content>
                                                                <v-icon small dark color="orange">{{ arroz.title }}</v-icon>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-card>
                                                </v-item>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-item-group>
                            </v-col>
                            <v-col cols="12" sm="6" class="mt1">
                                <strong class="ml-2">Tamanho</strong>
                                <v-item-group mandatory class="mt-n1">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="2" v-for="size in sizes" :key="size.tam">
                                                <v-item v-slot="{active, toggle}">
                                                    <v-card
                                                    color="#f6efef"
                                                    :class="active ? borderme : ''"
                                                    class="d-flex align-center rounded"
                                                    height="50" width="50"
                                                    @click="toggle"
                                                    flat>
                                                        <v-list-item class="text-center">
                                                            <strong class="font-weight-black"> {{ size.tam }} </strong>
                                                        </v-list-item>
                                                    </v-card>
                                                </v-item>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-item-group>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" sm="6" class="mt-1">
                                <strong class="ml-3">Acompanhamentos</strong>
                                <v-item-group mandatory class="mt-n1">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="4" v-for="sugar in sugars" :key="sugar.title">
                                                <v-item v-slot="{active, toggle}">
                                                    <v-card
                                                    color="#F6EFEF"
                                                    :class="active ? 'borderme' : ''"
                                                    class="d-flex align-center rounded"
                                                    dark
                                                    width="80"
                                                    height="40"
                                                    @click="toggle"
                                                    flat>
                                                        <v-list-item class="text-center">
                                                            <v-list-item-content>
                                                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'"> {{ sugar.qtd }} </strong>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-card>
                                                </v-item>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-item-group>
                            </v-col>
                            <v-col cols="12" sm="6" class="mt1">
                                <strong class="ml-2">Adicionais</strong>
                                <v-item-group mandatory class="mt-n1">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="4" v-for="size in sizes" :key="size.tam">
                                                <v-item v-slot="{active, toggle}">
                                                    <v-card
                                                    color="#f6efef"
                                                    :class="active ? borderme : ''"
                                                    class="d-flex align-center rounded-circle"
                                                    height="50" width="50"
                                                    @click="toggle"
                                                    flat>
                                                        <v-list-item class="text-center">
                                                            <strong class="font-weight-black">{{ size.tam }}</strong>
                                                        </v-list-item>
                                                    </v-card>
                                                </v-item>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-item-group>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn color="#74232" block dark class="widthoutupercase mb-2">
                            Adicionar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card flat class="rounded-lg mx-5">
                    <v-list-item three-line>
                        <v-list-item-avatar rounded size="120" color="grey lighten-4">
                            <v-img src="data:image/jpeg;base64,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"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5">Feijoada</v-list-item-title>
                            <v-list-item-subtitle class="mt-1">Refeição de feijoada para 2 ou 4 pessoas</v-list-item-subtitle>
                            <strong class="mt-3">R$25</strong>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" sm="6" class="mt-1">
                                <strong class="ml-3">Arroz</strong>
                                <v-item-group mandatory class="mt-n1">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="4" v-for="arroz in arrozes" :key="arroz.title">
                                                <v-item v-slot="{active, toggle}">
                                                    <v-card
                                                    color="#F6EFEF"
                                                    :class="active ? 'borderme' : ''"
                                                    class="d-flex align-center rounded"
                                                    dark
                                                    width="80"
                                                    height="40"
                                                    @click="toggle"
                                                    flat>
                                                        <v-list-item class="text-center">
                                                            <v-list-item-content>
                                                                <v-icon small dark color="orange">{{ arroz.title }}</v-icon>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-card>
                                                </v-item>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-item-group>
                            </v-col>
                            <v-col cols="12" sm="6" class="mt1">
                                <strong class="ml-2">Tamanho</strong>
                                <v-item-group mandatory class="mt-n1">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="4" v-for="size in sizes" :key="size.tam">
                                                <v-item v-slot="{active, toggle}">
                                                    <v-card
                                                    color="#f6efef"
                                                    :class="active ? borderme : ''"
                                                    class="d-flex align-center rounded-circle"
                                                    height="50" width="50"
                                                    @click="toggle"
                                                    flat>
                                                        <v-list-item class="text-center">
                                                            <v-icon small class="font-weight-black">{{ size.tam }}</v-icon>
                                                        </v-list-item>
                                                    </v-card>
                                                </v-item>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-item-group>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" sm="6" class="mt-1">
                                <strong class="ml-3">Acompanhamentos</strong>
                                <v-item-group mandatory class="mt-n1">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="4" v-for="sugar in sugars" :key="sugar.title">
                                                <v-item v-slot="{active, toggle}">
                                                    <v-card
                                                    color="#F6EFEF"
                                                    :class="active ? 'borderme' : 'borderout'"
                                                    class="d-flex align-center rounded"
                                                    dark
                                                    width="80"
                                                    height="40"
                                                    @click="toggle"
                                                    flat>
                                                        <v-list-item class="text-center">
                                                            <v-list-item-content>
                                                                <strong class="overline" :class="active ? 'brown--text' : 'red--text'">{{ sugar.qtd }}</strong>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-card>
                                                </v-item>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-item-group>
                            </v-col>
                            <v-col cols="12" sm="6" class="mt1">
                                <strong class="ml-2">Adicionais</strong>
                                <v-item-group mandatory class="mt-n1">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="4" v-for="size in sizes" :key="size.tam">
                                                <v-item v-slot="{active, toggle}">
                                                    <v-card
                                                    color="#f6efef"
                                                    :class="active ? borderme : ''"
                                                    class="d-flex align-center rounded-circle"
                                                    height="50" width="50"
                                                    @click="toggle"
                                                    flat>
                                                        <v-list-item class="text-center">
                                                            <strong class="font-weight-black">S</strong>
                                                        </v-list-item>
                                                    </v-card>
                                                </v-item>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-item-group>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn color="#74232" block dark class="widthoutupercase mb-2">
                            Adicionar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                category:[
                    {title: "Todas", tam:"80", url:"data:image/png;base64,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"},
                    {title: "Mocoto", tam:"110", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXehFy58qYVuHbx_zaY7ODXjvmMqMlS0kQg&usqp=CAU"},
                    {title: "Feijoada", tam:"80", url:"data:image/jpeg;base64,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"},
                    {title: "Torta de Limão", tam:"110", url:"data:image/png;base64,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"},
                    {title: "Bebidas", tam:"110", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIi2rNfuW0UzaQhSHTenyjsSgb4DdiGyUSNg&usqp=CAU"},
                ],
                arrozes:[
                    {title: "Branco"},
                    {title: "Brocolis"},
                ],
                sizes: [
                    {tam: "P"},
                    {tam: "M"},
                    {tam: "G"},
                ],
                sugars: [
                    {qtd: "Batata"},
                    {qtd: "Salada"},
                    {qtd: "Purê"}
                ]
            }
        }
    }
</script>

<style>
    .v-card.borderme{
    border: 2px solid #704232 !important;
    }
    .v-card.borderout{
        border: 1px solid #BCAAA4 !important;
    }
</style>