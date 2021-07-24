import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, NewRoom } from "../pages";

import { AuthContextProvider } from "../contexts";

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/new" component={NewRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
