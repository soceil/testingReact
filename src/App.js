import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const topHeading="Coordinarts welcomes you!";
  const siteName="Coordinarts";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          {/* <h1>Coordinarts is now alive</h1> */}
          {/* <h1>{topHeading}</h1> */}
          {/* <p>Science for survival, {siteName} for living</p> */}
          {/* <p>{10+10}</p> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
