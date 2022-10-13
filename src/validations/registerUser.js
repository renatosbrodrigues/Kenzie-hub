import * as yup from "yup";

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

export default schema;
