import React from 'react';
import s from './Label.module.css'
import { Star } from '../Star/Star';

export const Label = ({children, label, star=false, style=''}) => {
  return <label className={`${s.label} ${style}`}>
    <div className={s.labelTitle}>
      {label}
      {star && <Star/>}
    </div>

      {children}
      </label>;
};
