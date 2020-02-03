<template>
  <v-app>
    <div>
      <MyHeader />
      <router-view />
      <MyFooter />
    </div>
  </v-app>
</template>

<script>
import MyHeader from './components/Header';
import MyFooter from './components/Footer';


export default {
  name: 'App',

  components: {
    MyHeader,
    MyFooter,
  },

  data: () => ({
    //
  }),
};
</script>
