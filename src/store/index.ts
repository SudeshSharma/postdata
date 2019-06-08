import { combineReducers, Action, Dispatch, AnyAction } from 'redux'
import { all, fork } from 'redux-saga/effects'
import formReducer from './formData/reducer'
import formSaga from './formData/saga'
import { IDataState } from './formData/type'

export interface IApplicationState {
  formData: IDataState
 
}
export interface IConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}
export const rootReducer = combineReducers<IApplicationState>({
    formData: formReducer
  })


  export default function* rootSaga() {
    yield all([fork(formSaga)])
  }