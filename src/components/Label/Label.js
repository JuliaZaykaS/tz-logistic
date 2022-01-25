import React from 'react';
import s from './Label.module.css'
import { Star } from '../Star/Star';

export const Label = ({children, label, star=false}) => {
  return <label className={s.label}>
    <div>
      {label}
      {star && <Star/>}
    </div>

      {children}
      </label>;
};
