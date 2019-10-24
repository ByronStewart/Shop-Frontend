<template>
  <v-card raised width="400" class="mx-auto mt-5">
    <v-card-title>Register</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="registerUser">
        <v-text-field
          ref="username"
          prepend-icon="mdi-account-circle"
          v-model="username"
          label="Username"
        ></v-text-field>
        <v-text-field type="email" prepend-icon="mdi-mail" v-model="email" label="Email"></v-text-field>
        <v-text-field type="password" prepend-icon="mdi-lock" v-model="password" label="Password"></v-text-field>
        <v-card-actions>
          <v-btn type="submit" color="info">Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn link to="/login" color="success">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "register-page",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  mounted() {
    this.$refs.username.focus();
  },
  methods: {
    async registerUser() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      try {
        const response = await this.$store.dispatch("register", data);
        this.$router.push("/login");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
</style>