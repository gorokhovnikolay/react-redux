import {currentContactSlice} from './slice'

export const currentContactReducer = currentContactSlice.reducer
export const currentContactName = currentContactSlice.name
export const {currentContact} = currentContactSlice.actions