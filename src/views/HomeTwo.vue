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

        <v-app-bar
                app
                color="indigo"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{ $t('homeTitle') }} </v-toolbar-title>
        </v-app-bar>

        <v-card>
            <v-tabs background-color="deep-dark accent-4" centered dark icons-and-text>
                <v-tab>
                    Calc
                    <v-icon>mdi-calculator</v-icon>
                </v-tab>

                <v-tab>
                    Opé
                    <v-icon>mdi-wifi</v-icon>
                </v-tab>

                <v-tab>
                    Epargne
                    <v-icon>mdi-tilde</v-icon>
                </v-tab>

                <v-tab>
                    Prêt
                    <v-icon>mdi-account-box</v-icon>
                </v-tab>

                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-container
                                    fluid
                            >


                                <v-row>
                                    <v-col cols="12">
                                        <v-card class="pa-2" outlined tile>
                                            <v-icon>mdi-calculator</v-icon> {{ premier }} {{ vall }} {{ deuxieme }} {{ egalsign }} {{ resultat }}
                                        </v-card>
                                    </v-col>
                                </v-row>

                                <v-row
                                        align="center"
                                        justify="center"
                                >
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Clear(1)">AC</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small>+/-</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small>%</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Div">/</v-btn>
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row
                                        align="center"
                                        justify="center"
                                >
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Numero(7)">7</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Numero(8)">8</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Numero(9)">9</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Mult">X</v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row
                                        align="center"
                                        justify="center"
                                >
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Numero(4)">4</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Numero(5)">5</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Numero(6)">6</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Supp">-</v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row
                                        align="center"
                                        justify="center"
                                >
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Numero(1)">1</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Numero(2)">2</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Numero(3)">3</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Add">+</v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row
                                        align="center"
                                        justify="center"
                                >

                                    <v-col class="text-center">
                                        <div class="my-3">
                                            <v-btn class="zero" small @click="Numero(0)">0</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-3">
                                            <v-btn class="zero" small @click="Triple">000</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small >,</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="my-2">
                                            <v-btn small @click="Somme">=</v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-tab-item>

                <v-tab-item>
                    <v-card flat>
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
                    </v-card>
                </v-tab-item>

                <v-tab-item>
                    <v-card flat>
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
                    </v-card>
                </v-tab-item>


                <v-tab-item>
                    <v-card flat>
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
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </v-app>
</template>

<script>
    import { pret } from "@/outils/pret";
    import {placement} from "@/outils/placement";

    export default {
        name: "HomeTwo",
        props: {
            source: String,
        },
        data () {
            return {
                rendm: '',

                text1: 'toto',
                text2: 'tata',
                text3: 'titi',
                resultat: '',
                historique: '',
                nouveau: 0,
                vall: '',
                premier: '',
                deuxieme: '',
                indice: '',
                suivant: 0,
                tempCalc: '',
                suitecalc: '',
                egalsign: '',
                drawer: null,


                pretMois: null,
                pretMontant: null,
                pretMensualite: null,
                pretTaux: null,
                pretAssurance: null,

                epargneMois: null,
                epargneInitial: null,
                epargneMensualite: null,
                epargneCapital: null,
                epargneTaux: null,
                epargneDroit: null,

                operationMois: null,
                operationInitial: null,
                operationMensualite: null,
                operationCapital: null,
                operationTaux: null,
                operationDroit: 0,

                totalPretNull: 0,
                totalEpargneNull: 0,
                totalOperationNull: 0
            }
        },
        methods: {
            pretSuppr: function () {
                this.pretMois = null;
                this.pretTaux = null;
                this.pretMensualite = null;
                this.pretMontant = null;
                this.pretAssurance = null;
                this.totalPretNull = 0;
            },
            operationCalcul: function () {
                var retour = placement(this.operationMois, this.operationInitial, this.operationMensualite, this.operationCapital, this.operationTaux, this.operationDroit);
                this.operationMois = retour[0];
                this.operationInitial = retour[1];
                this.operationMensualite = retour[2];
                this.operationCapital = retour[3];
                this.operationTaux = retour[4];
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
                    this.totalEpargneNull = 0;
                }
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
                    if (this.pretMois == null) {
                        this.pretMois = -1;
                    }
                    if (this.pretAssurance == null) {
                        this.pretAssurance = -1;
                    }
                    if (this.pretTaux == null) {
                        this.pretTaux = -1;
                    }
                    if (this.pretMontant == null) {
                        this.pretMontant = -1;
                    }
                    if (this.pretMensualite == null) {
                        this.pretMensualite = -1;
                    }

                    var retour = pret(this.pretMois, this.pretTaux, this.pretMensualite, this.pretMontant, this.pretAssurance);
                    this.pretMois = retour[1];
                    this.pretTaux = retour[2];
                    this.pretMensualite = retour[3];
                    this.pretMontant = retour[0];
                    this.pretAssurance = retour[5];
                } else {
                    this.totalPretNull = 0;
                }
            },
            Triple: function () {
                if (this.suivant==1) {
                    this.deuxieme = this.deuxieme + '000';
                    this.tempCalc= this.tempCalc + '000';
                } if (this.nouveau==0 && this.suivant==0) {
                    this.premier= this.premier + '000';
                    this.tempCalc= this.tempCalc + '000';
                } if (this.nouveau==1) {
                    this.nouveau= 0;
                    this.historique= this.tempCalc;
                    this.Clear(2);
                    this.resultat= '';
                    this.tempCalc= '';
                    this.premier= this.premier + '000';
                    this.tempCalc= this.tempCalc + '000';
                }
            },
            Numero: function (n) {
                if (this.suivant==1) {
                    this.deuxieme = this.deuxieme + n;
                    this.tempCalc= this.tempCalc + n;
                } if (this.nouveau==0 && this.suivant==0) {
                    this.premier= this.premier + n;
                    this.tempCalc= this.tempCalc + n;
                } if (this.nouveau==1) {
                    this.nouveau= 0;
                    this.historique= this.tempCalc;
                    this.Clear(2);
                    this.resultat= '';
                    this.tempCalc= '';
                    this.premier= this.premier + n;
                    this.tempCalc= this.tempCalc + n;
                }
            },
            Cal: function () {
                if (this.message1!='' && this.message2!='' && this.message3!='' && this.message4!='') {
                    this.rendm = parseInt(this.message1) + parseInt(this.message2) + parseInt(this.message3) + parseInt(this.message4);
                } else {
                    this.rendm = '';
                }
            },
            CalSup: function () {
                this.message1 = '';
                this.message2 = '';
                this.message3 = '';
                this.message4 = '';
                this.rendm = '';
            },
            Somme: function () {
                if (this.suivant==1 && this.deuxieme!=0) {
                    if (this.indice==1) {
                        this.resultat= parseInt(this.premier) + parseInt(this.deuxieme);
                        this.tempCalc= this.tempCalc + '=' + this.resultat;
                        this.suivant = 0;
                        this.nouveau = 1;
                        this.egalsign = '=';
                    }
                    if (this.indice==2) {
                        this.resultat= parseInt(this.premier) - parseInt(this.deuxieme);
                        this.tempCalc= this.tempCalc + '=' + this.resultat;
                        this.suivant = 0;
                        this.nouveau = 1;
                        this.egalsign = '=';
                    }
                    if (this.indice==3) {
                        this.resultat= parseInt(this.premier) * parseInt(this.deuxieme);
                        this.tempCalc= this.tempCalc + '=' + this.resultat;
                        this.suivant = 0;
                        this.nouveau = 1;
                        this.egalsign = '=';
                    }
                    if (this.indice==4) {
                        this.resultat= parseInt(this.premier) / parseInt(this.deuxieme);
                        this.tempCalc= this.tempCalc + '=' + this.resultat;
                        this.suivant = 0;
                        this.nouveau = 1;
                        this.egalsign = '=';
                    }
                }
            },
            Add: function () {
                if (this.nouveau==0 && this.suivant==0) {
                    this.suivant= 1;
                    this.indice= 1;
                    this.vall= '+';
                    this.tempCalc= this.tempCalc + '+';
                } if (this.nouveau==1) {
                    this.nouveau= 0;
                    this.historique= this.tempCalc;
                    this.premier= this.resultat;
                    this.Clear(3);
                    this.resultat= '';
                    this.tempCalc= '';
                    this.suivant= 1;
                    this.indice= 1;
                    this.vall= '+';
                    this.tempCalc= this.premier + '+';
                    this.egalsign = '';
                }
            },
            Supp: function () {
                if (this.nouveau==0 && this.suivant==0) {
                    this.suivant= 1;
                    this.indice= 2;
                    this.vall= '-';
                    this.tempCalc= this.tempCalc + '-';
                } if (this.nouveau==1) {
                    this.nouveau= 0;
                    this.historique= this.tempCalc;
                    this.premier= this.resultat;
                    this.Clear(3);
                    this.resultat= '';
                    this.tempCalc= '';
                    this.suivant= 1;
                    this.indice= 2;
                    this.vall= '-';
                    this.tempCalc= this.premier + '-';
                    this.egalsign = '';
                }
            },
            Mult: function () {
                if (this.nouveau==0 && this.suivant==0) {
                    this.suivant= 1;
                    this.indice= 3;
                    this.vall= 'x';
                    this.tempCalc= this.tempCalc + 'x';
                } if (this.nouveau==1) {
                    this.nouveau= 0;
                    this.historique= this.tempCalc;
                    this.premier= this.resultat;
                    this.Clear(3);
                    this.resultat= '';
                    this.tempCalc= '';
                    this.suivant= 1;
                    this.indice= 3;
                    this.vall= 'x';
                    this.tempCalc= this.premier + 'x';
                    this.egalsign = '';
                }
            },
            Div: function () {
                if (this.nouveau==0 && this.suivant==0) {
                    this.suivant= 1;
                    this.indice= 4;
                    this.vall= '/';
                    this.tempCalc= this.tempCalc + '/';
                } if (this.nouveau==1) {
                    this.nouveau= 0;
                    this.historique= this.tempCalc;
                    this.premier= this.resultat;
                    this.Clear(3);
                    this.resultat= '';
                    this.tempCalc= '';
                    this.suivant= 1;
                    this.indice= 4;
                    this.vall= '/';
                    this.tempCalc= this.premier + '/';
                    this.egalsign = '';
                }
            },
            Clear: function (n) {
                if (n==2) {
                    this.suivant= 0;
                    this.indice= '';
                    this.vall= '';
                    this.premier= '';
                    this.deuxieme= '';
                    this.egalsign = '';
                } if (n==3) {
                    this.vall= '';
                    this.deuxieme= '';
                    this.egalsign = '';
                } else {
                    this.nouveau = 0;
                    this.suivant= 0;
                    this.indice= '';
                    this.vall= '';
                    this.premier= '';
                    this.deuxieme= '';
                    this.resultat= '';
                    this.historique= '';
                    this.tempCalc= '';
                    this.egalsign = '';
                }

            },
        },
        created () {
            //this.$vuetify.theme.dark = true
        },
    }
</script>

<style scoped>
    @import "./../outils/styles.css";
</style>
