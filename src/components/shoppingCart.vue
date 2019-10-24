<template>
  <v-navigation-drawer absolute permanent right>
    <v-card>
      <v-list dense>
        <v-list-item v-for="(item,i) in itemList" :key="i">
          <v-list-item-content>
            <v-list-item-title>{{item.productName}}</v-list-item-title>
            <v-list-item-subtitle>{{item.price}}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon @click="removeItem(item)" color="red darken-4">mdi-close-circle</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Total:</v-list-item-title>
            <v-list-item-subtitle>${{Math.abs(totalPrice).toFixed(2)}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-btn>Checkout</v-btn>
          <v-btn>Clear</v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("shoppingCart");
export default {
  name: "shopping-cart",
  computed: {
    ...mapGetters(["itemList", "totalPrice"])
  },
  methods: {
    ...mapActions(["removeItem"])
  }
};
</script>

<style>
</style>