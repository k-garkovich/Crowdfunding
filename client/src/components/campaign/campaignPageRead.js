import React, { Component } from 'react'
import {getOneCampaign } from '../actions/func-campaign'
import  PageOneCampaign  from './component/showOneCampaign'
import {withRouter} from 'react-router-dom'
import {getBonuses} from '../actions/functionBonuses'
import  AllBonuses  from './component/showBonusesRead'

class Campage extends Component {
    constructor() {
        super()
        this.state = {
          posts: [],
          bonuses:[]
        }
    }
    
  
    componentDidMount() {
      this.populatePosts();
    }
    
    populatePosts() {
      
      let { campaignId } = this.props.location
      
      if(!campaignId)
      {
        campaignId = localStorage.getItem('c'); 
      } else {
        localStorage.setItem('c',campaignId);
      }

      
      getOneCampaign(campaignId).then(res=> {
        
          const posts = res
          this.setState({posts: posts});
       
      });

      getBonuses(campaignId).then(res=> {
        
          const bonuses = res
          this.setState({bonuses: bonuses});
       
      });
     
    }

  
   
  
    render() {
        return ( 
        <div className="container">
            <div className="jumbotron mt-5 ">
              <div className='row'>
                  <div className ='col-sm-9'>
                    <PageOneCampaign  posts = {this.state} />
                  </div>
                  <div className='col-sm-3'>
                    <AllBonuses bonuses = {this.state}/>
                  </div>
              
              </div>
            </div>
        </div>
    )
  }



}

export default withRouter(Campage)