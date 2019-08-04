import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {getOneUser, getCampaign} from '../actions/func-admin';
import UserInfo from './users/userInfo'
import {deleteCampaign,  getOneCampaign} from '../actions/func-campaign';
import {getBonusesUser} from '../actions/functionBonuses';
import ListBonusesUser from './users/listBonusesUser'
import TableCampaign from '../campaign/component/tableCampaign'

class UserPage extends Component {
  constructor() {
    super()
    this.state = {
        users: [],
        campaign: [],
        bonus : []
      }

    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteCampaign = this.onDeleteCampaign.bind(this)
    this.showOneCampaign = this.showOneCampaign.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value }
      )
  } 

  onSubmit(e) {
    let { userData } = this.props.location
    e.preventDefault()
    this.props.history.push({
      pathname: `/add-new-campaign-admin`,
      userData: userData
  })
    
  }



  componentDidMount() {
    this.populateCampaigns();
    this.getUser();
  }

  getUser() {
    let { userData } = this.props.location
    if(!userData)
    {
      userData = localStorage.getItem('userData'); 
    } else {
      localStorage.setItem('userData',userData);
    }

    getOneUser(userData).then(res=> {
    
        const users = res
        this.setState({users: users});
      
    });
  }

  populateCampaigns() {
  
    let { userData } = this.props.location
    if(!userData)
    {
      userData = localStorage.getItem('userData'); 
    } else {
      localStorage.setItem('userData',userData);
    }
    getCampaign(userData).then(res=> {
        const campaign = res
        this.setState({campaign: campaign});
    });

    getBonusesUser(userData).then(res=>{
      let bonus = res
      this.setState({bonus: bonus});
    })
  
  }


  onDeleteCampaign(campaignId){
    deleteCampaign(campaignId).then(res => {
      this.populateCampaigns();
    });
  }

  showOneCampaign(campaignId) {
    getOneCampaign(campaignId).then(res => {
      if (res) {
        this.props.history.push({
          pathname: `/page-campaign-user`,
          campaignId: campaignId
      })
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
            
            <UserInfo data = {this.state} />   
            <hr/>
            <button className="btn btn-dark" onClick={this.onSubmit}>Add new campaign</button>
            <hr/>
            <br/>
            <TableCampaign posts = {this.state.campaign} onDelete={this.onDeleteCampaign}  onSub={this.showOneCampaign}/>
            <br/>
            
            <ul class="list-group">
                          <li class="list-group-item">
            <ListBonusesUser bonuses={this.state.bonus}/>    
            </li>
                         </ul>
                         
        </div>
      </div>
    )
  }
}

export default  withRouter(UserPage)