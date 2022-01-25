import React from "react";
import s from './Input.module.css'

export const Input = ({ type, value, name, readOnly }) => {
  return (
    <input
    type={type}
    value={value}
    name={name}
    readOnly={readOnly}
    className={s.input}
    ></input>
  );
};

export const Select = ({ list}) => {
  return (
      <select className={s.input}>
        {list.map((el) => {
          return (
            <option key={el.id} value={el.name}>
              {el.description}
            </option>
          );
        })}
      </select>

  );
};

export const Textarea = ({ value, readOnly }) => {
  return <textarea value={value} readOnly={readOnly}></textarea>;
};
