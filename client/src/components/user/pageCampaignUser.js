import React, { Component } from 'react'
import {getOneCampaign, createNews, getNews } from '../actions/func-campaign'
import  PageOneCampaign  from '../campaign/component/showOneCampaign'
import {withRouter} from 'react-router-dom'
import {getBonuses} from '../actions/functionBonuses'
import  EditDeleteBonus  from './editDeleteBonus'
import  AllNews  from '../campaign/component/showAllNews'
import {createBonus, deleteBonus} from '../actions/functionBonuses'
import FormBonus from '../campaign/component/createBonus';

import FormNews from '../campaign/component/createNews';

class PageCampaignUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
          posts: [],
          bonuses:[],
          news: [],
          name: '',
          description: '',
          cost: '',
          campaignId: '',
          nameNews: '',
          descNews: ''
          
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSub = this.onSub.bind(this)
        this.onDeleteBonus = this.onDeleteBonus.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value }
          )
    }
    
    onSubmit(e) {
         
        e.preventDefault()
        
        const newBonus = {
            name: this.state.name,
            description: this.state.description,
            cost: this.state.cost,
            campaignId : localStorage.getItem('c')
        }
        createBonus(newBonus).then((res)=>{
          this.populatePosts();
        })

    }
    
    onSub(e) {
      e.preventDefault()
     
      const newNews = {
          name: this.state.nameNews,
          description: this.state.descNews,
          campaignId : localStorage.getItem('c')
      }
      createNews(newNews).then((res)=>{
       
        this.populatePosts();
      })

  }
    
    componentDidMount() {
      this.mounted = true;
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
        if(this.mounted) {
          const posts = res
          this.setState({posts: posts});
        }
      });

      getBonuses(campaignId).then(res=> {
        if(this.mounted) {
          const bonuses = res
          this.setState({bonuses: bonuses});
        }
      });

      getNews(campaignId).then(res=> {
        if(this.mounted) {
          const news = res
          this.setState({news: news});
        }
      });
     
    }

    onDeleteBonus(item){
      deleteBonus(item).then(res=>{
        this.populatePosts();
      })
    }
    
  
    render() {
        return ( 
        <div className="container">
            <div className="jumbotron mt-5 ">
              <div className='row'>
                  <div className ='col-sm-9'>
                    <PageOneCampaign  posts = {this.state} />
                    
                    <br/> <h4>News</h4>
                    <AllNews news = {this.state} />
                  </div>
                  <div className='col-sm-3'>
                  <FormBonus data={this.state.name} onSubmit={this.onSubmit} onChange={this.onChange}/>
                  <hr/>
                    <EditDeleteBonus bonuses = {this.state}    onDelete={this.onDeleteBonus} />
                 
                  </div> 

              <FormNews data={this.state.name} onSub={this.onSub} onChange={this.onChange}/>
              </div>
                  
                 
                  
            </div>
        </div>
    )
  }



}

export default withRouter(PageCampaignUser)