import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {CssBaseline} from '@material-ui/core'
const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Link to ="/">Home</Link>
      <Link to ="/services">services</Link>
      <Link to ="/contact">contact</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
