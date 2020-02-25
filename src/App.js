import React from 'react';
import Auth from './components/Auth/Auth'
// import Dashboard from './components/Dashboard/Dashboard'
// import Post from './components/Post/Post'
// import Form from './components/Form/Form'
import Nav from './components/Nav/Nav'
import routes from './routes'
import  { withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'


import './App.css';

function App(props) {
  return (
    <Provider store={store}>
        <div className="App">
          {props.location.pathname ==='/' 
          ? (
              <>
              <Auth />
              </>
            )
          : (
              <>
              <Nav />
              {routes}
              </>
            )}
        </div>
    </Provider>
  );
}

export default withRouter(App);
