<template>
  <v-container>
    <v-data-iterator
      :items="stores"
      :items-per-page.sync="storesPerPage"
      :footer-props="{ itemsPerPageOptions }"
      :page="page"
      :search="search"
    >
      <template v-slot:header>
        <v-toolbar class="mb-2">
          <v-text-field v-model="search" clearable flat hide-details label="Search"></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:default="props">
        <v-expansion-panels accordion focusable>
          <v-expansion-panel v-for="item in props.items" :key="item.id">
            <v-expansion-panel-header class="py-0 px-2">
              <v-row align="center" justify="space-between">
                <v-col class="py-0">
                  <v-img @click="gotoStorePage(item.id)" height="80" width="80" :src="item.logo"></v-img>
                </v-col>
                <v-col style="flex-grow: 3;">
                  <h3>{{item.storeName}}</h3>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="mt-4">{{item.description}}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: "secure",
  data() {
    return {
      stores: [],
      storesPerPage: 5,
      itemsPerPageOptions: [5, 10, 20, 50, 100],
      search: "",
      page: 1
    };
  },
  async created() {
    try {
      const res = await this.$axios.get(
        "http://localhost:5000/api/v1/auth/stores"
      );
      this.stores = res.data.stores;
    } catch (err) {
      console.log(err.response);
    }
  },
  methods: {
    gotoStorePage(id) {
      this.$router.push(`/store/${id}`);
    }
  }
};
</script>

<style>
</style>