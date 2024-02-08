import { configureStore } from "@reduxjs/toolkit";
import dairyReducer from "./Dairy/dairySlice";
import homeExpenseReducer from "./HomeExpenses/homeExpenseSlice";
import vermicompostReducer from "./vermicompost/vermicompostSlice";


export default configureStore({
    reducer:{
        dairy:dairyReducer,
        homeExpense: homeExpenseReducer,
        vermicompost:vermicompostReducer,
    }
})