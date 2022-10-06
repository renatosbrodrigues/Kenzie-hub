import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

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
    console.log(data);
  };

  return (
    <div className="registerContainer styledComponent">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Crie sua Conta</h1>
        <p>rapido e gratis, vamos nessa</p>

        <p>{errors.name?.message}</p>
        <label htmlFor="">
          nome
          <input type="text" placeholder="Seu nome" {...register("name")} />
        </label>

        <p>{errors.email?.message}</p>
        <label htmlFor="">
          Email
          <input type="email" placeholder="Seu Email" {...register("email")} />
        </label>

        <p>{errors.password?.message}</p>
        <label htmlFor="">
          Senha
          <input
            type="password"
            placeholder="Sua senha"
            {...register("password")}
          />
        </label>

        <p>{errors.confirmPassword?.message}</p>
        <label htmlFor="">
          Confirmar Senha
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
        </label>

        <p>{errors.bio?.message}</p>
        <label htmlFor="">
          Bio
          <input
            type="text"
            placeholder="Fale sobre voce"
            {...register("bio")}
          />
        </label>

        <p>{errors.contact?.message}</p>
        <label htmlFor="">
          Contato
          <input
            type="text"
            placeholder="Opcao de contato"
            {...register("contact")}
          />
        </label>

        <span>Selecionar Modulo</span>
        <select name="" id="">
          <option value="1">1 modulo</option>
          <option value="2">2 modulo</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
