import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { createApi } from '../api/createApi'

import { reducer } from './reducer'

export const initializeStore = () =>
  createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(createApi))),
  )
