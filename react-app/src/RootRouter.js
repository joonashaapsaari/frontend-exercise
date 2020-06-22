import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import {CarerList} from "./CarerList";
import {Carer} from "./Carer";

function RootRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/carers" exact component={CarerList} />
        <Route path="/carers/:carerId" component={Carer} />
        <Route component={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default RootRouter;
