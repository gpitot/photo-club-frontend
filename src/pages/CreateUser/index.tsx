import React, { useState, useContext } from "react";

import { UserContext } from "contexts/UserContext";
import { validateAccountCreate } from "utils/validation";
import API from "rest/api";
import { IUserCreate } from "rest/users";
import { useHistory, Link } from "react-router-dom";

import style from "./style.module.scss";
import Form, { IFieldsObj } from "components/Form";

const CreateUser = () => {
  const history = useHistory();

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const redirect = params.get("redirect");
  const path = redirect ? redirect : "/";
  const { user, setUser } = useContext(UserContext);

  if (user.id) {
    history.push(path);
  }

  const handleSubmit = (fields: IFieldsObj) => {
    const data = (fields as unknown) as IUserCreate;
    console.log(data);
    API.users.create(data).then((res) => {
      if (res.success) {
        setUser(res.user);
        window.localStorage.setItem("token", res.user.accessToken);
      }
    });
  };
  const fields = [
    {
      name: "name",
      value: "",
      type: "text",
      label: "Name",
    },
    {
      name: "password",
      value: "",
      type: "password",
      label: "Password",
    },
    {
      name: "password2",
      value: "",
      type: "password",
      label: "Validate Password",
    },
  ];
  return <Form onSubmit={handleSubmit} initialFields={fields} />;
};

export default CreateUser;
