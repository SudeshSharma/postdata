import {call,put, takeEvery,fork,all} from 'redux-saga/effects';
import { DataActionTypes } from './type'
import axios from 'axios'
import { fetchError,addData,fetchSuccess } from './action';
import callApi from '../../utils/callApi';
console.log("saga part")

const API_ENDPOINT = 'http://localhost:4000/formData'
//FetchData

function* fetchData(){
    try{
      console.log("Saga Part")
      const res = yield call(axios.get,API_ENDPOINT)
      console.log("Saga Response",res)
      // const data = yield res.json();
      // console.log("data",data)
      yield put(fetchSuccess(res.data)) 
      
    }catch(error){
      yield put(fetchError(error));
    }
  }
  
  export function* watchFetchData(){
    yield takeEvery(DataActionTypes.FETCH_REQUEST,fetchData);
  }





//post Data
export function*  formAdd(action:any){
    try{
        console.log("inside try catch block")
        const result = yield call(callApi,'post','http://localhost:4000','/formData',action.payload)
        console.log("saga result after api fetch",result)
        yield put(addData(result)) 
    } catch(error) {
        yield put(fetchError(error))
        
    }
}
export  function* watchFormSaga(){
    yield takeEvery(DataActionTypes.ADD_DATA,formAdd)
}

function* formSaga(){
    yield all([fork(watchFormSaga),fork(watchFetchData)])
}

export default formSaga