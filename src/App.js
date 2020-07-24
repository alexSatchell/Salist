import React from 'react';
import { Layout } from './styling/styles';
import { GlobalStyles } from './styling/gloabl';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Upload from './pages/Upload/index';
import Home from './pages/Home';
import Library from './pages/Library';
import Account from './pages/Account/index';
import About from './pages/About';
import NoMatchPage from './pages/404';
import SongState from './context/songs/SongState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Register from './components/Register';
import Login from './components/Login';
import Alert from './components/Alerts';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <SongState>
        <AlertState>
          <Router>
            <Layout>
              <GlobalStyles />
              <Navbar />
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/upload' component={Upload} />
                <Route path='/Library' component={Library} />
                <Route path='/account' component={Account} />
                <Route path='/about' component={About} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route component={NoMatchPage} />
              </Switch>
              <Footer />
            </Layout>
          </Router>
        </AlertState>
      </SongState>
    </AuthState>
  );
};

export default App;
