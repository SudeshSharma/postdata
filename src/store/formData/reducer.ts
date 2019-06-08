import { Reducer } from 'redux'
import { DataActionTypes, IDataState }  from './type'


 export const initialState:IDataState = {
     data: [],
     errors: undefined,
     loading: false
 }

const reducer: Reducer<IDataState> = (state= initialState,action) => {
  
    switch (action.type){
        case DataActionTypes.FETCH_REQUEST:{
            return{
            ...state,isLoading:true
            }
        }
        case DataActionTypes.FETCH_SUCCESS:{
            return{
            ...state,isLoading:false,data:action.payload
            }
        }
        case DataActionTypes.ADD_DATA:{
        return{
            ...state,isLoading:false,data:action.payload
            }
        }
        case DataActionTypes.FETCH_ERROR:{
            return{
            ...state,isLoading:false,error:action.payload
            }
        }
        default:{
            return state;
        }
    }
}

const formReducer=reducer
export default formReducer