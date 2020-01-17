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
      <v-btn @click="goHelp" icon>
        <v-icon color="#454545">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!--<div class="main">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-2" outlined tile>
              <v-icon>mdi-calculator</v-icon> {{ premier }} {{ vall }} {{ deuxieme }} {{ egalsign }} {{ resultat }}
            </v-card>
          </v-col>
      </v-row>
        <v-row>
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
        <v-row>
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
        <v-row>
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
        <v-row>
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
        <v-row>
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

      <div class="container" style="margin-bottom: 20px">
        <div class="row" style="justify-content: center; align-items: center">
          <p style="color: #a60305; font-size: 10px">{{ errorMessage }}</p>
        </div>
        <div class="row" style="justify-content: center; align-items: center">
          <span class="buttonValid" @click="pretCalcul">Calculer</span>
        </div>
      </div>
    </div> -->

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
                <v-btn small @click="sign">+/-</v-btn>
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

    <v-bottom-navigation
            fixed
            color="#454545"
    >
      <a href="/">
        <v-btn>
          <span color="#111111">Calculatrice</span>
          <v-icon color="#111111">mdi-calculator</v-icon>
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
      <v-btn text color="#454545">
        <span>Prêt</span>
        <v-icon>mdi-account-box</v-icon>
      </v-btn>
      </a>
    </v-bottom-navigation>


  </v-app>
</template>

<script>
  import router from "@/router";
  export default {
    name: "home",
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

      }
    },
    methods: {
      goHelp: function () {
        router.push('/help')
      },
      sign: function () {
        if(this.suivant == 0 && this.nouveau == 0) {
          this.premier = this.premier.charAt(0) === '-' ?
                  this.premier.slice(1) : `-${this.premier}`;
        }
        if(this.suivant == 1) {
          this.deuxieme = this.deuxieme.charAt(0) === '-' ?
                  this.deuxieme.slice(1) : `-${this.deuxieme}`;
        }
        if(this.nouveau == 1) {
          this.tempCalc = this.tempCalc.charAt(0) === '-' ?
                  this.tempCalc.slice(1) : `-${this.tempCalc}`;
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