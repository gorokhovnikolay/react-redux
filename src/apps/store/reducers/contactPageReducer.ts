import { createSlice } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";

const initialState = {} as ContactDto

export const contactPageSlice = createSlice({
    name:'contactPage',
    initialState,
    reducers:{
        contactPageReducer:(state,action)=>{
            const contact = action.payload.contactsState.find((item:ContactDto) => item.id === action.payload.contactId)
            return contact
        }
        
    }
})

export const {contactPageReducer} = contactPageSlice.actions