import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import NavBar from './components/Navbar/index'
import Categories from './containers/Categories/index'
import Leaderboard from './containers/Leaderboard/index'
import Login from './containers/Login/index'
import Signup from './containers/Signup/index'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <NavBar />
          <div style={{ paddingTop: '45px' }}>
            <Switch>
              <Route exact path="/" component={Categories} />
              <Route exact path="/leaderboard" component={Leaderboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
