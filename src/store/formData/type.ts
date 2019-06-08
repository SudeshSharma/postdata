export interface IDataPost extends ApiResponse{
    customerName: string,
    email: string,
    comEmail: string,
    msg:string
}
export type ApiResponse = Record<string,any>

export enum DataActionTypes {
    FETCH_REQUEST = '@@formData/FETCH_REQUEST',
    FETCH_SUCCESS = '@@formData/FETCH_SUCCESS',
    FETCH_ERROR = '@@formData/FETCH_ERROR',
    ADD_DATA = '@@formData/ADD_DATA'
}

export interface IDataState{
    readonly loading: boolean,
    readonly data: IDataPost[],
    readonly errors?: string
}


// export const FETCH_REQUEST = '@@INIT/FETCH_REQUEST';
// export const FETCH_SUCCESS = '@@INIT/FETCH_SUCCESS';
// export const FETCH_ERROR = '@@INIT/FETCH_ERROR';
// export const ADD_DATA = '@@INIT/ADD_DATA';

