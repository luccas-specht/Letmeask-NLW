import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, NewRoom } from "../pages";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/new" component={NewRoom} />
    </Switch>
  </BrowserRouter>
);
