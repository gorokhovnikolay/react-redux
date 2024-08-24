import { asyncGetContactsApi } from './api'
import {contactsSlice} from './slice'

export const contactReducer = contactsSlice.reducer
export const {filterContactsReducer} = contactsSlice.actions
export const contactReducerName = contactsSlice.name

export const asyncGetContactsReducer = asyncGetContactsApi.reducer
export const asyncGetContactsPath  = asyncGetContactsApi.reducerPath
export const asyncGetContactsMiddleware  = asyncGetContactsApi.middleware
export const {useGetContactsQuery} = asyncGetContactsApi




