import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PopupLogin from './PopupLogin';
import PopupInfo from './PopupInfo';
import PopupRegister from './PopupRegister';

export default function Popups() {
  const { url } = useRouteMatch();

  return (
    <>
      <Route
        path="/sign-in"
        // eslint-disable-next-line react/no-children-prop
        children={({ match }) => <PopupLogin isOpen={Boolean(match)} />}
      />
      <Route
        path="/sign-up"
        // eslint-disable-next-line react/no-children-prop
        children={({ match }) => <PopupRegister isOpen={Boolean(match)} />}
      />
      <Route
        path={`${url}/info`}
        // eslint-disable-next-line react/no-children-prop
        children={({ match }) => <PopupInfo isOpen={Boolean(match)} />}
      />
    </>
  );
}
