import React, {Component} from 'react';
import './App.css';
import Login from './components/login'
import Register from './components/register'
import Profile from './components/user/userProfile';
import Navbar from './components/mix.-btn';
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
import PrivateRoute from './components/access/PrivateRoute';
import PublicRoute from './components/access/PublicRoute';
import Home from './components/home/home-page';
import HomePage from './components/home/generalPage';
import CampaignPage from './components/home/campaignPage';
import Campage from './components/campaign/campaignPageRead';
import AdminPanel from './components/admin/usersList';
import Dashboard from './components/admin/dashboard';
import CampaignsList from './components/admin/campaignsList';
import UserPage from './components/admin/userPage';
import NavTabs from './components/campaign/create/campaignCreationPage';
import CreateCampaignAdmin from './components/admin/campaigns/campaignCreationAdmin'
import PageCampaignUser from './components/user/pageCampaignUser';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <div className="App">
          
          <div className="App">
         
          <Navbar />
          <div className="container">
            <PrivateRoute exact path="/admin" component={Dashboard}/>
            <PrivateRoute exact path="/users" component={AdminPanel}/>
            <PrivateRoute exact path="/campaigns" component={CampaignsList}/>
            <PrivateRoute exact path="/user-page" component={UserPage}/>
            <PrivateRoute exact path="/add-new-campaign-admin" component={CreateCampaignAdmin}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PublicRoute exact path="/profile" component={Profile} />
            <Route exact path="/" component={Home}/>
            <PublicRoute exact path="/home" component={HomePage}/>
            <Route exact path="/campage" component={Campage}/>
            <PublicRoute exact path="/add-new-campaign" component={NavTabs}/>
            <PublicRoute exact path="/campaign-page" component={CampaignPage}/>
            <PublicRoute exact path="/page-campaign-user" component={ PageCampaignUser}/>
            
          
          </div>
          </div>
        </div>
        </Switch>
      </Router>
    )
  }
}

export default App;
