import { createSlice } from "@reduxjs/toolkit";

const dairySlice = createSlice({
    name:"dairy",
    initialState:[{
        totalVitaAmountRecieved:0
    }],
    reducers:{
        VitaAmountRecieved(state, action) {
            
            state[0].totalVitaAmountRecieved=action.payload
              
          },
    }
})
export const {VitaAmountRecieved} = dairySlice.actions
export default dairySlice.reducer;