import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Teams from './components/Teams/index'

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/teams" component={Teams} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </Router>
)

export default Routes;