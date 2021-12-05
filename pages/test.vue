<template>
    <div id="app">
        <v-app id="inspire">
            <div class="text-center">
                <h1 class="mb-5">Cardápio</h1>
                <v-row justify="center">
                    <v-expansion-panels inset>
                        <v-expansion-panel
                        v-for="(item,i) in 5"
                        :key="i"
                        >
                            <v-expansion-panel-header>Item</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>

            <v-btn
                color="blue"
                dark
                @click="sheet = !sheet"
                block
                fixed
                absolute
                bottom
            >
                Carrinho (0) R$0,00
            </v-btn>
            <v-bottom-sheet v-model="sheet">
                <v-sheet
                class="text-center"
                height="200px"
                >
                <v-btn
                    class="mt-6"
                    text
                    color="red"
                    @click="sheet = !sheet"
                >
                    close
                </v-btn>
                <div class="py-3">
                    This is a bottom sheet using the controlled by v-model instead of activator
                </div>
                </v-sheet>
            </v-bottom-sheet>
            </div>
        </v-app>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                sheet: false,
                tiles: [
                    { img: 'keep.png', title: 'Keep' },
                    { img: 'inbox.png', title: 'Inbox' },
                    { img: 'hangouts.png', title: 'Hangouts' },
                    { img: 'messenger.png', title: 'Messenger' },
                    { img: 'google.png', title: 'Google+' },
                ],
            }
        }
    }
</script>