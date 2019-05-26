import React from 'react';
import './PreBlock.css';

interface Props {
  title?: string;
}

export const PreBlock: React.FC<Props> = props => (
  <div className="pre-block">
    {props.title && <div className="pre-block__title">{props.title}</div>}
    <pre>{props.children}</pre>
  </div>
);
