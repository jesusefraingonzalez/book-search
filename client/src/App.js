import Search from "./pages/Search";
import SavedBooks from "./pages/SavedBooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import {Container} from "@material-ui/core";
import { Header } from "./components";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={["/", "index.html", "search.html"]}>
          <Container>
            <h1>Search Page</h1>
          </Container>
        </Route>
        <Route exact path={["saved-books"]}>
          <Container>
            <SavedBooks />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
