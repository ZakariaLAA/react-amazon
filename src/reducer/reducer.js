export const initialState = {
  basket: [],
  notification: [],
  flag: false,
};

export const actionContext = {};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "NOTIFICATION":
      return {
        ...state,
        notification: [...state.notification, action.not],
      };
    case "CHANGE__NOT":
      let notf = [...state.notification];

      notf.shift();

      return {
        ...state,
        notification: notf,
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("can't remove product");
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
