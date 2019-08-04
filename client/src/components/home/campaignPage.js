import React, { Component } from 'react'
import {getOneCampaign, updateMoney,  getNews } from '../actions/func-campaign'
import  PageOneCampaign  from '../campaign/component/showOneCampaign'
import {withRouter} from 'react-router-dom'
import {getBonuses, saveBonus, getBonusesId} from '../actions/functionBonuses'
import  AllBonuses  from '../campaign/component/showAllBonuses'
import  AllNews  from '../campaign/component/showAllNews'
import jwt_decode from 'jwt-decode'
import TransferMoney from '../campaign/money/transferMoney'
import {createComment,  getComments} from '../actions/functionComments'
import FormComment from '../campaign/commens/createComment'
import AllComments from '../campaign/commens/showAllComments'
import { animateScroll } from "react-scroll";

class CampaignPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          posts: [],
          bonuses:[],
          news: [],
          comments: [],
          name: '',
          description: '',
          cost: '',
          money: '',
          text: '',
          nameUser: '',
          surnameUser: '',
          value: '',

        }
        this.onSup = this.onSup.bind(this)
        this.onTransfer = this.onTransfer.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onCreateComment = this.onCreateComment.bind(this)
    }
    
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value , value: e.target.value}
        )
    }
    
    componentDidMount() {
      this.mounted = true;
      this.populatePosts(); 
    }
    scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "comments"
    });
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
      getComments(campaignId).then(res=>{
          const comments = res
          this.setState({comments: comments},this.scrollToBottom );
          
      })
     
    }

    onSup(data){
      const bonusId = data._id
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      const userId = decoded._id

      let { campaignId } = this.props.location
      if(!campaignId) {
        campaignId = localStorage.getItem('c'); 
      } else {
        localStorage.setItem('c',campaignId);
      }

      getOneCampaign(campaignId).then(res => {
          const posts = res;
          let count = posts[0].money + data.cost
          let amount_money = posts[0].amount_money

           if(count>amount_money){
             count = amount_money
           }
          updateMoney({campaignId,count}).then((res)=>{
            this.populatePosts();
            getBonusesId(bonusId).then(res=>{
              const name = res[0].name
              const description = res[0].description
              const cost = res[0].cost
              
               saveBonus({bonusId,userId,name,description,cost})
            })
          })   
      });
    }


    
   onTransfer(){
    let { campaignId } = this.props.location
    if(!campaignId) {
      campaignId = localStorage.getItem('c'); 
    } else {
      localStorage.setItem('c',campaignId);
    }

    getOneCampaign(campaignId).then(res => {
        const money = Number(this.state.money)
        const posts = res;
        let count = posts[0].money + money
        let amount_money = posts[0].amount_money

         if(count>amount_money){
           count = amount_money
         }
        updateMoney({campaignId,count}).then((res)=>{
          this.populatePosts();
        })
    });

    
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
    render() {
        return ( 
        <div className="container">
            <div className="jumbotron mt-5 ">
              <div className='row'>
                  <div className ='col-sm-9'>
                    <PageOneCampaign  posts = {this.state} />
                      
                    <br/>
                    <h4>News</h4>
                    <AllNews news = {this.state} />
                  </div>
                  <div className='col-sm-3'>
                    <TransferMoney onTransfer={this.onTransfer} onChange={this.onChange}/>
                    <hr/>
                    <AllBonuses bonuses = {this.state}  onSup={this.onSup}/>
                  </div> 
              </div>
              <hr/>
              <div>
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

export default withRouter(CampaignPage)


