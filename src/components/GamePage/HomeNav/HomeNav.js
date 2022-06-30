/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./HomeNav.css";

function HomeNav() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate("/")}
      inverted
      size="tiny"
      className="lobby--submit game"
      type="button"
    >
      Retourner à l'acceuil
    </Button>
  );
}

export default HomeNav;
