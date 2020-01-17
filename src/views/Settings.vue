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
            <v-toolbar-title style="color: #454545; font-weight: 300;">{{ $t('settingTitle') }} </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="goBack" icon>
                <v-icon color="#454545">mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-container>
            <v-row>
                <v-col>
                    <v-toolbar-title class="title">{{ $t('settingGlobal')}}</v-toolbar-title>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p>{{ $t('settingSub') }}</p>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center">
                    <v-card @click="langage" class="pa-2" outlined tile>
                        {{ $t('settingLanguage')}}
                    </v-card>
                </v-col>
                <v-col>
                    <v-select v-model="langue"
                              :items="Lang"
                              label="Langue"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col justify="center">
                    <p>{{ $t('currentMsg') }} {{ $t('currentLanguage') }}</p>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center">
                    <v-card class="pa-2" outlined tile>
                        {{ $t('settingCurrency')}}
                    </v-card>
                </v-col>
                <v-col>
                    <v-select v-model="devise"
                              :items="Devise"
                              label="Devise"
                    ></v-select>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center">
                    <v-card @click="persist" class="pa-2" outlined tile>
                        {{ $t('settingDecimal') }}
                    </v-card>
                </v-col>
                <v-col>
                    <v-text-field
                            v-model="decimal"
                            clearable
                            type="number"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center">
                    <v-card class="pa-2" outlined tile>
                        {{ $t('settingSeparator') }}
                    </v-card>
                </v-col>
                <v-col>
                    <v-select v-model="separateur"
                              :items="separateur"
                              label="Séparateur"
                    ></v-select>
                </v-col>
            </v-row>

            <hr>

            <v-row>
                <v-col justify="center">
                    <v-card class="pa-4" outlined tile>
                        {{ $t('settingEmail') }}
                    </v-card>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-text-field label="Email"
                                  type="text"
                                  clearable>

                    </v-text-field>
                </v-col>
            </v-row>

            <br>

            <v-row>
                <v-col>
                    <v-toolbar-title>{{ $t('settingSecondTitle') }}</v-toolbar-title>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center">
                    <v-card class="pa-2" outlined tile>{{ $t('settingTime') }}
                    </v-card>
                </v-col>
                <v-col>
                    <v-text-field
                            v-model="duree"
                            clearable
                            label="Durée"
                            type="number"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-toolbar-title>{{ $t('settingThridTitle') }}</v-toolbar-title>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center">
                    <v-card class="pa-2" outlined tile>{{ $t('settingEntry') }}
                    </v-card>
                </v-col>
                <v-col>
                    <v-text-field
                            suffix="%"
                            v-model="droit"
                            clearable
                            label="Droit"
                            type="number"
                    ></v-text-field>
                </v-col>
            </v-row>

        </v-container>
    </v-app>
</template>

<script>
    import router from "@/router";
    export default {
        name: "Settings",
        props: {
            source: String,
        },
        data () {
            return {
                langue: '',
                separateur: [
                  '.',
                  ','
                ],
                Lang: [
                    'Français',
                    'English',
                    'Deutsch',
                    'Italian',
                ],
                Devise: [
                    'Euro',
                    'Dollar',
                ],
                drawer: null,
            }
        },
        mounted() {
          if (localStorage.decimal) {
              this.decimal = localStorage.decimal;
          }
        },
        methods: {
            goBack: function () {
                router.push('/help')
            },
            langage() {
              this.langue;
            },
            persist() {
                localStorage.decimal = this.decimal;
            }
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
    .title {
        text-transform: uppercase;
        color: #454545;
    }
</style>