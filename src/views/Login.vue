<template>
  <v-card raised width="400" class="mx-auto mt-5">
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="loginUser">
        <v-text-field type="email" required prepend-icon="mdi-mail" v-model="email" label="Email"></v-text-field>
        <v-text-field type="password" prepend-icon="mdi-lock" v-model="password" label="Password"></v-text-field>
        <v-card-actions>
          <v-btn type="submit" color="info">Login</v-btn>
          <v-spacer></v-spacer>
          <v-btn link to="/register" color="success">Register</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async loginUser() {
      const email = this.email;
      const password = this.password;
      try {
        await this.$store.dispatch("loginUser", { email, password });
        this.$router.push("/");
        console.log("made it");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
</style>