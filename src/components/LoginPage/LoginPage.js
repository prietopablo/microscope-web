import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendLogin, updateLoginForm } from "../../actions/loginActions";
import { Input, Button } from "semantic-ui-react";
import "./LoginPage.css";
import { useEffect } from "react";
import Header from "components/Header/Header";
// import SecondaryHeader from "components/SecondaryHeader/SecondaryHeader";

function LoginPage() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);
  const isConnected = useSelector((state) => state.user.isConnected);
  const navigate = useNavigate();
  console.log("username vide ", username);

  useEffect(() => {
    if (isConnected) navigate("/");
  }, [isConnected]);

  return (
    <div className="login">
      {/* <SecondaryHeader /> */}
      <Header />
      <form
        className="login--form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(sendLogin());
        }}
      >
        <Input
          className="login--form-input"
          placeholder="Nom d'utilisateur"
          type="text"
          value={username || ""}
          onChange={(event) => {
            dispatch(updateLoginForm("username", event.target.value));
          }}
        />
        <Input
          className="login--form-input"
          placeholder="Mot de passe"
          type="password"
          value={password || ""}
          onChange={(event) => {
            dispatch(updateLoginForm("password", event.target.value));
          }}
        />
        <Button inverted className="login--form-submit" type="submit">
          Connexion
        </Button>
        <p className="login--form-message">
          Pas de compte ? <Link to="/signup">Inscrivez-vous</Link>
        </p>
      </form>
    </div>
  );
}

// == Export
export default LoginPage;
