import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import { setInputSearch } from '../store/actions/actions';
import { int } from '../int/ru-eng';

import styles from './Search.module.css';
import Button from './Button';

export default function Search() {
  const location = useLocation();
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  const inputDebonced = useDebounce(input, 1000);

  useEffect(() => {
    dispatch(setInputSearch(inputDebonced));
  }, [inputDebonced]);

  const handleSearch = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setInputSearch(input));
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={handleSearch}
        className={styles.input}
        type="search"
        placeholder={int[lang].Search.input.placeholder}
        disabled={location.pathname !== '/'}
      />
      <Button type="submit" title={int[lang].Search.submit.title} styleClass={styles.button} />
    </form>
  );
}
