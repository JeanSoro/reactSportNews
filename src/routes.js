import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home/Home'

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </Router>
)

export default Routes;