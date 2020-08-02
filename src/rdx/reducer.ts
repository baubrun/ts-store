import { ACTIONS, StoreData, StoreAction } from "../data/types";
import { Order } from "../data/entities";
import { Reducer } from "redux";

const StoreReducer: Reducer<StoreData, StoreAction> = (
  data: StoreData | undefined,
  action
) => {
  data = data || { order: new Order(), products: [] };
  switch (action.type) {
      
    case ACTIONS.ADD_PRODUCTS:
      return {
        ...data,
        products: [...data.products, ...action.payload],
      };

    case ACTIONS.MODIFY_ORDER:
      data.order.addProduct(action.payload.product, action.payload.qty);
      return { ...data };

    case ACTIONS.RESET_ORDER:
      return {
        ...data,
        order: new Order(),
      };
    default:
      return data;
  }
};

export default StoreReducer;
