import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findMovies } from './store/actions/actions';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Search from './components/Search';

function App() {
  const inputSearch = useSelector((state) => state.inputSearch);
  const dispatch = useDispatch();
  useEffect(() => dispatch(findMovies()), [inputSearch]);

  return (
    <Main>
      <Header />
      <Search />
      <Cards />
      <Footer />
    </Main>
  );
}

export default App;
