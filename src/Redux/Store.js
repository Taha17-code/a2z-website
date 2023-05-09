import {legacy_createStore as createStore,applyMiddleware} from 'redux'
// to insert a Middleware in between which would help to handle async operations.
import thunk from 'redux-thunk'
import rootReducer from'./Reducer/rootReducer'

import {composeWithDevTools} from 'redux-devtools-extension'


const initialState={}
const middleware=[thunk]


 const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

 export default store