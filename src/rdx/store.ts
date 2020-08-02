import { createStore, Store } from "redux";
import StoreReducer from "./reducer";
import { StoreData, StoreAction } from "../data/types";


const store: Store<StoreData, StoreAction> = createStore(
  StoreReducer
);


export default store