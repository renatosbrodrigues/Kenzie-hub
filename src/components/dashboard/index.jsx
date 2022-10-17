import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/KenzieHubLogo.png";
import TechsContainer from "../techsContainer";
import { DashBoardContainer } from "./styles";

export const DashBoard = () => {
  const { name } = useParams();
  const courseModule = localStorage.getItem("course_module");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    return navigate("/");
  }

  return (
    <DashBoardContainer>
      <header>
        <img src={logo} alt="" />{" "}
        <button
          type="button"
          onClick={() => {
            handleLogout();
          }}
        >
          Sair
        </button>
      </header>
      <div className="greetingContainer">
        <h1>Ola, {name}</h1> <p> {courseModule} </p>
      </div>

      <div className="mainContainer">
        <TechsContainer></TechsContainer>
      </div>
    </DashBoardContainer>
  );
};
