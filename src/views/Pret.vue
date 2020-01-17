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
                            <v-icon>fa-home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{ $t('navHome') }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </a>
                <hr style="margin-left: 40px; margin-right: 40px">
                <a href="/settings" style="text-decoration: none;">
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon>fa-tools</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{ $t('navSetting') }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </a>
                <a href="/help" style="text-decoration: none;">
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon>fa-question</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{ $t('navHelp') }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </a>
                <hr style="margin-left: 40px; margin-right: 40px">
                <a href="/pretdetails" style="text-decoration: none;">
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon>fa-chart-pie</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Exemples Chart</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </a>
                <p style="margin-top: 50px; margin-left: 12px; font-size: 12px">Version 0.1.5</p>
                <p style="margin-left: 12px; font-size: 10px; margin-top: -18px; margin-right: 12px">Développée par Genesis Studio // <a style="color: #333333; font-weight: 700" target="_blank" href="https://github.com/erygn">GitHub</a></p>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar align="center"
                app
                color="#FFF"
        >
          <v-app-bar-nav-icon style="color: #454545" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
              <v-toolbar-title style="color: #454545; font-weight: 300;">{{ $t('homeTitle') }} </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="goHelp" icon>
                <v-icon color="#454545">mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <div class="main">
            <div class="container">
                <div class="row">
                    <h1 class="title">Simulation de prêt</h1>
                </div>
                <div class="row">
                    <p class="tips">Pour rechercher une valeur, veuillez laisser vide la case</p>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <v-text-field
                            color="#454545"
                            v-model="pretMois"
                            label="Mois"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="€"
                            v-model="pretMontant"
                            label="Montant emprunté"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="€"
                            v-model="pretMensualite"
                            label="Mensualité"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="%"
                            v-model="pretTaux"
                            label="Taux interêt annuel"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="%"
                            v-model="pretAssurance"
                            label="Assurance"
                            clearable
                            type="number">
                    </v-text-field>
                </div>
            </div>

            <div class="container" style="margin-bottom: 100px">
                <div class="row" style="justify-content: center; align-items: center">
                    <p style="color: #a60305; font-size: 10px">{{ errorMessage }}</p>
                </div>
                <div class="row" style="justify-content: center; align-items: center">
                    <span class="buttonValid" @click="pretCalcul">Calculer</span>
                </div>
                <div class="row" style="justify-content: center; align-items: center; margin-top: 20px">
                    <router-link :to="{path: '/pretdetails', query: {valeur: pretValeurRecherche, mois: pretMois, montant: pretMontant, mensualite: pretMensualite, taux: pretTaux, assurance: pretAssurance}}"><span v-if="detailButton" class="buttonValid">Détails</span></router-link>
                </div>
            </div>
        </div>

        <!-- <v-card flat>
            <v-card-text>
                <v-row class="titleCl">
                    <h1 class="title">Simulation de Prêt</h1>
                    <p class="commentaire">Ne pas compléter pour trouver la valeur recherchée</p>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-card class="pa-2" outlined tile >
                            Mois
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                                v-model="pretMois"
                                label="Mois"
                                clearable
                                type="number"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-card class="pa-2" outlined tile >
                            Montant emprunté
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                                suffix="€"
                                v-model="pretMontant"
                                label="Emprunt"
                                clearable
                                type="number"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-card class="pa-2" outlined tile >
                            Mensualité
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                                suffix="€"
                                v-model="pretMensualite"
                                label="Mensualité"
                                clearable
                                type="number"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-card class="pa-2" outlined tile >
                            Taux Intérêt annuel
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                                suffix="%"
                                v-model="pretTaux"
                                label="Taux"
                                clearable
                                type="number"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-card class="pa-2" outlined tile >
                            Assurance
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                                suffix="%"
                                v-model="pretAssurance"
                                label="Assurance"
                                clearable
                                type="number"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <v-btn @click="pretCalcul">Calculer</v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn @click="pretSuppr">Supprimer</v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn @click="pretDetail">Détails</v-btn>
                    </v-col>
                </v-row>

            </v-card-text>
        </v-card> -->

        <v-bottom-navigation
                fixed
                color="#454545"
        >
            <a href="/">
            <v-btn text color="#454545">
                <span>Calculatrice</span>
                <v-icon>mdi-calculator</v-icon>
            </v-btn>
            </a>
            <a href="/operation">
            <v-btn text color="#454545">
                <span>Opération</span>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            </a>
            <a href="/epargne">
            <v-btn text color="#454545">
                <span>Epargne</span>
                <v-icon>mdi-tilde</v-icon>
            </v-btn>
            </a>
            <a href="/pret">
            <v-btn>
                <span color="#111111">Prêt</span>
                <v-icon color="#111111">mdi-account-box</v-icon>
            </v-btn>
            </a>
        </v-bottom-navigation>


    </v-app>
</template>

<script>
    import { pret } from "@/outils/pret";
    import router from '@/router';
    export default {
        name: "pret",
        props: {
            source: String,
        },
        data () {
            return {
                drawer: null,
                errorMessage: null,
                detailButton: false,

                pretMois: null,
                pretMontant: null,
                pretMensualite: null,
                pretTaux: null,
                pretAssurance: null,

                totalPretNull: 0,

                pretValeurRecherche: null
            }
        },
        methods: {
            goHelp: function () {
              router.push('/help')
            },
            pretSuppr: function () {
                this.pretMois = null;
                this.pretTaux = null;
                this.pretMensualite = null;
                this.pretMontant = null;
                this.pretAssurance = null;
                this.totalPretNull = 0;
            },
            pretCalcul: function () {

                if (this.pretMois == null) {
                    this.totalPretNull += 1;
                }
                if (this.pretAssurance == null) {
                    this.totalPretNull += 1;
                }
                if (this.pretTaux == null) {
                    this.totalPretNull += 1;
                }
                if (this.pretMontant == null) {
                    this.totalPretNull += 1;
                }
                if (this.pretMensualite == null) {
                    this.totalPretNull += 1;
                }

                if (this.totalPretNull == 1) {

                    this.errorMessage = null;

                    if (this.pretMois == null) {
                        this.pretMois = -1;
                        this.pretValeurRecherche = 1;
                    }
                    if (this.pretAssurance == null) {
                        this.pretAssurance = -1;
                        this.pretValeurRecherche = 2;
                    }
                    if (this.pretTaux == null) {
                        this.pretTaux = -1;
                        this.pretValeurRecherche = 3;
                    }
                    if (this.pretMontant == null) {
                        this.pretMontant = -1;
                        this.pretValeurRecherche = 4;
                    }
                    if (this.pretMensualite == null) {
                        this.pretMensualite = -1;
                        this.pretValeurRecherche = 5;
                    }

                    var retour = pret(this.pretMois, this.pretTaux, this.pretMensualite, this.pretMontant, this.pretAssurance);
                    this.pretMois = retour[1];
                    this.pretTaux = retour[2];
                    this.pretMensualite = retour[3];
                    this.pretMontant = retour[0];
                    this.pretAssurance = retour[5];

                    this.detailButton = true;
                } else {
                    this.errorMessage = "Minimum une valeur nulle"
                    this.totalPretNull = 0;
                }
            }
        },
        created () {
            //this.$vuetify.theme.dark = true
        },
    }
</script>

<style scoped>
    @import "./../outils/styles.css";
</style>