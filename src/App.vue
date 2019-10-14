<template>
  <v-app>
    <Header></Header>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./layouts/Header.vue";
import { verify } from "crypto";

export default {
  name: "App",
  components: {
    Header
  },
  data: () => ({
    //
  }),
  created() {
    this.$axios.interceptors.response.use(undefined, err => {
      return new Promise((resolve, reject) => {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });
    const token = localStorage.getItem("token");
    if (token) {
      this.$store.dispatch("verifyToken");
    }
  }
};
</script>
