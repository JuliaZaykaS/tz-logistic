import React from 'react';
import s from './Text.module.css'

export const Text = ({text, children, style=''}) => {
  return <p className={`${s.text} ${style}`}>{text}
  {children}
  </p>;
};
