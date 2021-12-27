import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddEmployee from './Pages/AddEmployee/AddEmployee';
import Admin from './Pages/Admin/Admin';
import Employers from './Pages/Home/Employers/Employers';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
           <Route path="/addEmployee">
             <AddEmployee/>
           </Route>
           <Route path="/admin">
             <Admin/>
           </Route>
           <Route path="/employers">
             <Employers/>
           </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/contact">
             <Contacts/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
