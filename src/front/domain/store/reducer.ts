import { combineReducers } from 'redux'

import { State } from './State'

export const reducer = combineReducers<State>({
  test: (a = '') => a,
})
