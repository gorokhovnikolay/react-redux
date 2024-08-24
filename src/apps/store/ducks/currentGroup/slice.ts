import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

const initialState = {} as GroupContactsDto

export const groupSlice = createSlice({
    name:'group',
    initialState,
    reducers:{
        curentGroup:(_,action:PayloadAction<{groups:GroupContactsDto[],groupId:string}>)=>{
            return action.payload.groups.find(({ id }: { id: GroupContactsDto["id"] }) => id === action.payload.groupId)
        }
    }
})

