import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import SinglePage from './pages/SinglePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <div className="container">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/singleshow/:id" component={SinglePage} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
