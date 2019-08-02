import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getAllUser, getOneUser, deleteUser, changeRole} from '../actions/func-admin'
import jwt_decode from 'jwt-decode';
import UsersTable from './users/userTable'

class AdminPanel extends Component {
    constructor() {
        super()
        this.state = {
          users: []
        }
        this.getUser = this.getUser.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onRole = this.onRole.bind(this)
        
    }
    componentDidMount() {
      
      this.getUsers();
    
    }

    getUsers() {
      getAllUser().then(res=> {
      
      const users = res
      this.setState({users: users});
          
      });
    }

    getUser(item){
      getOneUser(item).then(res=>{
        this.props.history.push({
          pathname: `/user-page`,
          userData: item
      })
    })
   }

    onDelete(item){
      deleteUser(item).then(res=>{
        this.getUsers();
      })
    }

    onRole(item){
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      if (item === decoded._id){
        alert('NO')
      } 
      else{
        getOneUser(item).then(res=>{
                
                let role = res[0].role;
                if (role ==="USER"){
                  role = "ADMIN"
                }
                else if (role ==="ADMIN"){
                  role = "USER"
                }
                changeRole({role, item}).then(res=>{
                  this.getUsers();
                })
              })
      }
     
    }
    

    render() {
      
      return (
          <div>
             
            <br></br>
                <UsersTable data = {this.state}  onDelete={this.onDelete}  getUser={this.getUser} onRole = {this.onRole}/>
          </div>
      )
    }
  }
  
  export default withRouter(AdminPanel)