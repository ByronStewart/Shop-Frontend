const shoppingCart = {
  namespaced: true,
  state: {
    items: [],
    totalPrice: 0,
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
      state.totalPrice += item.price;
    },
    removeItem(state, item) {
      state.items = state.items.filter((x) => x !== item);
      state.totalPrice -= item.price;
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit('addItem', item);
    },
    removeItem({ commit }, item) {
      commit('removeItem', item);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
  },
  getters: {
    itemList: (state) => state.items,
    totalPrice: (state) => state.totalPrice,
  },
};
export default shoppingCart;
