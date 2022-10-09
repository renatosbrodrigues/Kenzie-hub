import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../api/requests";
import { LoginContainer } from "./styles";
import { GlobalStyles } from "../../globalstyling";
import logo from "../../assets/KenzieHubLogo.png";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("email obrigatorio!").email("email invalido!"),

    password: yup
      .string()
      .required("senha obrigatoria!")
      .min(8, "minimo 8 digitos!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    handleLogin(data);
    if (!handleLogin) {
      console.log("deu errado");
    }
  };
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <GlobalStyles></GlobalStyles>
      <img src={logo} alt="" />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <label>
          Email
          <p>{errors.email?.message}</p>
          <input type="email" placeholder="seu email" {...register("email")} />
        </label>

        <label>
          Senha
          <p>{errors.password?.message}</p>
          <input
            type="password"
            placeholder="sua senha"
            {...register("password")}
          />
        </label>

        <button className="loginButton" type="submit">
          Entrar
        </button>

        <span>ainda nao tem uma conta?</span>

        <button
          className="register"
          type="button"
          onClick={() => {
            navigate("register");
          }}
        >
          Cadastrar
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </LoginContainer>
  );
};
