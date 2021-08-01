import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, NewRoom, Room } from "../pages";

import { AuthContextProvider } from "../contexts";

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/new" component={NewRoom} />
          <Route exact path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
