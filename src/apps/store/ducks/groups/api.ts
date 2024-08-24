import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const groupsApi = createApi({
    reducerPath:'groups',
    baseQuery:fetchBaseQuery({baseUrl:'https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc'}),
    endpoints:(builder)=>({
        getGroups:builder.query<GroupContactsDto[],void>({
        query:()=>({url:'/0/h/f1e98b0d70d16a909818b03b72415733.json'})
    }),
        })
})
