<template>
  <v-app-bar app>
    <v-toolbar-title>
      <v-btn outlined link to="/">Grocery Store</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn outlined link to="/login">Login</v-btn>
    <v-btn outlined link to="/register">Register</v-btn>
    <v-btn outlined>Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style>
</style>