export const initialState = {
  cart: [],
};
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_To_Cart":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "Remove_From_Cart":
      // eslint-disable-next-line no-case-declarations
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      // eslint-disable-next-line no-case-declarations
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index,1);
      } else {
        console.warn(
          `Cant remove product (id :${action.id}) as its not in the cart`
        );
      }
      return{
        ...state,
        cart: newCart,
      }

    default:
      return state;
  }
};
export default reducer;
