import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Goblins from "./components/Goblins";
import Basics from "./components/Basics";
import SearchWizard from "./components/SearchWizard";
import Resources from "./components/Resources";
import News from "./components/News";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/goblins">
          <Goblins />
        </Route>
        <Route path="/beginners">
          <Basics />
        </Route>
        <Route path="/search">
          <SearchWizard />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
