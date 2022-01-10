import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ViewComics from 'pages/ViewComics';
import ViewComicDetails from 'pages/ViewComicDetails';

export function MyRoutes() {
  return (
    <Switch>
      <Route path="/" component={ViewComics} exact />
      <Route
        path="/view-comic-details/:id"
        component={ViewComicDetails}
        exact
      />
    </Switch>
  );
}
