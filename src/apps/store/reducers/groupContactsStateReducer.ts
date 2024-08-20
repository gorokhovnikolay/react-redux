import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import {GET_DATA_GROUPS_ACTION, ProjectActions } from "../actions";


const initialState = [] as GroupContactsDto[]

export const groupContactsStateReducer = (state=initialState,action:ProjectActions)=>{
    switch (action.type) {
        case GET_DATA_GROUPS_ACTION:
            return action.payload.data
    
        default:
            return state;
    }
}