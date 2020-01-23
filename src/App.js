import React from 'react';
import { GlobalStyles } from './styledComponents';
import { Home, Favourites, AddComment } from './pages';
import { Nav } from './components';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/favourites' component={Favourites} />
          <Route path='/add-comment' component={AddComment} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
