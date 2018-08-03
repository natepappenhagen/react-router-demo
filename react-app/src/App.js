import React from 'react';
import './App.css';
import MovieContainer from './MovieContainer';
import Header from './Header';
import Login from './Login';
import { Route, Link, Switch } from 'react-router-dom';


const My404 = () => {
  return (
    <div>
      You're Lost
    </div>
    )
}

const App = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/movies" component={ MovieContainer } />
        <Route component={My404} />
      </Switch>
    </main>
    )
}



export default App;