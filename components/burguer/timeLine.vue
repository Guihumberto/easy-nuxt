<template>
    <v-card max-width="800" 
            class="mx-auto"
            flat>
        <v-alert
           class="mt-5"
           dismissible
           color="warning"
           border="left"
           elevation="2"
           colored-border
           icon="mdi-hamburger"
           id="montar"
        >
            Como funciona?
        </v-alert>
        <v-timeline class="mx-5">
          <v-timeline-item
            v-for="(step, i) in steps"
            :key="i"
            :color="step.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${step.color}--text`"
                v-text="step.step"
              ></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${step.color}--text`">
               {{step.title}}
              </h2>
              <div>
                {{step.items}}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
        <v-btn to="/mountBurguer" block text color="orange" outlined> <v-icon small class="mr-2">mdi-hamburger</v-icon> Montar Agora</v-btn>
    </v-card>
</template>

<script>
    export default {
        data(){
            return{
                fav: true,
                menu: false,
                message: false,
                hints: true,
                alert: true,
                steps:[
                    {
                    color: 'cyan',
                    step: 'Pão',
                    title: 'Escolha o pão',
                    items: 'brioche ou autraliano'
                    },
                    {
                    color: 'green',
                    step: 'Queijo',
                    title: 'Escolha o queijo',
                    items: 'mussarela, prato, coalho'
                    },
                    {
                    color: 'pink',
                    step: 'Salada',
                    title: 'Escolha a salada',
                    items: 'tomate, pepino, alface, rúcula'
                    },
                    {
                    color: 'amber',
                    step: 'Ponto da Carne',
                    title: 'Escolha o ponto da carne',
                    items: 'ao ponto, bem passada, mal passada'
                    },
                    {
                    color: 'cyan',
                    step: 'Molho',
                    title: 'Escolha o molho',
                    items: 'gorgonzola, verde, cebola caramelizada'
                    },
                    {
                    color: 'orange',
                    step: 'Adicionais',
                    title: 'Escolha os adicionais',
                    items: 'batata, mandioca, bolinho de bacalhau'
                    },
                {
                    color: 'cyan',
                    step: 'Bebida',
                    title: 'Escolha as bebidas',
                    items: 'cerveja, sucos, refrigerantes, água'
                    },
                ]
            }
        }
        
    }
</script>