import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import dashboard from './pages/dashboard';

function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Switch>
      <Route path='/' exact component={ dashboard } />
        <Route path='/dashboard' exact component={ dashboard } />
      </Switch>
    </Router>
    </>
  );
}

export default App;
