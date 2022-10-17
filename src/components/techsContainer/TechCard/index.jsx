import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { TechContext } from "../../../contexts/techContext";

const TechCard = ({ title, status, id }) => {
  const { deleteTech } = useContext(TechContext);

  return (
    <div className="techCard">
      <p>{title}</p>

      <p>{status}</p>

      <button
        type="button"
        onClick={() => {
          deleteTech(id);
        }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default TechCard;
