import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {asyncGetContactsMiddleware, asyncGetContactsPath, asyncGetContactsReducer, contactReducer,contactReducerName} from './ducks/contacts'
import { groupsReducer, groupsReducerPath,groupsMiddleware } from './ducks/groups'
import { groupReducer, groupReducerName } from './ducks/currentGroup'
import { currentContactName, currentContactReducer } from './ducks/currentContact'
import { 
  favoritContactsName, 
  favoritContactsReducer,
  favoriteContactsApiMiddleware,
  favoriteContactsApiName,
  favoriteContactsApiReducer 
} from './ducks/favoritContacts'



const reducers = combineReducers({
  [contactReducerName]:contactReducer,
  [groupReducerName]:groupReducer,
  [currentContactName]:currentContactReducer,
  [favoritContactsName]:favoritContactsReducer,
  [groupsReducerPath]:groupsReducer,
  [favoriteContactsApiName]:favoriteContactsApiReducer,
  [asyncGetContactsPath]:asyncGetContactsReducer
})




export const store = configureStore({
  reducer:reducers,
  devTools:true,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    groupsMiddleware,
    favoriteContactsApiMiddleware,
    asyncGetContactsMiddleware
  ])
}
)

export type RootState = ReturnType<typeof reducers>