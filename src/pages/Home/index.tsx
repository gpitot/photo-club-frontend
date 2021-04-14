import React, { useState, useContext } from "react";

import { UserContext } from "contexts/UserContext";
import { validateAccountCreate } from "utils/validation";
import API from "rest/api";
import { IUserCreate } from "rest/users";

import style from "./style.module.scss";

const Home = () => {
  return <h1>home user</h1>;
};

export default Home;
