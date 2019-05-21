import React from 'react';
import { Portal } from './Portal';

export const Modal: React.FC = props => (
  <Portal>
    <div
      style={{
        position: 'fixed',
        background: 'rgba(0,0,0,.15)',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      {props.children}
    </div>
  </Portal>
);
