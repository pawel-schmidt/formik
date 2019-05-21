import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { FLAT_ROUTES } from './routes';
import { SideNavigation } from './views/SideNavigation';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <SideNavigation />
        <Switch>
          {FLAT_ROUTES.map(route => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
