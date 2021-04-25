import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nomade from './pages/Nomade';
import Forms from './pages/Forms';
import Plan from './pages/Plan';

function App() {
  return (
    <Switch>
      <Route path='/nomade/plan' component={Plan} />
      <Route path='/nomade/forms' component={Forms} />
      <Route exact path='/nomade' component={Nomade} />
    </Switch>
  );
}

export default App;
