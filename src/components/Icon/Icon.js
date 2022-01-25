import React from 'react';
import IconsSVG from '../../assets/icons/icons-sprite.svg';

export const Icon = ({name, color, size, className}) => {
  return <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>
  <use xlinkHref={`${IconsSVG}#icon-${name}`} />
</svg>
};
