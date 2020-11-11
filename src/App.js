import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route component={Home} exact path="/"></Route>
        <Route component={Detail} exact path="/detail"></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
