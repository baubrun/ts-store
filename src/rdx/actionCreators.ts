import {
  ACTIONS,
  AddProductsAction,
  ModifyOrderAction,
  ResetOrderAction,
} from "../data/types";
import { Product } from "../data/entities";

export const addProduct = (...products: Product[]): AddProductsAction => ({
  type: ACTIONS.ADD_PRODUCTS,
  payload: products,
});

export const modifyOrder = (
  product: Product,
  qty: number
): ModifyOrderAction => ({
  type: ACTIONS.MODIFY_ORDER,
  payload: { product, qty },
});

export const resetOrder = (): ResetOrderAction => ({
  type: ACTIONS.RESET_ORDER,
});
