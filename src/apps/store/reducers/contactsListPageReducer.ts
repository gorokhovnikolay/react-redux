import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { createSlice  } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

const initialState = [] as ContactDto[]



export const asyncGetContactsApi = createApi({
    reducerPath:'asyncGetContactsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3008'}),
    endpoints:(builder)=>{
        return {getContacts:builder.query<ContactDto[],void>({
            query:()=>({url:'/contacts'})
        }),getContactsMut:builder.mutation<ContactDto[],string>({
            query:()=>({url:'/contacts'})
        })} 
    }
})


export const contactsListPageSlice = createSlice({
    name:'contacts',
    initialState,
    reducers:{
        contactsStateReducer : (state,action)=>{
            return action.payload.data
        },
        filterContactsReducer:(state,action) => {
            let findContacts: ContactDto[] = state
        
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
    extraReducers:(builder)=>{
        builder.addMatcher(asyncGetContactsApi.endpoints.getContactsMut.matchFulfilled,(state,action)=>{
            return action.payload
        })
    }
})

export const {contactsStateReducer,filterContactsReducer} = contactsListPageSlice.actions



export const {useGetContactsQuery,useGetContactsMutMutation} = asyncGetContactsApi