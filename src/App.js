import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './component/Home'

const App = () => {
  return (
    <Router>
      <div className="content">
        <div className="container">
          <div>
            <h2>Articles</h2>
          </div>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;