import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { NestedFormsExampleView } from './views/examples/NestedFormsExampleView';

export interface InnerRouteDefinition {
  path: string;
  title: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

export interface RouteDefinition {
  path: string;
  title: string;
  routes: InnerRouteDefinition[];
}

export const ROUTES = [
  {
    path: '/examples',
    title: 'Examples',
    routes: [
      {
        path: '/examples/nested-forms',
        title: 'Nested forms',
        component: NestedFormsExampleView,
      },
    ],
  },
];

export const FLAT_ROUTES = ROUTES.reduce(
  (arr, route) => {
    return [
      ...arr,
      ...route.routes.reduce(
        (arr, innerRoute) => arr.concat(innerRoute),
        [] as InnerRouteDefinition[]
      ),
    ];
  },
  [] as InnerRouteDefinition[]
);
