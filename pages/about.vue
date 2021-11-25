<template>
    <v-container
        class="py-8 px-6"
        fluid
      >
      <v-card
    class="mx-auto"
        >
            <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
            <v-card-title>Sobre o Grupo Easy</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
           Quem somos nós
            </v-card-subtitle>

            <v-card-text class="text--primary">
            <div>Somos um grupo familiar nascidos e criados na Princesa da Baixada, nossa querida cidade de Pinheiro.</div>
            <div>Temos por objetivo prestar um serviço de atendimento de excelência com produtos de qualidade.</div>
            <div>Somos apaixonados por Pinheiro!</div>
            </v-card-text>

            <v-card-actions>
            <v-btn
                color="orange"
                text
            >
                Compartilhe
            </v-btn>

            <v-btn
                color="orange"
                text
            >
                Cardápio
            </v-btn>
            </v-card-actions>
        </v-card>
        
        <v-row class="my-auto">
            <v-col >
                <v-card height="192">
                    <v-card-title>Redes Sociais e e-mail</v-card-title>
                    <v-card-subtitle>
                        <v-list>
                            <v-list-item-group>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-instagram</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>@easyboteco</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-email</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>juninho.joao@hotmail.com</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card-subtitle>
                </v-card>
            </v-col>

            <v-col >
                <v-card height="192">
                    <v-card-title>WhatsApp e telefone</v-card-title>
                    <v-card-subtitle>
                        <v-list>
                            <v-list-item-group>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-phone</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>98  98465-0786</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-whatsapp</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>98  98465-0786</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col >
                <v-card height="192">
                    <v-card-title>Endereço<option value=""></option></v-card-title>
                    <v-card-subtitle>
                        <v-list>
                            <v-list-item-group>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-map-marker</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <p>Av. Fredereico Peixto, 108, Centro<br>
                                            Pinheiro-MA, <br>
                                            CEP: 65063-010<br>
                                            Em frente a Rodoviária Antiga
                                            </p>
                                            
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
       
      </v-container>
</template>

<script>
  export default {
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
    }),
  }
</script>