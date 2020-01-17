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
      <v-toolbar-title style="color: #454545; font-weight: 300;">{{ $t('helpTitle') }} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="goBack" icon>
        <v-icon color="#454545">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <div class="main">
      <div class="container">
        <div class="row">
          <h1 class="title">Plus d'infos</h1>
        </div>
        <div class="row">
          <p class="tips">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <h1 class="title">Contact</h1>
        </div>
        <div class="row">
          <p class="tips">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
      </div>
    </div>


  </v-app>
</template>

<script>
  import router from "@/router";
  export default {
    name: "About",
    props: {
      source: String,
    },
    data () {
      return {
        drawer: null,
      }
    },
    methods: {
      goBack: function () {
        router.push('/help')
      },
    },
    created () {
      //this.$vuetify.theme.dark = true
    },
  }
</script>

<style xml:lang="css" scoped>
  @import "./../outils/styles.css";
</style>