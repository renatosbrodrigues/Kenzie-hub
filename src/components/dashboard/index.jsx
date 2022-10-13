import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/KenzieHubLogo.png";
import { GlobalStyles } from "../../globalstyling";
import { DashBoardContainer } from "./styles";

export const DashBoard = () => {
  const { name } = useParams();
  const courseModule = localStorage.getItem("course_module");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    return navigate(-1);
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
        <h2>Que pena! ainda estamos em desenvolvimento :(</h2>
        <h3>Nossa aplicacao esta em desenvolvimento, em breve novidades</h3>
      </div>
    </DashBoardContainer>
  );
};
