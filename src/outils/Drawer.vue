<template>
    <v-navigation-drawer
            v-model="drawer"
            app
    >
        <v-list dense>
            <a href="/" style="text-decoration: none;">
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ $t('navHome') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </a>
            <a href="/settings" style="text-decoration: none;">
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-tilde</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ $t('navSetting') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </a>
            <a href="/help" style="text-decoration: none;">
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-help</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ $t('navHelp') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </a>
            <a href="/pretdetails" style="text-decoration: none;">
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-help</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Exemples Chart</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </a>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Drawer"
    }
</script>

<style scoped>

</style>