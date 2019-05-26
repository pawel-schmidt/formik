import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routes';
import { SideNavigation } from './views/SideNavigation';

export const App: React.FC = () => (
  <BrowserRouter>
    <div className="app">
      <SideNavigation />
      <Switch>
        {ROUTES.map(route => (
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
