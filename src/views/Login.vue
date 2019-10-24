<template>
  <v-card raised width="400" class="mx-auto mt-5">
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="loginUser">
        <v-text-field
          ref="email"
          type="email"
          required
          prepend-icon="mdi-mail"
          v-model="email"
          label="Email"
        ></v-text-field>
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
  mounted() {
    this.$refs.email.focus();
  },
  methods: {
    async loginUser() {
      let email = this.email;
      let password = this.password;
      try {
        await this.$store.dispatch("login", { email, password });
        this.$router.push("/products");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
</style>