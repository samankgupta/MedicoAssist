import './App.css';
import HomePage from './components/HomePage';
import Form from './components/Form';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
