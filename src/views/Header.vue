<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>
                <a href="/" style="text-decoration: none;">
                    <v-list-item @click="Clic(1)">
                        <v-list-item-action>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </a>
                <a href="/contact" style="text-decoration: none;">
                    <v-list-item @click="Clic(2)">
                        <v-list-item-action>
                            <v-icon>mdi-contact-mail</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Contact</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </a>
                <a href="/about" style="text-decoration: none;">
                    <v-list-item @click="Clic(3)">
                        <v-list-item-action>
                            <v-icon>mdi-help</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Aide</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </a>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="indigo"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Calculatrice Financière</v-toolbar-title>
        </v-app-bar>
    </v-app>
</template>

<script>
    export default {
        name: "Header",
        props: {
            source: String,
        },
        data () {
            return {
                drawer: null,
            }
        },
    }
</script>

<style scoped>

</style>