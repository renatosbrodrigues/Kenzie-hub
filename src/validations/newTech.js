import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Nome obrigatorio!"),
});

export default schema;
