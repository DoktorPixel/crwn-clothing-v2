import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';

// old code:
// const selectCartReducer = (state): CartState => state.cart;

//const selectCartReducer = (state:CartState): CartState => state

const selectCartReducer = (state:CartState): CartState => ({
  ...state,
  cartItems: state.cartItems
});

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
