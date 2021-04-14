import React, { useState } from "react";
import style from "./style.module.scss";

interface IFields {
  name: string;
  value: string;
  type: string;
  label: string;
  validation?: unknown;
}

type Value = string;

export interface IFieldsObj {
  [key: string]: Value;
}

interface IProps {
  initialFields: Array<IFields>;
  onSubmit: (fields: IFieldsObj) => void;
}

const Form = ({ initialFields, onSubmit }: IProps) => {
  const defaultFields = {} as IFieldsObj;
  initialFields.map(({ name, value }) => {
    defaultFields[name] = value;
  });
  const [fields, setFields] = useState(defaultFields);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(fields);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {initialFields.map(({ name, type, label }) => (
        <div className={style.field}>
          <label htmlFor={name}>{label}</label>
          <input
            key={name}
            name={name}
            type={type}
            value={fields[name]}
            onChange={handleChange}
          />
        </div>
      ))}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
