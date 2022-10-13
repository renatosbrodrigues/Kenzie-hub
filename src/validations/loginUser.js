import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("email obrigatorio!").email("email invalido!"),

  password: yup
    .string()
    .required("senha obrigatoria!")
    .min(8, "minimo 8 digitos!"),
});

export default schema;
