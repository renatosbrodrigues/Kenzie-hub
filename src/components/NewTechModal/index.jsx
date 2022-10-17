import { StyledModalContainer } from "./styles";
import schema from "../../validations/newTech";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechContext } from "../../contexts/techContext";

const NewTechModal = ({ setModal }) => {
  const { createTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    createTech(data);
  };

  return (
    <StyledModalContainer>
      <div className="modal">
        <div className="modalHeader">
          <h2>Cadastrar Tecnologia</h2>{" "}
          <button
            type="button"
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </button>
        </div>
        <form className="modalForm" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            Nome
            <p>{errors.title?.message}</p>
            <input
              type="text"
              placeholder="Nome da Tech"
              {...register("title")}
            />
          </label>
          <label htmlFor="">
            Selecionar Status
            <select name="" id="" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </label>

          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyledModalContainer>
  );
};

export default NewTechModal;
