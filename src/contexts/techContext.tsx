import React, { createContext, useContext, useState } from "react";
import api from "../services/api";
import { goodNotify, badNotify } from "../components/toast";
import { UserContext } from "./userContext";

interface iTechProviderProps {
  children: React.ReactNode;
}

interface iTechContext {
  loading: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  createTech: (data: object) => void;
  deleteTech: (id: string) => void;
}

interface tTech {
  title: string;
  [id: string]: any;
  status: string;
}

//verificar como estao armazenados os dados dentro de 'techs'
//criar uma interface especifica pro parametro 'techs' de removedTech

export const TechContext = createContext({} as iTechContext);

const TechProvider = ({ children }: iTechProviderProps) => {
  const [loading, setLoading] = useState(true);
  const { techs, setTechs } = useContext(UserContext);

  async function createTech(data: object) {
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

  async function deleteTech(id: string) {
    try {
      const res = await api.delete(`users/techs/${id}`);

      const removedTech = techs.filter((tech: any) => id !== tech.id);

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
