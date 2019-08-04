import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import {getCampaign, deleteCampaign,  getOneCampaign} from '../actions/func-campaign'
import {withRouter} from 'react-router-dom';
import TableCampaign from './component/tableCampaign'

class Mini extends  Component{

    constructor(props) {
        super(props)
        this.state = {
          posts: []
        }
       
        this.onSubmit = this.onSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onSub = this.onSub.bind(this);
        
    }
    
    onSubmit(e) {
        e.preventDefault()
        this.props.history.push(`/campaign`)
      
    }
    onSub(campaignId) {
     
      getOneCampaign(campaignId).then(res => {
        if (res) {
          this.props.history.push({
            pathname: `/page-campaign-user`,
            campaignId: campaignId

        })
        }
      })
  }
  
    
    componentDidMount() {
    
      this.obtainCampaign();
    }
    
    obtainCampaign() {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token);
      
      getCampaign(decoded._id).then(res=> {
       
          const posts = res
          this.setState({posts: posts});
      
      });
    }

    onDelete(campaignId){
      deleteCampaign(campaignId).then(res => {
        this.obtainCampaign();
      });
    }
    
   
    render() {
      
        return ( 
        <div >
            <br/>
           
            <TableCampaign posts = {this.state.posts} onDelete={this.onDelete} onSub={this.onSub}/>
        </div>
    )
  }


}

export default withRouter(Mini);
