import { DATA_CONTACT } from "src/__data__";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id,
  ]



export const favoriteContactsSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        favoriteContactsState:()=>{
            return initialState
        }
    }
})

export const {favoriteContactsState} = favoriteContactsSlice.actions