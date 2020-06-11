import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import AllPosts from './components/AllPosts'
import Creator from './components/Creator'
import Fins from './components/Fins'
import Post from './components/Post'



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
          <div className='page-content'>
            <Switch>
              <Route exact path='/' component={AllPosts} />
              <Route exact path='/post/:postId' component={Post} />
              <Route exact path='/fins' component={Fins} />
              <Route exact path='/creator' component={Creator} />
            </Switch>
          </div>
          <div className='create-post-button'>
            <Link to='/createpost'>
              <button className='button mdc-icon-button material-icons'>
                add
          </button>
            </Link>
          </div>
        </Router>

      </div>
    )
  }
}
