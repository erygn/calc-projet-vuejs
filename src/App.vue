<template>
  <v-app>
    <v-content>
<!--        <Header/>-->
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
//import Menu from './views/Menu';

// import Header from "@/views/Header";

export default {
  name: 'App',
  components: {
      // Header
    //Menu,
    //HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
