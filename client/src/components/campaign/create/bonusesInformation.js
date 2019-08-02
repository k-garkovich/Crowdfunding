import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import FormBonuses from './formBonuses'
import {createBonus} from '../../actions/functionBonuses'

class Bonus extends Component{
    
    constructor() {  
        super()
        this.state = {
          name: '',
          description: '',
          cost: '',
          campaignId: ''
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
        const newBonus = {
            name: this.state.name,
            description: this.state.description,
            cost: this.state.cost,
            campaignId : localStorage.getItem('id')
           
            
        }
        
        createBonus(newBonus).then(res => {
          if (res) {
              alert('Bonus created! Create another one!')
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
            <FormBonuses data={this.state.name} onSubmit={this.onSubmit} onSub={this.onSub} onChange={this.onChange}/>
          </div>
        )
    }
}

export default withRouter(Bonus);