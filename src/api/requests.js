import axios from "axios";
import { badNotify } from "../components/toast";

const baseUrl = "https://kenziehub.herokuapp.com";

export const createUser = (data) => {
  axios
    .post(`${baseUrl}/users`, data)
    .then((res) => {
      console.log(res);
      window.location.href = "http://localhost:3000/";
    })
    .catch((err) => {
      console.log(err.response);
      badNotify("preencha todos os dados corretamente!");
    });
};

export const handleLogin = (data) => {
  axios
    .post(`${baseUrl}/sessions`, data)

    .then((res) => {
      console.log(res);
      const name = res.data.user.name.replace(/\s+/g, "");
      localStorage.clear();
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("course_module", res.data.user.course_module);
      window.location.href = `http://localhost:3000/dashboard/${name}`;
    })

    .catch((err) => {
      console.log(err.response);
      badNotify("e-mail ou senha incorretos!");
    });
};
