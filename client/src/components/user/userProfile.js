import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Mini from '../campaign/campaign-mini';
import {withRouter} from 'react-router-dom';
import UserInfo from './userInfo';
import {getBonusesUser} from '../actions/functionBonuses';
import BonusesUser from './bonuses/listBonuses'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      _id:'',
      role: '',
      errors: {}
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onSub = this.onSub.bind(this)
    this.onAdmin = this.onAdmin.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.history.push(`/campaign`)
  }
  onSub(e) {
    e.preventDefault()
    this.props.history.push(`/add-new-campaign`)
    
  }

  onAdmin(e) {
    e.preventDefault()
    this.props.history.push(`/admin`)
    
  }
 
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      _id: decoded._id,
      role: decoded.role
    })

    getBonusesUser(decoded._id)

  }

  
  render() {
      let role = this.state.role
    class Btn extends Component{
      
      render() {
              if(role === "ADMIN"){
            return (
              <button className="btn btn-dark" onClick={this.props.onClick}>Admin page</button>
            )
           
            } else {
              return null
            }
        }
    }

    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <UserInfo data={this.state}/>
          <hr/>
          <Btn onClick={this.onAdmin.bind(this)}/>
          <br/>
          <br/>
          <button className="btn btn-dark" onClick={this.onSub}>Add new campaign</button>
          <hr/>
          <Mini/>
          <br/>
          <BonusesUser/>
          <br/>

          
        
        </div>
      </div>
    )
  }
}

export default withRouter(Profile)