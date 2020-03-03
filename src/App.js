import React from 'react';
import './App.css';
import AppIndex from '../src/page/App/App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListItems from '../src/page/ListItems/ListItems';
import ItemDetail from '../src/page/ItemDetail/ItemDetail'; 

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <AppIndex />
          </Route>
          <Route exact path='/listPosts'>
            <ListItems/>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
