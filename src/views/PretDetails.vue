<template>
    <v-app id="inspire">
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
            </v-list>
        </v-navigation-drawer>

        <v-app-bar align="center"
                   app
                   color="#FFF"
        >
            <v-btn @click="goBack" icon>
                <v-icon color="#454545">fa-angle-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title style="color: #454545; font-weight: 300;">Détails Prêt</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="goHelp" icon>
                <v-icon color="#454545">mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <div>
            <p>Valeurs récupérées par URL</p>
            {{ valeur }} {{ mois }} {{ montant }} {{ mensualite }} {{ taux }} {{ assurance }}
        </div>

        <div class="main">
            <div class="container">
                <div class="row">
                    <h1 class="title">Détails simulation de prêt</h1>
                </div>
                <div class="row">
                    <p class="tips">Plus de détail sur la simulation de prêt</p>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <h2 class="subtitle-2">Prévisions</h2>
                </div>
                <div class="row">
                    <p class="tips">Informations</p>
                </div>
                <div class="row">
                    <line-chart :data="chartData"></line-chart>
                </div>
                <hr style="margin-top: 20px">
                <div class="row" style="margin-top: 20px">
                    <h2 class="subtitle-2">Entre Octobre et Décembre</h2>
                </div>
                <div class="row">
                    <p class="tips">Informations</p>
                </div>
                <div class="row">
                    <pie-chart :data="pieData"></pie-chart>
                </div>
                <!--{{ pieData }}
                {{ pieData.Decembre}}
                <div class="row">
                    <span @click="change" class="buttonValid">Changer</span>
                </div>-->
            </div>
            <hr style="margin-top: 20px; margin-left: 20px; margin-right: 20px">
            <div class="container" style="margin-top: 40px">
                <div class="row">
                    <h2 class="subtitle-2">Calculer un nouveau prêt</h2>
                </div>
                <div class="row">
                    <p class="tips">Informations</p>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            v-model="mois"
                            label="Mois"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="€"
                            v-model="montant"
                            label="Montant emprunté"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="€"
                            v-model="mensualite"
                            label="Mensualité"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="%"
                            v-model="taux"
                            label="Taux interêt annuel"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="%"
                            v-model="assurance"
                            label="Assurence"
                            clearable
                            type="number">
                    </v-text-field>
                </div>
            </div>

            <div class="container" style="margin-bottom: 100px">
                <div class="row" style="justify-content: center; align-items: center">
                    <span class="buttonValid">Calculer</span>
                </div>
            </div>
        </div>

    </v-app>
</template>

<script>
    import router from "@/router";
    export default {
        name: "PretDetails",
        props: ['valeur', 'mois', 'montant', 'mensualite', 'taux', 'assurance'],
        data() {
            return {
                decembre: 80,
                chartData: {
                    '2020-05-13': 565.23,
                    '2020-05-14': 298.57,
                    '2020-05-15': 424.33
                },
                pieData: {
                    'Octobre': 20,
                    'Novembre': 60,
                    'Decembre': 80
                }
            }
        },
        methods: {
            goBack: function () {
                router.push('/pret')
            },
            goHelp: function () {
                router.push('/help')
            },
            change: function () {
                //this.pieData[2].Decembre += 10;
                //this.pieData.Decembre.set(20);
                //this.pieData.add('Janvier', 20)
            },
        }
    }
</script>

<style scoped>
    @import "./../outils/styles.css";
</style>