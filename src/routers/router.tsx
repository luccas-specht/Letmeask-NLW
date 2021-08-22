import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, NewRoom, Room, AdminRoom } from "../ui/pages";
import { AuthContextProvider } from "../contexts";

export const Router = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/new" component={NewRoom} />
        <Route exact path="/rooms/:id" component={Room} />
        <Route exact path="/admin/rooms/:id" component={AdminRoom} />
      </Switch>
    </AuthContextProvider>
  </BrowserRouter>
);
