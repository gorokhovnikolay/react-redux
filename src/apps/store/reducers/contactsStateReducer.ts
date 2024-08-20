import {GET_DATA_CONTACTS_ACTION, ProjectActions } from "../actions";
import { ContactDto } from "src/types/dto/ContactDto";

const initialState = [] as ContactDto[]

export const contactsStateReducer = (state=initialState,action:ProjectActions)=>{
    switch (action.type) {
        case GET_DATA_CONTACTS_ACTION:
            return action.payload.data
    
        default:
            return state;
    }
}