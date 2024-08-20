import { ThunkAction } from "redux-thunk"
import { RootState } from "./store"
import { ContactDto } from "src/types/dto/ContactDto"
import { GroupContactsDto } from "src/types/dto/GroupContactsDto"

export const GET_DATA_CONTACTS_ACTION = 'GET_DATA_CONTACTS_ACTION'
export const GET_DATA_GROUPS_ACTION = 'GET_DATA_GROUPS_ACTION'


interface GetContactsActionCreator{
    type:typeof GET_DATA_CONTACTS_ACTION
    payload:{data:ContactDto[]}
}
interface GetGroupsActionCreator{
    type:typeof GET_DATA_GROUPS_ACTION
    payload:{data:GroupContactsDto[]}
}

const getContactsActionCreator = (data:ContactDto[]):GetContactsActionCreator=>{
    return {type:GET_DATA_CONTACTS_ACTION,payload:{data}}
}
const getGroupsActionCreator = (data:GroupContactsDto[]):GetGroupsActionCreator=>{
    return {type:GET_DATA_GROUPS_ACTION,payload:{data}}
}

export function asyncGetContactsAction():ThunkAction<void,RootState,void,ProjectActions>{
    return async (dispatch)=>{
       const res = await fetch('/contacts')        
       const contacts = await res.json()
       if(contacts){
        dispatch(getContactsActionCreator(contacts))
       }
    }
}
export function asyncGetGroupsAction():ThunkAction<void,RootState,void,ProjectActions>{
    return async (dispatch)=>{
       const res = await fetch('/grroups')      
       const groups = await res.json()
       if(groups){
        dispatch(getGroupsActionCreator(groups))
       }
    }
}

export type ProjectActions = 
    | GetContactsActionCreator
    | GetGroupsActionCreator