import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";

const initialState = {} as ContactDto

export const currentContactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
        currentContact:(_,action:PayloadAction<{contactId:string,contacts:ContactDto[]}>)=>{
            return action.payload.contacts.find(({ id }: { id: ContactDto["id"] }) => id === action.payload.contactId)
        }
    }
})