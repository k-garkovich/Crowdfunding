import React, { Component } from 'react'
import {getAllCampaign} from '../actions/func-admin'
import TableCampaign from '../campaign/component/tableCampaign'
import { deleteCampaign,  getOneCampaign} from '../actions/func-campaign'
import {withRouter} from 'react-router-dom'

class CampaignsList extends Component {

    constructor() {
        super()
        this.state = {
          posts: []
        }
       
        this.onDelete = this.onDelete.bind(this)
        this.onSub = this.onSub.bind(this);
        
    }
  
  componentDidMount() {
    this.populatePosts();
   
  }
  populatePosts() {
    
    getAllCampaign().then(res=> {
     const posts = res
     
     this.setState({posts: posts});
    
    });
    
  }

  onDelete(campaignId){
    deleteCampaign(campaignId).then(res => {
      this.populatePosts();
    });
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


  
    render() {
        return ( 
        <div className="container">
             <br></br>

             <TableCampaign posts = {this.state.posts} onSub={this.onSub} onDelete={this.onDelete}/>
                 
        </div>
    )
  }


}




export default withRouter(CampaignsList)