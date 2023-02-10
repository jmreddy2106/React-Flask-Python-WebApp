import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.js";
import NAvBar from './components/NavBar.js';
import ErrorBoundary from './components/ErrorBoundary.js';

function App() {

  return (
    <div >
      
        <BrowserRouter >
          <NAvBar />
          <Switch>
            <Route exact path="/">
              <div className="App-header">
                Welcome to React - Flask Python Integration
              </div>
            </Route>
            <Route exact path="/dashboard" >
              <ErrorBoundary>
                  <Dashboard />
              </ErrorBoundary>
            </Route>
          </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
