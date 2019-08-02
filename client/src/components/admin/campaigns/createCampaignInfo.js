import React, {Component} from 'react';
import {create} from '../../actions/func-campaign';
import {getOneUser} from '../../actions/func-admin';
import FormGeneral from '../../campaign/create/formGeneralInfo'
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

    componentDidMount(){
      let { userData } = this.props.location

        getOneUser(userData).then(res=>{
            let user = res;
            user.map((item) => {
              this.setState({userName: item.first_name,
                userLast: item.last_name
              });
            })
        })
    }

    onSubmit(e) {
        let { userData } = this.props.location
        e.preventDefault()
        
        const newCampaign = {
            name: this.state.name,
            description: this.state.description,
            subject: this.state.subject,
            bonuses: this.state.bonuses,
            tags: this.state.tags,
            video:this.state.video,
            image: this.state.image,
            amount_money: this.state.amount_money,
            userId: userData,
            date: this.state.date,
            userName: this.state.userName,
            userLast: this.state.userLast
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