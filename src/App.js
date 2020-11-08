import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'

import './App.css'

const Home = loadable(() => import('./views/Home'))
const About = loadable(() => import('./views/About'))

function App () {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
