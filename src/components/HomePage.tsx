import * as React from 'react'
import {Button,TextField,Card,CardContent} from '@material-ui/core'
import { IDataState } from '../store/formData/type';
//import {addData} from '../store/action'
interface IState{
    customerName: string,
    email: string,
    comEmail: string,
    msg: string
}
class HomePage extends React.Component<any,IState>{
    constructor(props:any){
        super(props);
        this.state={
            customerName:'',
            email:'',
            comEmail:'techsupport@visertechnosys.com',
            msg:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    componentDidMount(){
        const{data,fetchRequest}=this.props
        if(data.length===0){
        fetchRequest();
        }
    }
    public dataFetching(loading:boolean,data:IDataState[]){
         return(
             <div>
                 {console.log("loading",loading)}
                 {console.log("Data After Fetching",data)}
                 {loading && data.length === 0}
                 {data.map((i:any) => (
                     <Card key={i.id}><br/>
                     <CardContent><br/>
                         {i.customerName}<br/>
                         {i.email}<br/>
                         {i.comEmail}<br/>
                         {i.msg}<br/>
                     </CardContent><br/>
                     </Card>
                 ))}
              
             </div>
         )
     }
    public handleSubmit = (e:any) => {
        e.preventDefault();
        const data = {
            customerName:this.state.customerName,
            email:this.state.email,
            comEmail:this.state.comEmail,
            msg:this.state.msg
        }
     console.log(data)
        this.props.addData(data);

    }
    
    public render(){
        const {loading,data,errors}=this.props;
        console.log("errors",errors);
        return(
            <div>
                <h1 style={{alignSelf:"normal"}}>Welcome to viser technosys</h1>
                <Card style={{marginTop:"5%",marginLeft:"10%",width:"80%"}}>
                <form style={{padding:"5%,5%",marginTop:"5%",marginLeft:"5%"}} onSubmit={this.handleSubmit}>
                    <h3>Name with surname client</h3>
                    <TextField variant="outlined" label="Name of client" value={this.state.customerName} onChange={ (e:any) => this.setState({customerName:e.target.value})}/>
                    <h3>Email</h3>
                    <TextField variant="outlined" name="email" value={this.state.email} onChange= { (e:any) => this.setState({email:e.target.value})}/>
                    <h3>Customer Support Id</h3>
                    <TextField variant="outlined"  value={this.state.comEmail}  disabled />
                    <h3>Message</h3>
                    <TextField variant="outlined" multiline name="msg" value={this.state.msg} onChange={ (e:any) => this.setState({msg:e.target.value})} /><br></br><br></br>
                    <Button variant="contained" type="submit" color="primary" >Submit</Button>
                    <br></br><br></br>
                   
                </form>
                </Card>
                 {this.dataFetching(loading,data)}

            </div>
        )
    }
}

export default HomePage