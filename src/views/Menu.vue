<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>
                <v-list-item @click="Clic(1)">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="Clic(2)">
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="Clic(3)">
                    <v-list-item-action>
                        <v-icon>mdi-help</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Aide</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
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

        <v-card>
            <v-tabs background-color="deep-dark accent-4" centered dark icons-and-text>
                <v-tab>
                    Calculatrice
                    <v-icon>mdi-calculator</v-icon>
                </v-tab>

                <v-tab>
                    Op Fin
                    <v-icon>mdi-tilde</v-icon>
                </v-tab>

                <v-tab>
                    Simul Ep
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
                        <v-card-text>
                            <v-row>
                                <h1>Opération Financière</h1>
                            </v-row>
                            <form>
                            <v-row>
                                <v-col cols="6">
                                    <v-card class="pa-2" outlined tile >
                                        An / Mois
                                    </v-card>
                                </v-col>

                                <v-col cols="6">
                                    <v-text-field
                                            v-model="message1"
                                            label="Valeur"
                                            clearable
                                            type="number"
                                            v-validate="'required'"
                                            required
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
                                            v-model="message2"
                                            label="Valeur"
                                            clearable
                                            type="number"
                                            v-validate="'required'"
                                            required
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
                                            v-model="message3"
                                            label="Valeur"
                                            clearable
                                            type="number"
                                            v-validate="'required'"
                                            required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6">
                                    <v-card class="pa-2" outlined tile >
                                        Captial au terme
                                    </v-card>
                                </v-col>

                                <v-col cols="6">
                                    <v-text-field
                                            suffix="€"
                                            v-model="message4"
                                            label="Valeur"
                                            clearable
                                            type="number"
                                            v-validate="'required'"
                                            required
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
                                        v-model="rendm"
                                        readonly>
                                    </v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6">
                                    <v-btn @click="Cal">Calculer</v-btn>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn @click="CalSup">Supprimer</v-btn>
                                </v-col>
                            </v-row>
                            </form>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-row>
                                <h1>Simulation</h1>
                            </v-row>
                            <v-row>
                                <v-col cols="6">
                                    <v-card class="pa-2" outlined tile >
                                        .col-6
                                    </v-card>
                                </v-col>
                                <v-col cols="6">
                                    <v-card class="pa-2" outlined tile >
                                        Cc
                                    </v-card>
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
    export default {
        name: "header",
        props: {
            source: String,
        },
        data () {
            return {
                rendm: '',
                message1: '',
                message2: '',
                message3: '',
                message4: '',
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
            }
        },
        methods: {
            Numero: function(n) {
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

<style xml:lang="css" scoped>
    .zero {
        background-color: red;
    }
</style>