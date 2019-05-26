import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from './routes';
import { SideNavigation } from './views/SideNavigation';
import './App.css';

export const App: React.FC = () => (
  <BrowserRouter>
    <div className="app">
      <SideNavigation />
      <div className="p-16">
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
    </div>
  </BrowserRouter>
);
