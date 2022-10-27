import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cart/cartSlice";
import productsReducer from "../reducers/products/productsSlice";
import modalReducer from "../reducers/modalSlice";

export const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
  modal: modalReducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
