import { createSlice } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";

const initialState = [] as ContactDto[]

export const contactsListByGroupSlice = createSlice({
    name:'contactsListByGroup',
    initialState,
    reducers:{
        contactsListByGroupReducer:(state,action)=>{
            return action.payload.contactsState.filter((item:ContactDto) =>
                action.payload.groupContacts.contactIds.includes(item.id))
        }
    }
})

export const {contactsListByGroupReducer} = contactsListByGroupSlice.actions