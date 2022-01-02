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
                @click="onsubmit"
            >
                Compartilhe
            </v-btn>

            <v-btn
                color="orange"
                text
                to="/menu"
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
                                <v-list-item target="_blank" href="https://www.instagram.com/easyboteco/">
                                    <v-list-item-icon>
                                        <v-icon>mdi-instagram</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>@easyboteco</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item target="_blank" url="juninho.joao@hotmail.com">
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
                                <v-list-item @click="whatsapp">
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
            <v-col>
                <v-card>
                    <v-card-title>Como chegar?</v-card-title>
                    <v-card-subtitle>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9649161587395!2d-45.080398885244094!3d-2.518362898164931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92b34f35479c0ad5%3A0x62bea69343cf5caa!2sEasy%20boteco!5e0!3m2!1spt-BR!2sbr!4v1641127330720!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
       
      </v-container>
</template>

<script>
  export default {
    layout: "menuRestaurant",
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
    }),
    methods: {
            onsubmit() {
                const urlApi = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send" 
                const texto = "?text=https://www.easyboteco.com.br"
                window.open(urlApi + texto, "_blank")
            },
            whatsapp() {
                const urlApi = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send" 
                const texto = "Olá, gostaria de uma informação."
                window.open(urlApi + "?phone=559884650786&text=" + texto, "_blank")
            }
    }
  }
</script>