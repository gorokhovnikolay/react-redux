import { composeWithDevTools } from '@redux-devtools/extension'
import {applyMiddleware, combineReducers,createStore} from 'redux'
import { contactsStateReducer, favoriteContactsState } from './reducers'
import {groupContactsStateReducer} from './reducers/groupContactsStateReducer'
import {thunk} from 'redux-thunk'



const reducers = combineReducers({
contact:contactsStateReducer,
favorite:favoriteContactsState,
group:groupContactsStateReducer,
})

export const store = createStore(
    reducers,
    undefined,
    composeWithDevTools(
        applyMiddleware(thunk),
      ),
)

export type RootState = ReturnType<typeof reducers>