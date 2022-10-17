import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { goodNotify, badNotify } from "../components/toast";
import { UserContext } from "./userContext";
import TechCard from "../components/techsContainer/TechCard";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { techs, setTechs } = useContext(UserContext);

  async function createTech(data) {
    try {
      const res = await api.post("/users/techs", data);

      const info = res.data;

      console.log(info);

      setTechs([...techs, data]);

      goodNotify("tech criada com sucesso!");
    } catch (error) {
      console.log(error);

      badNotify("algo deu errado ao criar a tech!");
    }
    setLoading((prevState) => !prevState);
  }

  async function deleteTech(id) {
    try {
      const res = await api.delete(`users/techs/${id}`);

      const removedTech = techs.filter((tech) => id !== tech.id);

      setTechs(removedTech);

      console.log(res);

      goodNotify("Tech deletada com sucesso!");
    } catch (error) {
      console.log(error);

      badNotify("algo deu errado ao tentar deletar a tech!");
    }
  }

  return (
    <TechContext.Provider value={{ createTech, deleteTech, loading }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
