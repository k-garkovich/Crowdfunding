import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import {withRouter} from 'react-router-dom';
import {getBonusesUser} from '../actions/functionBonuses';

import ListBonusesUser from './listBonusesUser'

class BonusesUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
     bonus : []
    }

  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

    getBonusesUser(decoded._id).then(res=> {
      const bonus = res
      this.setState({bonus: bonus});
   
  });

  }

  
  render() {
    return (
      
      <ul class="list-group">
      <li class="list-group-item">
      <ListBonusesUser bonuses={this.state.bonus}/>
      </li>
                         </ul>
                         
    )
  }
}

export default withRouter(BonusesUser)