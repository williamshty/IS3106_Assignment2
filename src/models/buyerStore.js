export default {
  namespace: "buyerStore",

  state: {
    buyerID: "",
    buyerEntity: {},
    itemList: [],
    prevOrderList: [],
    cart: [],
    currentOrder: {
      id: 0,
      itemId: 0,
      rating: "",
      review: "",
      status: ""
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    recoverCart(state) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart !== null) {
        return { ...state, ...{ cart: cart } };
      } else return state;
    },
    clear(state) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return {
        ...state,
        ...{
          buyerID: "",
          buyerEntity: {},
          itemList: [],
          prevOrderList: [],
          cart: []
        }
      };
    }
  }
};
