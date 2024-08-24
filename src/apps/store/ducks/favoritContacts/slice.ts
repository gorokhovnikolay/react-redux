import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

const initialState = [] as ContactDto[]

export const favoritContactsSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        getFavoritContacts: (_,action:PayloadAction<{contactsState:ContactDto[],favoriteContactsState:FavoriteContactsDto}>)=>{
            const {contactsState,favoriteContactsState} = action.payload
            return contactsState.filter(({id})=>favoriteContactsState.filter(item=>item.id.includes(id)).length > 0)

        }
    }
})