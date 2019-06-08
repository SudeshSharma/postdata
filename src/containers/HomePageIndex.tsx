import React from 'react'
import HomePage from '../components/HomePage';
import { connect } from 'react-redux';
import { addData,fetchRequest } from '../store/formData/action'
import { Dispatch } from 'redux';
import { IApplicationState } from '../store';
import { IDataPost } from '../store/formData/type'

interface IPropsFromState {
    loading: boolean
    data: IDataPost[]
    errors: string | undefined
}

interface IPropsFromDispatch{
    addData: typeof addData,
    fetchRequest: typeof fetchRequest
}

export type AllProps = IPropsFromState & IPropsFromDispatch

class HomePageIndex extends React.Component<AllProps>{
    public render(){
        return(
        <HomePage 
                loading={this.props.loading}
                data={this.props.data}
                errors={this.props.errors}
                fetchRequest={this.props.fetchRequest}
                addData={this.props.addData}/>)
    }

}


 export function mapStateToProps ( {formData} : IApplicationState) : IPropsFromState {
    
     return{
         loading:formData.loading,
         data:formData.data,
         errors:formData.errors
     }
 }
export function mapDispatchToProps(dispatch:Dispatch):IPropsFromDispatch{
    
    return{
        fetchRequest: () => dispatch(fetchRequest()),
        addData: (data) => dispatch(addData(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePageIndex)