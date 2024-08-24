import { createSlice } from "@reduxjs/toolkit";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";


const initialState ={} as GroupContactsDto

export const contactSlice = createSlice({
    name:'group',
    initialState,
    reducers:{},
})

