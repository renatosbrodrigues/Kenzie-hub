import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { StylingTechContainer } from "./styles";
import TechCard from "./TechCard";
import Modal from "../NewTechModal/index";

type techProps = {
  title: string;
  status: string;
  id: string;
};

const TechsContainer = () => {
  const [modal, setModal] = useState(false);

  const { techs } = useContext(UserContext);

  return (
    <StylingTechContainer>
      {modal && <Modal setModal={setModal}></Modal>}
      <div className="techContainerHeader">
        <h3>Tecnologias</h3>{" "}
        <button
          type="button"
          onClick={() => {
            setModal(true);
            console.log(modal);
          }}
        >
          +
        </button>
      </div>
      <div className="techContainerContent">
        {techs.length > 0 ? (
          <>
            {techs.map((tech: techProps) => {
              return (
                <TechCard
                  title={tech.title}
                  status={tech.status}
                  id={tech.id}
                ></TechCard>
              );
            })}
          </>
        ) : (
          <>
            <h2>voce ainda nao tem nenhuma tech </h2>
          </>
        )}
      </div>
    </StylingTechContainer>
  );
};

export default TechsContainer;
