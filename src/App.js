import './App.css';
import React from 'react'
// import SearchBar from './components/SearchBar';
// import { searchTitle } from './actions/OMDBapi'
// import DisplayMovies from './containers/DisplayMovies';
// import DisplayNominees from './containers/DisplayNominees';
// import Banner from './components/Banner';
import Page from './containers/Page'
import Home from './containers/Home'
// import ls from 'local-storage'
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page/:nominees">
            <Page />
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
