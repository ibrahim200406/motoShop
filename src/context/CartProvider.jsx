import { createContext, useReducer } from "react";

export const CartContext = createContext();
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      var existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      var updatedItmes = [...state.items];

      if (existingCartItemIndex !== -1) {
        updatedItmes[existingCartItemIndex] = {
          ...state.items[existingCartItemIndex],
          amount:
            state.items[existingCartItemIndex].amount + action.item.amount,
        };
      } else {
        updatedItmes = [...state.items, action.item];
      }

      return {
        items: updatedItmes,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    case "REMOVE":
      var filteredItems = state.items.filter((item) => item.id !== action.id);
      var itemToRemove = state.items.find((item) => item.id === action.id);
      return {
        items: filteredItems,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.amount,
      };
  }
};
const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCartState({ type: "ADD", item });
    },
    removeItem: (id) => {
      dispatchCartState({ type: "REMOVE", id });
    },
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export { CartProvider };
