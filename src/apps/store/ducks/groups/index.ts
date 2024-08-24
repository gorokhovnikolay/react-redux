import {groupsApi} from './api'


export const groupsReducerPath = groupsApi.reducerPath
export const groupsMiddleware = groupsApi.middleware
export const groupsReducer = groupsApi.reducer
export const {useGetGroupsQuery} = groupsApi