import { legacy_createStore } from "redux";
import { delReducer } from "./reducer";






export const store=legacy_createStore(delReducer);