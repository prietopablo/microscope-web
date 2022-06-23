import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./HomePageLinks.css";

function HomePageLinks({ handleLogout }) {
  const navigate = useNavigate();
  const isConnected = useSelector((state) => state.user.isConnected);

  return !isConnected ? (
    <div className="nav">
      <Button inverted className="nav--link" onClick={() => navigate("/login")}>
        Se connecter
      </Button>
      <Button
        inverted
        className="nav--link"
        onClick={() => navigate("/signup")}
      >
        Inscription
      </Button>
    </div>
  ) : (
    <div className="nav">
      <Button
        inverted
        className="nav--link"
        onClick={() => navigate("/profile")}
      >
        Mon profil
      </Button>
      <Button inverted className="nav--link" onClick={handleLogout}>
        Déconnexion
      </Button>
    </div>
  );
}

HomePageLinks.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default HomePageLinks;
