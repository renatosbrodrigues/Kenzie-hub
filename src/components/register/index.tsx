import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/KenzieHubLogo.png";
import schema from "../../validations/registerUser";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const Register = () => {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: object) => {
    createUser(data);
  };

  const navigate = useNavigate();

  return (
    <RegisterContainer>
      <div className="headingContainer">
        <img src={logo} alt="" />
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          voltar
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Crie sua Conta</h1>
        <p>rapido e gratis, vamos nessa</p>

        <label htmlFor="">
          nome
          <p>{errors.name?.message as string | undefined}</p>
          <input type="text" placeholder="Seu nome" {...register("name")} />
        </label>

        <label htmlFor="">
          Email
          <p>{errors.email?.message as string | undefined}</p>
          <input type="email" placeholder="Seu Email" {...register("email")} />
        </label>

        <label htmlFor="">
          Senha
          <p>{errors.password?.message as string | undefined}</p>
          <input
            type="password"
            placeholder="Sua senha"
            {...register("password")}
          />
        </label>

        <label htmlFor="">
          Confirmar Senha
          <p>{errors.confirmPassword?.message as string | undefined}</p>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
        </label>

        <label htmlFor="">
          Bio
          <p>{errors.bio?.message as string | undefined}</p>
          <input
            type="text"
            placeholder="Fale sobre voce"
            {...register("bio")}
          />
        </label>

        <label htmlFor="">
          Contato
          <p>{errors.contact?.message as string | undefined}</p>
          <input
            type="text"
            placeholder="Opcao de contato"
            {...register("contact")}
          />
        </label>

        <span>Selecionar Modulo</span>
        <select id="" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            1 modulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">2 modulo</option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            3 modulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">4 modulo</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </RegisterContainer>
  );
};
