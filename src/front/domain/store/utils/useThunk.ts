import { useDispatch } from 'redux-react-hook'

type Action = (...values: any[]) => any

export const useThunk = (action: Action) => {
  const dispatch = useDispatch()
  return (...values: any[]) => dispatch(action(...values))
}
