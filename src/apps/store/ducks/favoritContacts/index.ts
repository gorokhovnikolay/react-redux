import {favoritContactsSlice} from './slice'
import {favoriteContactsApi} from './api'

export const favoritContactsReducer = favoritContactsSlice.reducer
export const favoritContactsName = favoritContactsSlice.name
export const {getFavoritContacts} = favoritContactsSlice.actions

export const favoriteContactsApiReducer =favoriteContactsApi.reducer
export const favoriteContactsApiName =favoriteContactsApi.reducerPath
export const favoriteContactsApiMiddleware =favoriteContactsApi.middleware
export const {useGetFavoriteContactsQuery} =favoriteContactsApi