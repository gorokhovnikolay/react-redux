import { createSlice } from "@reduxjs/toolkit";
import { asyncGetContactsApi } from "./api";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

const initialState = [] as ContactDto[]


export const contactsSlice = createSlice({
    name:'contacts',
    initialState,
    reducers:{
        filterContactsReducer:(_,action) => {
            let findContacts: ContactDto[] = action.payload.dataContacts
            if (action.payload.fv.name) {
              const fvName = action.payload.fv.name.toLowerCase();
              findContacts = findContacts.filter(
                ({ name }) => name.toLowerCase().indexOf(fvName) > -1
              );
            }
        
            if (action.payload.fv.groupId) {
              const groupContacts = action.payload.groupContactsState.find(
                (item:GroupContactsDto) => item.id === action.payload.fv.groupId
              );
        
              if (groupContacts) {
                findContacts = findContacts.filter(({ id }) =>
                  groupContacts.contactIds.includes(id)
                );
              }
            }
            return findContacts
          }
    },
    extraReducers:builder=>{
        builder.addMatcher(asyncGetContactsApi.endpoints.getContacts.matchFulfilled,(_,action)=>{
            return action.payload
        })
    }
})

