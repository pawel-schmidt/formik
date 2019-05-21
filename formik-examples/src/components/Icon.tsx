import React from 'react';
import cx from 'classnames';
import './Icon.css';

const Feather = require('react-feather');

type Props = JSX.IntrinsicElements['div'] & {
  rounded?: boolean;
  name: 'Trash' | 'Edit';
  size: number;
  color?: string;
};

export const Icon: React.FC<Props> = props => {
  const { rounded, name, size, color, ...htmlProps } = props;
  const Component = Feather[name];
  return (
    <div
      {...htmlProps}
      className={cx(
        'icon',
        {
          'icon--rounded': props.rounded,
        },
        props.className
      )}
    >
      <Component size={size} color={color || '#999'} />
    </div>
  );
};
