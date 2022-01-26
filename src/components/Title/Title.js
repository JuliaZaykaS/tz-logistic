import React from 'react';

export const Title = ({title, style=''}) => {
  return <h2 className={style}>{title}</h2>;
};
