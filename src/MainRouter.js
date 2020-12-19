import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import MustSeeAnimeByGenre from "./lists/MustSeeAnimeByGenre";
import PostCreate from "./admin/PostCreate";

const MainRouter = () => (
  <Switch>
    {/* home */}
    <Route exact path="/" component={Home}></Route>

    {/* lists */}
    <Route
      exact
      path="/lists/mustSeeAnimeByGenre"
      component={MustSeeAnimeByGenre}
    ></Route>

    {/* admin */}
    <Route exact path="/admin/postCreate" component={PostCreate}></Route>
  </Switch>
);

export default MainRouter;
