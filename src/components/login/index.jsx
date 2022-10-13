import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { LoginContainer } from "./styles";
import logo from "../../assets/KenzieHubLogo.png";
import schema from "../../validations/loginUser";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const Login = () => {
  const { handleLogin } = useContext(UserContext);

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

  return (
    <LoginContainer>
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

        <Link to={"/register"}>Cadastre-se</Link>
      </form>
    </LoginContainer>
  );
};
