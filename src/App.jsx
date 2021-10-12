/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { findMovies } from './store/actions/actions';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Search from './components/Search';
import CardInDetails from './components/CardInDetails';
import Popups from './components/Popups';
import ProtectedRoute from './components/ProtectedRoute';
import History from './components/History';
import Favourites from './components/Favourites';
import Preloader from './components/Preloader';

function App() {
  const inputSearch = useSelector((state) => state.inputSearch);
  const showPreloader = useSelector((state) => state.preloader);
  const dispatch = useDispatch();
  useEffect(() => dispatch(findMovies()), [inputSearch]);

  return (
    <Main>
      <Header />
      <Search />
      <Switch>
        <Route exact path="/">
          {showPreloader ? <Preloader /> : <Cards />}
        </Route>
        <Route exact path="/film/:id">
          <CardInDetails />
        </Route>
        <Route path={['/sign-in', '/sign-up']}>
          <Popups />
          {showPreloader ? <Preloader /> : <Cards />}
        </Route>
        <ProtectedRoute component={Favourites} path="/favourites" />
        <ProtectedRoute component={History} path="/history" />
      </Switch>
      <Footer />
    </Main>
  );
}

export default App;
