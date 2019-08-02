import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import ListDividers from './navigation'

class Dashboard extends Component {
    
    render() {
       
      return (
        <div>
            <ListDividers/>
           
        </div>
        
      )
    }
  }
  
  export default withRouter(Dashboard)