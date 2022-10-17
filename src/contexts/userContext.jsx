import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { badNotify } from "../components/toast";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState([]);
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
        }
      }
      setLoading(false);
    }

    getUser();
  }, []);

  const navigate = useNavigate();
  async function handleLogin(data) {
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

  async function createUser(data) {
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
