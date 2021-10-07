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
import PopupRegister from './components/PopupRegister';
import PopupLogin from './components/PopupLogin';
import ProtectedRoute from './components/ProtectedRoute';
import History from './components/History';

function App() {
  const inputSearch = useSelector((state) => state.inputSearch);
  const dispatch = useDispatch();
  useEffect(() => dispatch(findMovies()), [inputSearch]);

  return (
    <Main>
      <Header />
      <Search />
      <PopupRegister />
      <PopupLogin />
      <Switch>
        <Route exact path="/film/:id">
          <CardInDetails />
        </Route>
        <Route exact path="/">
          <Cards />
        </Route>
        <ProtectedRoute component={Cards} path="/favourites" />
        <ProtectedRoute component={History} path="/history" />
      </Switch>
      <Footer />
    </Main>
  );
}

export default App;
