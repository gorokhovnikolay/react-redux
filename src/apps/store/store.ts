import {combineReducers, Middleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { asyncGetContactsApi, asyncGetGroupsApi, contactsListPageSlice, favoriteContactsSlice,groupContactsStateSlice } from './reducers'
import { contactPageSlice } from './reducers/contactPageReducer'
import { groupPageSlice } from './reducers/groupPageReducer'
import { contactsListByGroupSlice } from './reducers/contactsListByGroupReducer'


const reducers = combineReducers({
contacts:contactsListPageSlice.reducer,
contact: contactPageSlice.reducer,
favorite:favoriteContactsSlice.reducer,
groups:groupContactsStateSlice.reducer,
group:groupPageSlice.reducer,
groupContacts:contactsListByGroupSlice.reducer,
[asyncGetContactsApi.reducerPath]:asyncGetContactsApi.reducer,
[asyncGetGroupsApi.reducerPath]:asyncGetGroupsApi.reducer
})

export const logActionMiddleware:Middleware<{},RootState> = (storeAPI)=>{
  return function wrapDispatch(next){
      return function handleAction(action){
          console.log(action)
          next(action)
      }
  }
}


export const store = configureStore({
  reducer:reducers,
  devTools:true,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    asyncGetGroupsApi.middleware,
    asyncGetContactsApi.middleware,
    logActionMiddleware])
}
)

export type RootState = ReturnType<typeof reducers>