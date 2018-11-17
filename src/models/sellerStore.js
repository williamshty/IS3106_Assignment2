export default {
  namespace: "sellerStore",

  state: {
    sellerID: 201,
    sellerEntity: {
      id: 201,
      username: "TY",
      password: null,
      gender: 1,
      name: "STYSTYHELLO",
      status: true,
      saleOrders: null,
      items: null,
      orders: null
    },
    currentItem: {
      id: "",
      name: "",
      description: "",
      category: "",
      price: 0,
      quantity: 0
    },
    itemList: [],
    orderList: [],
    currentOrder: {
      id: "",
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
    clear(state) {
      return {
        ...state,
        ...{
          sellerID: 0,
          sellerEntity: {},
          currentItem: {
            id: "",
            name: "",
            description: "",
            category: "",
            price: 0,
            quantity: 0
          },
          itemList: [],
          orderList: [],
          currentOrder: {
            id: "",
            status: ""
          }
        }
      };
    }
  }
};
