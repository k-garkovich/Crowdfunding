import React, {Component} from 'react';
import {create} from '../../actions/func-campaign';
import jwt_decode from 'jwt-decode'
import FormGeneral from './formGeneralInfo'
import {withRouter} from 'react-router-dom'


class General extends Component{
    
    constructor() {  
        super()
        this.state = {
          name: '',
          description: '',
          subject: '',
          bonuses: '',
          tags: '',
          video:'',
          image:'',
          amount_money: '',
          date:'',
          userId:'',
          userName: '',
          userLast:''
        }
        
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSub = this.onSub.bind(this)

      
    }

        
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value }
          )
    }
    onSubmit(e) {
        e.preventDefault()
        const token = localStorage.usertoken
        const decoded = jwt_decode(token);
        
        const newCampaign = {
            name: this.state.name,
            description: this.state.description,
            subject: this.state.subject,
            bonuses: this.state.bonuses,
            tags: this.state.tags,
            video:this.state.video,
            image: this.state.image,
            amount_money: this.state.amount_money,
            userId: decoded._id,
            date: this.state.date,
            userName: decoded.first_name,
            userLast: decoded.last_name
        }
        
        create(newCampaign).then(res => {
          if (res) { 
            
            const campaignId = res._id
            localStorage.setItem('id',campaignId);
            alert('Campaign created! Create bonuses!')
          }}
        )
        

    }

    onSub(e) {
      e.preventDefault()
      this.props.history.push(`/profile`)
    }

    render(){
        return (
          <div>
            <FormGeneral data={this.state.name} onSubmit={this.onSubmit} onSub={this.onSub} onChange={this.onChange}/>
          </div>
        )
    }
}

export default withRouter(General);