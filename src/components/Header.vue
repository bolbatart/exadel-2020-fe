<template>
  <div>
    <v-app-bar color="white" dense>
      
      <v-toolbar-title style="margin-left:10%; margin-right:5%;">Team searching</v-toolbar-title>

      <router-link to="/"><v-btn class="white black--text" depressed small> Home </v-btn></router-link>
      <v-btn class="white black--text" depressed small> Projects </v-btn>
      <v-btn class="white black--text" depressed small> Post a project </v-btn>
      <v-spacer></v-spacer>

      <SignInDialog v-if="!$store.state.user.login.isAuthenticated"></SignInDialog>
      

      <v-divider
        inset
        vertical
        v-if="!$store.state.user.login.isAuthenticated"
      ></v-divider>

      <SignUpDialog v-if="!$store.state.user.login.isAuthenticated"></SignUpDialog>
      
      <v-btn class="white black--text" @click="Logout()" depressed small v-if="$store.state.user.login.isAuthenticated" > Logout </v-btn>
      

    </v-app-bar>
  </div>
</template>

<script>
import SignInDialog from '../components/SignIn';
import SignUpDialog from '../components/SignUp';

export default {
  components: {
    SignInDialog,
    SignUpDialog,
  },

  data () {
    return {
    }
  },
  methods: {
    Logout() {
      this.$store.dispatch('LOGOUT')
        .then(res => {
          this.$router.push({ name: 'home' })
        })
    }
  }

}
</script>

<style>
a {  
  text-decoration: none;
  }
</style>