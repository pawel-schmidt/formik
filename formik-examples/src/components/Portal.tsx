import React from 'react';
import ReactDOM from 'react-dom';
import { usePortal } from '../hooks/usePortal';

export const Portal: React.FC = props => {
  const container = usePortal();
  return container ? ReactDOM.createPortal(props.children, container) : null;
};
