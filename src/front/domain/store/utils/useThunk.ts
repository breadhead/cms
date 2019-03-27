import { useDispatch } from 'redux-react-hook'

type Action = <T extends any[], R>(...values: T) => R

export const useThunk = <T extends any[], R>(action: Action) => {
  const dispatch = useDispatch()
  return (...values: T): R => dispatch(action(...values))
}
