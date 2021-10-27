import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../hooks/useDebounce';
import { setInputSearch } from '../store/actions/actions';

import styles from './Search.module.css';

export default function Search() {
  const [input, setInput] = useState('');
  const inputSearch = useSelector((state) => state.inputSearch);
  const dispatch = useDispatch();
  const inputDebonced = useDebounce(input, 1000);

  useEffect(() => {
    dispatch(setInputSearch(inputDebonced));
  }, [inputDebonced]);
  useEffect(() => setInput(inputSearch), [inputSearch]);

  const handleSearch = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setInputSearch(input));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={handleSearch}
        className={styles.searchInput}
        type="search"
        placeholder="Popular movies"
      />
    </form>
  );
}
