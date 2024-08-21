import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const initialState = [] as GroupContactsDto[]

export const asyncGetGroupsApi = createApi({
    reducerPath: 'asyncGetGroups',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3008'}),
    endpoints:(builder)=>({getGroups:builder.mutation<GroupContactsDto[],void>({
        query:()=>({url:'/grroups'})
    })})
})

export const groupContactsStateSlice = createSlice({
    name:'group',
    initialState,
    reducers:{
        groupContactsStateReducer:(state,action)=>{
            return action.payload.data
        }
    },
    extraReducers:(builder)=>{
        builder.addMatcher(asyncGetGroupsApi.endpoints.getGroups.matchFulfilled,(state,action)=>{
            return action.payload
        })
    }

})

export const {groupContactsStateReducer} = groupContactsStateSlice.actions
export const {useGetGroupsMutation} = asyncGetGroupsApi