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
            <v-btn @click="goBack" icon>
                <v-icon color="#454545">mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <div class="main">
            <div class="container">
                <div class="row">
                    <h1 class="title">Simulateur d'épargne</h1>
                </div>
                <div class="row">
                    <p class="tips">Pour rechercher une valeur, veuillez laisser vide la case</p>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <v-text-field
                            color="#454545"
                            v-model="epargneMois"
                            label="Mois"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="€"
                            v-model="epargneInitial"
                            label="Versement Initial"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="€"
                            v-model="epargneMensualite"
                            label="Mensualité"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="€"
                            v-model="epargneCapital"
                            label="Capital à terme"
                            clearable
                            type="number"
                    ></v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="%"
                            v-model="epargneTaux"
                            label="Taux d'intérêt annuel"
                            clearable
                            type="number">
                    </v-text-field>
                </div>
                <div class="row">
                    <v-text-field
                            color="#454545"
                            suffix="%"
                            v-model="epargneDroit"
                            label="Droits d'entrée"
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
                    <span class="buttonValid" @click="epargneCalcul">Calculer</span>
                </div>
            </div>
        </div>

        <!--<v-card flat>
            <v-card-text>
                <v-row class="titleCl">
                    <h1 class="title">Simulateur d'épargne</h1>
                    <p class="commentaire">Veuillez rentrer -1 pour la valeur recherchée</p>
                </v-row>
                <form>
                    <v-row>
                        <v-col cols="6">
                            <v-card class="pa-2" outlined tile >
                                Mois
                            </v-card>
                        </v-col>

                        <v-col cols="6">
                            <v-text-field
                                    v-model="epargneMois"
                                    label="Mois"
                                    clearable
                                    type="number"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-card class="pa-2" outlined tile >
                                Versement Initial
                            </v-card>
                        </v-col>

                        <v-col cols="6">
                            <v-text-field
                                    suffix="€"
                                    v-model="epargneInitial"
                                    label="Initial"
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
                                    v-model="epargneMensualite"
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
                                    v-model="epargneCapital"
                                    label="Captial"
                                    clearable
                                    type="number"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-card class="pa-2" outlined tile >
                                Taux d'intérêt annuel
                            </v-card>
                        </v-col>

                        <v-col cols="6">
                            <v-text-field
                                    suffix="%"
                                    v-model="epargneTaux"
                                    label="Taux"
                                    clearable
                                    type="number">
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-card class="pa-2" outlined tile >
                                Droits d'entrée
                            </v-card>
                        </v-col>

                        <v-col cols="6">
                            <v-text-field
                                    suffix="%"
                                    v-model="epargneDroit"
                                    label="Droit"
                                    clearable
                                    type="number">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-btn @click="epargneCalcul">Calculer</v-btn>
                        </v-col>
                    </v-row>
                </form>
            </v-card-text>
        </v-card>-->

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
                <v-btn>
                    <span color="#111111">Epargne</span>
                    <v-icon color="#111111">mdi-tilde</v-icon>
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
        name: "Epargne",
        props: {
            source: String,
        },
        data () {
            return {
                drawer: null,
                errorMessage: null,

                epargneMois: null,
                epargneInitial: null,
                epargneMensualite: null,
                epargneCapital: null,
                epargneTaux: null,
                epargneDroit: null,

                totalEpargneNull: 0
            }
        },
        methods: {
            goBack: function () {
                router.push('/help')
            },
            epargneCalcul: function () {

                if (this.epargneMois == null) {
                    this.totalEpargneNull += 1;
                }
                if (this.epargneInitial == null) {
                    this.totalEpargneNull += 1;
                }
                if (this.epargneMensualite == null) {
                    this.totalEpargneNull += 1;
                }
                if (this.epargneCapital == null) {
                    this.totalEpargneNull += 1;
                }
                if (this.epargneTaux == null) {
                    this.totalEpargneNull += 1;
                }
                if (this.epargneDroit == null) {
                    this.totalEpargneNull += 1;
                }

                if (this.totalEpargneNull == 1) {

                    this.errorMessage = null;

                    if (this.epargneMois == null) {
                        this.epargneMois = -1;
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

                    var retour = placement(this.epargneMois, this.epargneInitial, this.epargneMensualite, this.epargneCapital, this.epargneTaux, this.epargneDroit);
                    this.epargneMois = retour[0];
                    this.epargneInitial = retour[1];
                    this.epargneMensualite = retour[2];
                    this.epargneCapital = retour[3];
                    this.epargneTaux = retour[4];
                    this.epargneDroit = retour[5];
                } else {
                    this.errorMessage = "Minimum une valeur nulle";
                    this.totalEpargneNull = 0;
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