<template>
  <v-app-bar app>
    <v-toolbar-title>
      <v-btn outlined link to="/">Grocery Store</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn outlined link to="/login">Login</v-btn>
    <v-btn outlined link to="/register">Register</v-btn>
    <v-btn outlined link to="/stores">Stores</v-btn>
    <v-btn outlined link to="/products">products</v-btn>
    <v-btn outlined @click="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "app-header",
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>