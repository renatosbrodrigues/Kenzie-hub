import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

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
    console.log(data);
  };

  const navigate = useNavigate();

  return (
    <div className="loginContainer  styledComponent">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <p>{errors.email?.message}</p>
        <label>
          Email
          <input type="email" placeholder="seu email" {...register("email")} />
        </label>

        <p>{errors.password?.message}</p>
        <label>
          Senha
          <input
            type="password"
            placeholder="sua senha"
            {...register("password")}
          />
        </label>

        <button type="submit">Entrar</button>

        <span>ainda nao tem uma conta?</span>

        <button
          type="button"
          onClick={() => {
            navigate("register");
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};
