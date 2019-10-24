<template>
  <v-container>
    <v-data-iterator
      :items="products"
      :items-per-page.sync="productsPerPage"
      :footer-props="{ itemsPerPageOptions }"
      :page="page"
      :search="search"
    >
      <template v-slot:header>
        <v-toolbar class="mb-2">
          <v-text-field ref="search" v-model="search" clearable flat hide-details label="Search"></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:default="props">
        <v-expansion-panels accordion focusable>
          <v-expansion-panel v-for="(item, i) in props.items" :key="i">
            <v-expansion-panel-header class="py-0 px-2">
              <v-row align="center" justify="space-between">
                <v-col class="py-0">
                  <v-img
                    @click="gotoProductDetails(item.id)"
                    height="80"
                    width="80"
                    :src="item.thumbnail"
                  ></v-img>
                </v-col>
                <v-col style="flex-grow: 3;">
                  <h3>{{item.productName}}</h3>
                </v-col>
                <v-col>
                  <v-row no-gutters>
                    <p>${{item.price.toFixed(2)}}</p>
                  </v-row>
                  <v-row>
                    <v-btn style="z-index: 1;" @click="addItemToCart(i)">Add to cart</v-btn>
                  </v-row>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="pt-4">{{item.description}}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
export default {
  name: "products",
  data() {
    return {
      products: [],
      productsPerPage: 5,
      itemsPerPageOptions: [5, 10, 20, 50, 100],
      search: "",
      page: 1
    };
  },
  mounted() {
    this.$refs.search.focus();
  },
  async created() {
    try {
      const response = await this.$axios.get(
        "http://localhost:5000/api/v1/auth/products"
      );
      this.products = response.data.products;
    } catch (err) {
      console.log(err.response);
    }
  },
  methods: {
    gotoProductDetails(id) {
      this.$router.push(`/product/${id}`);
    },
    addItemToCart(index) {
      console.log("clicked");
      this.$store.dispatch("shoppingCart/addItem", this.products[index]);
    }
  }
};
</script>

<style>
</style>