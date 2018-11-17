export default {
  namespace: "navigator",

  state: {
    login: false,
    userType: "",
    loginShow: true,
    registrationShow: false,
    profileShow: false,
    userTableShow: false,
    sellerItemShow: false,
    sellerAddItemShow: false,
    sellerEditItemShow: false,
    sellerOrderShow: false,
    sellerUpdateOrderShow: false,
    buyerItemShow: false,
    buyerCartShow: false,
    buyerCheckoutShow: false,
    buyerOrderShow: false
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
    logout(state) {
      return {
        ...state,
        ...{
          login: false,
          landingShow: true
        }
      };
    },
    clear(state) {
      return {
        ...state,
        ...{
          loginShow: true,
          registrationShow: false,
          profileShow: false,
          userTableShow: false,
          sellerItemShow: false,
          sellerAddItemShow: false,
          sellerEditItemShow: false,
          sellerOrderShow: false,
          sellerUpdateOrderShow: false,
          buyerItemShow: false,
          buyerCartShow: false,
          buyerCheckoutShow: false,
          buyerOrderShow: false
        }
      };
    }
  }
};
