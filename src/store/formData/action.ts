import { action } from 'typesafe-actions'
import {  DataActionTypes,IDataState } from './type'
  
export const fetchRequest = () => action(DataActionTypes.FETCH_REQUEST)
export const fetchSuccess = (data:IDataState[]) => action(DataActionTypes.FETCH_SUCCESS,data)
export const addData = (data:any) => action(DataActionTypes.ADD_DATA,data)
export const fetchError = (msg:string) => action(DataActionTypes.FETCH_ERROR,msg)

    
