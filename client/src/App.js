import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import AllPosts from './components/AllPosts'
import Creator from './components/Creator'
import Fins from './components/Fins'



export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav className='app-nav-bar'>
            <Link to='/creator' className='app-nav-creator'>
              <h3>Creator</h3>
            </Link>
            <Link to='/' className='app-nav-logo' >
              <img src='https://cdn5.f-cdn.com/contestentries/1308343/29084380/5ad85717cbaac_thumb900.jpg' alt='fintrest "logo"' height='60' width='60' />
            </Link>
            <Link to='/fins' className='app-nav-fins'>
              <h3>Your Fins</h3>
            </Link>
          </nav>
          <Switch>
            <Route exact path='/' component={AllPosts} />
            <Route exact path='/fins' component={Fins} />
            <Route exact path='/creator' component={Creator} />
          </Switch>
        </Router>

      </div>
    )
  }
}
