import axios from "axios";

const baseUrl = "https://kenziehub.herokuapp.com";

export const createUser = (data) => {
  console.log(data);
  axios
    .post(`${baseUrl}/users`, data)
    .then((res) => console.log("passei aqui"))
    .catch((err) => console.log(err));
};
