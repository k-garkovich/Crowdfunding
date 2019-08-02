import React, { Component } from 'react'
import {getAllCampaign, getOneCampaign} from '../actions/func-campaign'
import PageCampaign from '../campaign/component/showAllCampaign'
import {withRouter} from 'react-router-dom'

class Home extends Component {

    constructor() {
        super()
        this.state = {
          posts: []
        }
       
       this.getOne = this.getOne.bind(this)
        
    }

   
    componentDidMount() {
      this.obtainCampaign();
     
    }

    obtainCampaign() {
      
      getAllCampaign().then(res=> {
      const posts = res
      
      this.setState({posts: posts});
      })
    } 

    getOne(campaignId) {
      getOneCampaign(campaignId).then(res => {
        if (res) {
          this.props.history.push({
            pathname: `/campage`,
            campaignId: campaignId
        })
        }
      })
    } 

 

  
    render() {
        return ( 
        <div className="container">
            <div className=" " style={{maxHeight: 1000, overflow: 'auto'}}>
              <br/>
             <h2>Crowdfunding</h2>
              <h4>Collective financing interesting project.</h4>
          <hr/>
            <PageCampaign data={this.state} click={this.getOne}/>
           
            
            
            </div>
        </div>
    )
  }


}




export default withRouter(Home)