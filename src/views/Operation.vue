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
                <p style="margin-left: 12px; font-size: 10px; margin-top: -18px; margin-right: 12px">Développée par des Etudiants de l'UGA</p>
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
            <v-btn @click="goBack" icon>
                <v-icon color="#454545">mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>


        <!--<v-app-bar-nav-icon style="position: absolute; margin-top: 10px; margin-left: 8px" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <div class="header">
            <v-app-bar-nav-icon style="color: #454545; margin-left: 8px" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <h1 style="font-size: 20px; font-weight: 300;">{{ $t('homeTitle') }}</h1>
        </div>-->

        <div class="main">
            <div class="container">
                <div class="row">
                    <h1 class="title">Opération financière</h1>
                </div>
                <div class="row">
                    <p class="tips">Pour rechercher une valeur, veuillez laisser vide la case</p>
                </div>
            </div>

            <div class="container">
                <div class="row">
                        <v-text-field
                                color="#454545"
                                v-model="operationMois"
                                label="Mois"
                                clearable
                                type="number"
                        ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="€"
                            v-model="operationInitial"
                            label="Versement Initial"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="€"
                            v-model="operationMensualite"
                            label="Mensualité"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="€"
                            v-model="operationCapital"
                            label="Capital à terme"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="%"
                            v-model="operationTaux"
                            label="Rendement"
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
                    <span class="buttonValid" @click="operationCalcul">Calculer</span>
                </div>
            </div>
        </div>

        <!--<v-card flat>
            <div class="item">
                <v-card-text>
                    <div class="titleCl">
                        <v-row>
                            <h1 class="title">Opération Financière</h1>
                            <p class="commentaire">Veuillez rentrer -1 pour la valeur recherchée</p>
                        </v-row>
                    </div>
                    <form>
                        <div class="ligne">
                            <v-row>
                                <v-col cols="6">
                                    <p class="titleVar">Mois</p>
                                </v-col>

                                <v-col cols="6">
                                    <v-text-field
                                            class="inputText"
                                            v-model="operationMois"
                                            label="Mois"
                                            clearable
                                            type="number"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </div>

                        <div class="ligne">
                            <v-row>
                                <v-col cols="6">
                                    <p class="titleVar">Versement Initial</p>
                                </v-col>

                                <v-col cols="6">
                                    <v-text-field
                                            suffix="€"
                                            v-model="operationInitial"
                                            label="Initial"
                                            clearable
                                            type="number"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                        <v-row>
                            <v-col cols="6">
                                <v-card class="pa-2" outlined tile >
                                    Mensualité
                                </v-card>
                            </v-col>

                            <v-col cols="6">
                                <v-text-field
                                        color="#FFF"
                                        suffix="€"
                                        v-model="operationMensualite"
                                        label="Mensualité"
                                        clearable
                                        type="number"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-card class="pa-2" outlined tile >
                                    Captial à terme
                                </v-card>
                            </v-col>

                            <v-col cols="6">
                                <v-text-field
                                        suffix="€"
                                        v-model="operationCapital"
                                        label="Captial"
                                        clearable
                                        type="number"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6">
                                <v-card class="pa-2" outlined tile >
                                    Rendement
                                </v-card>
                            </v-col>

                            <v-col cols="6">
                                <v-text-field
                                        suffix="%"
                                        v-model="operationTaux"
                                        label="Taux"
                                        clearable
                                        type="number">
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6">
                                <v-btn @click="operationCalcul">Calculer</v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-card-text>
            </div>
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
                <v-btn>
                    <span color="#111111">Opération</span>
                    <v-icon color="#111111">mdi-heart</v-icon>
                </v-btn>
            </a>
            <a href="/epargne">
                <v-btn text color="#454545">
                    <span>Epargne</span>
                    <v-icon>mdi-tilde</v-icon>
                </v-btn>
            </a>

            <a href="/pret">
                <v-btn text color="#454545">
                    <span>Prêt</span>
                    <v-icon>mdi-account-box</v-icon>
                </v-btn>
            </a>
        </v-bottom-navigation>


    </v-app>
</template>

<script>
    import {placement} from "@/outils/placement";
    import router from "@/router";
    export default {
        name: "Operation",
        props: {
            source: String,
        },
        data () {
            return {
                drawer: null,
                errorMessage: null,

                operationMois: null,
                operationInitial: null,
                operationMensualite: null,
                operationCapital: null,
                operationTaux: null,
                operationDroit: 0,

                totalOperationNull: 0
            }
        },
        methods: {
            goBack: function () {
                router.push('/help')
            },
            operationCalcul: function () {

                if (this.operationMois == null) {
                    this.totalOperationNull += 1;
                }
                if (this.operationInitial == null) {
                    this.totalOperationNull += 1;
                }
                if (this.operationMensualite == null) {
                    this.totalOperationNull += 1;
                }
                if (this.operationCapital == null) {
                    this.totalOperationNull += 1;
                }
                if (this.operationTaux == null) {
                    this.totalOperationNull += 1;
                }
                if (this.operationDroit == null) {
                    this.totalOperationNull += 1;
                }

                if (this.totalOperationNull == 1) {

                    this.errorMessage = null;

                    if (this.operationMois == null) {
                        this.operationMois = -1;
                    }
                    if (this.epargneInitial == null) {
                        this.epargneInitial = -1;
                    }
                    if (this.epargneMensualite == null) {
                        this.epargneMensualite = -1;
                    }
                    if (this.epargneCapital == null) {
                        this.epargneCapital = -1;
                    }
                    if (this.epargneTaux == null) {
                        this.epargneTaux = -1;
                    }
                    if (this.epargneDroit == null) {
                        this.epargneDroit = -1;
                    }

                    var retour = placement(this.operationMois, this.operationInitial, this.operationMensualite, this.operationCapital, this.operationTaux, this.operationDroit);
                    this.operationMois = retour[0];
                    this.operationInitial = retour[1];
                    this.operationMensualite = retour[2];
                    this.operationCapital = retour[3];
                    this.operationTaux = retour[4];
                } else {
                    this.errorMessage = "Minimum une valeur nulle"
                    this.totalOperationNull = 0;
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