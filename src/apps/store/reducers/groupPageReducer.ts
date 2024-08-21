import { createSlice } from "@reduxjs/toolkit";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

const initialState ={} as GroupContactsDto

export const groupPageSlice = createSlice({
    name:'groupPage',
    initialState,
    reducers:{
        groupPageReducer:(state,action)=>{
            const group = action.payload.groupContactsState.find((item:GroupContactsDto) => item.id === action.payload.groupId);
            return group
        }
    }
})

export const {groupPageReducer} = groupPageSlice.actions