import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../api/requests";
import { GlobalStyles } from "../../globalstyling";
import { RegisterContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/KenzieHubLogo.png";
import { ToastContainer } from "react-toastify";

export const Register = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("nome obrigatorio!")
      .max(15, "no maximo 15 letras!"),

    email: yup
      .string()
      .required("email obrigatorio!")
      .email('email invalido! Ex: "exemplo@mail.com"'),

    password: yup
      .string()
      .required("senha obrigatoria!")
      .matches(/[A-Z]|[a-z]/, "deve conter pelo menos uma letra!")
      .matches(/(\W)|_/, "deve conter ao menos um caractere especial!")
      .matches(/[1-9]/, "deve conter pelo menos um numero!")
      .min(8, "deve ter no minimo 8 digitos!"),

    confirmPassword: yup
      .string()
      .required("nescessario confirmar a senha!")
      .oneOf([yup.ref("password"), null], "as senhas devem ser identicas"),

    bio: yup.string().required("biografia obrigatoria!"),

    contact: yup.string().required("opcao de contato obrigatoria!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    createUser(data);
  };

  const navigate = useNavigate();

  return (
    <RegisterContainer>
      <GlobalStyles></GlobalStyles>
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
          <p>{errors.name?.message}</p>
          <input type="text" placeholder="Seu nome" {...register("name")} />
        </label>

        <label htmlFor="">
          Email
          <p>{errors.email?.message}</p>
          <input type="email" placeholder="Seu Email" {...register("email")} />
        </label>

        <label htmlFor="">
          Senha
          <p>{errors.password?.message}</p>
          <input
            type="password"
            placeholder="Sua senha"
            {...register("password")}
          />
        </label>

        <label htmlFor="">
          Confirmar Senha
          <p>{errors.confirmPassword?.message}</p>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
        </label>

        <label htmlFor="">
          Bio
          <p>{errors.bio?.message}</p>
          <input
            type="text"
            placeholder="Fale sobre voce"
            {...register("bio")}
          />
        </label>

        <label htmlFor="">
          Contato
          <p>{errors.contact?.message}</p>
          <input
            type="text"
            placeholder="Opcao de contato"
            {...register("contact")}
          />
        </label>

        <span>Selecionar Modulo</span>
        <select name="" id="" {...register("course_module")}>
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
    </RegisterContainer>
  );
};
