import React from 'react';
import ReactDOM from 'react-dom';
import { usePortal } from '../hooks/usePortal';

export const Portal: React.FC = props => {
  const containerRef = usePortal();
  return containerRef.current
    ? ReactDOM.createPortal(props.children, containerRef.current)
    : null;
};
