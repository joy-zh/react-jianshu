import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Login from './pages/login'
import Detail from './pages/detail/loadable'
import Write from './pages/write'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route component={Home} exact path="/"></Route>
        <Route component={Detail} exact path="/detail/:id"></Route>
        <Route component={Login} exact path="/login"></Route>
        <Route component={Write} exact path="/write"></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
