import './styles/App.css';
import Home from './pages/home';
import Applications from './pages/applications';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
    <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/applications"> <Applications /> </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
