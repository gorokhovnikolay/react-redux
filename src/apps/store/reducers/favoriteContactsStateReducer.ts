import { DATA_CONTACT } from "src/__data__";
import {  ProjectActions } from "../actions";

const initialState = [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id,
  ]


export const favoriteContactsState = (state=initialState,action:ProjectActions)=>{
    switch (action.type) {
    
        default:
            return state;
    }
}
