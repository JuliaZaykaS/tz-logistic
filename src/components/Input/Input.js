import React from "react";
import s from './Input.module.css'

export const Input = ({ type, value, name, onChange, style='' }) => {
  return (
    <input
    type={type}
    value={value}
    name={name}
    onChange={onChange}
    className={`${s.input} ${style}`}
    ></input>
  );
};

export const Select = ({ list, style=''}) => {
  return (
      <select className={`${s.input} ${style}`}>
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

export const Textarea = ({ value, onChange }) => {
  return <textarea
  className={s.textarea}
  value={value}
  onChange={onChange}
  ></textarea>;
};
