import { legacy_createStore } from "redux";
import { delReducer } from "./reducer";






export const store=legacy_createStore(delReducer);

console.log(store.getState());
store.subscribe(()=>{
    console.log('store is updtated',store.getState());
})