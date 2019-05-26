import cx from 'classnames';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { ROUTES } from '../routes';
import './SideNavigation.css';

export const SideNavigation: React.FC = () => (
  <Route>
    {({ location }) => (
      <div className="navigation">
        {ROUTES.map(route => (
          <div
            key={route.path}
            className={cx('navigation__link', {
              navigation__active: location.pathname === route.path,
            })}
          >
            <Link to={route.path}>{route.title}</Link>
          </div>
        ))}
      </div>
    )}
  </Route>
);
