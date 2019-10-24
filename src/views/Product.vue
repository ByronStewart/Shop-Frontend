<template>
  <v-container>
    <v-card width="600">
      <v-img :src="product.thumbnail" width="300" height="300"></v-img>
      <v-card-title>{{product.productName}}</v-card-title>
      <v-card-text>
        <p>{{product.description}}</p>
        <p>${{product.price.toFixed(2)}}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn>Visit Store</v-btn>
        <v-btn @click="addToCart">Add to cart</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      product: ""
    };
  },
  name: "product",
  async created() {
    try {
      const res = await this.$axios.get(
        "http://localhost:5000/api/v1/auth/product",
        {
          params: { id: this.$route.params.id }
        }
      );

      this.product = res.data.product;
    } catch (err) {
      console.log(err.response);
    }
  },
  watch: {
    $route(to, from) {
      //change the id and so on
    }
  },
  methods: {
    next() {
      const nextPage = parseInt(this.$route.params.id) + 1;
      this.$router.push(`/product/${nextPage}`);
    },
    addToCart() {
      this.$store.dispatch("shoppingCart/addItem", this.product);
    }
  }
};
</script>

<style>
</style>