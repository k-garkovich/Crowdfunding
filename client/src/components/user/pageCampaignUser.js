import React, { Component } from 'react'
import {getOneCampaign, createNews, getNews, deleteNews, updateNews } from '../actions/func-campaign'
import  PageOneCampaign  from '../campaign/component/showOneCampaign'
import {withRouter} from 'react-router-dom'
import {getBonuses} from '../actions/functionBonuses'
import  EditDeleteBonus  from './bonuses/editDeleteBonus'
import  EditDeleteNews  from './news/editDeleteNews'
import {createBonus, deleteBonus, updateBonus} from '../actions/functionBonuses'
import FormBonus from '../campaign/component/createBonus';
import FormComment from '../campaign/commens/createComment'
import AllComments from '../campaign/commens/showAllComments'
import { animateScroll } from "react-scroll";
import FormNews from '../campaign/component/createNews';
import {createComment,  getComments} from '../actions/functionComments'
import jwt_decode from 'jwt-decode'
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
        this.onDeleteNews = this.onDeleteNews.bind(this)
        this.onCreateComment = this.onCreateComment.bind(this)
        this.onUpdateBonus = this.onUpdateBonus.bind(this)
        this.onUpdateNews = this.onUpdateNews.bind(this)
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

    scrollToBottom() {
      animateScroll.scrollToBottom({
        containerId: "comments"
      });}
    
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

      getComments(campaignId).then(res=>{
        const comments = res
        this.setState({comments: comments},this.scrollToBottom );
    });
     
    }

    onDeleteBonus(item){
      deleteBonus(item).then(res=>{
        this.populatePosts();
      })
    }

    onDeleteNews(item){
      deleteNews(item).then(res=>{
        this.populatePosts();
      })
    }

    onCreateComment(e){
      e.preventDefault()
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      let { campaignId } = this.props.location
      if(!campaignId) {
        campaignId = localStorage.getItem('c'); 
      } else {
        localStorage.setItem('c',campaignId);
      }
      const newComment ={
        text: this.state.text,
        nameUser: decoded.first_name,
        surnameUser: decoded.last_name,
        campaignId:  campaignId
      }
      createComment(newComment).then(res =>{
        
        this.populatePosts();
      })
    }
    
    onUpdateBonus(data){

      const upBonus = {
        name: data.name,
        description: data.description,
        cost: data.cost,
        bonusId: data.id
      }
      updateBonus(upBonus).then(res=>{
        this.populatePosts();
      })
    }

    onUpdateNews(data){
      const upNews = {
        name: data.name,
        description: data.description,
        newsId: data.id
      }
        updateNews(upNews).then(res=>{
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
                    <FormNews data={this.state.name} onSub={this.onSub} onChange={this.onChange}/>
                    <br/> 
                    <h4>News</h4>
                    <EditDeleteNews news = {this.state} onDelete={this.onDeleteNews} onUpdate={this.onUpdateNews}/>
                  </div>

                  <div className='col-sm-3'>
                    <FormBonus data={this.state.name} onSubmit={this.onSubmit} onChange={this.onChange}/>
                    <hr/>
                    <EditDeleteBonus bonuses = {this.state} onUpdate={this.onUpdateBonus}  onDelete={this.onDeleteBonus} />
                  </div> 
              </div>

              <div>
                <hr/>
                <h4>Comments</h4>
                <br/>
                  <div id='comments' style={{maxHeight: 500, overflowY: 'auto'}} > 
                    <AllComments comments={this.state.comments} />
                  </div>
                <FormComment comment = {this.state.text} onCreate={this.onCreateComment} onChange={this.onChange} />
              </div>
            </div>
        </div>
    )
  }



}

export default withRouter(PageCampaignUser)