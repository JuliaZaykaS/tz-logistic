import React from 'react';

export const Text = ({text, children, style}) => {
  return <p className={style}>{text}
  {children}
  </p>;
};
