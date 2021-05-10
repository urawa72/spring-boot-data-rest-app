import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Setting from './pages/Setting';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/setting" component={Setting} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
