import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'

export const favoriteContactsApi = createApi({
    reducerPath:'favoriteApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3008'}),
    endpoints:(builder)=>({
        getFavoriteContacts:builder.query<FavoriteContactsDto,void>({
            query:()=>({url:'/favorite'})
        })
    })
})
