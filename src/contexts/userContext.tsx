import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { badNotify } from "../components/toast";
import { useLocation, useNavigate } from "react-router-dom";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserContext {
  user: string;
  setUser?: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  techs: Array<object>;
  setTechs: React.Dispatch<React.SetStateAction<Array<object>>>;

  handleLogin: (data: object) => void;
  createUser: (data: object) => void;
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState<object[]>([] as object[]);
  const location = useLocation();

  useEffect(() => {
    async function getUser() {
      const userToken = localStorage.getItem("authToken");

      if (userToken) {
        try {
          api.defaults.headers.authorization = `Bearer ${userToken}`;

          const { data } = await api.get("/profile");
          setUser(data);
          setTechs(data.techs);
        } catch (error) {
          localStorage.clear();
          console.log(error);
        }
      }
      setLoading(false);
    }

    getUser();
  }, []);

  const navigate = useNavigate();
  async function handleLogin(data: object) {
    try {
      const res = await api.post("/sessions", data);

      const info = res.data;

      const name = info.user.name.replace(/\s+/g, "");

      setUser(info);

      localStorage.clear();
      localStorage.setItem("authToken", info.token);
      localStorage.setItem("course_module", info.user.course_module);

      const destination = location.state?.from?.pathname || `dashboard/${name}`;

      navigate(destination, { replace: true });
    } catch (error) {
      console.log(error);
      badNotify("e-mail ou senha incorretos!");
    }
  }

  async function createUser(data: object) {
    try {
      const register = await api.post("/users", data);
      const info = register.data;
      console.log(info);
      navigate("/");
    } catch (error) {
      console.log(error);
      badNotify("preencha todos os dados corretamente!");
    }
  }

  return (
    <UserContext.Provider
      value={{ handleLogin, createUser, user, loading, techs, setTechs }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
