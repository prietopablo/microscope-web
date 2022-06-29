import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendLogin, updateLoginForm } from "../../actions/loginActions";
import { Form, Button, Message } from "semantic-ui-react";
import "./LoginPage.css";
import { useEffect } from "react";
import Header from "components/Header/Header";
// import SecondaryHeader from "components/SecondaryHeader/SecondaryHeader";

function LoginPage() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);
  const isConnected = useSelector((state) => state.user.isConnected);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();
  console.log("username vide ", username);

  useEffect(() => {
    if (isConnected) navigate("/");
  }, [isConnected]);

  return (
    <div className="login">
      {/* <SecondaryHeader /> */}
      <Header />
      <Form
        className="login--form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(sendLogin());
        }}
      >
        <Message error header="Action Forbidden" content={error} />
        <Form.Input
          // error={{
          //   content: "Please enter a valid email username",
          //   pointing: "below",
          // }}
          className="login--form-input"
          placeholder="Nom d'utilisateur"
          type="text"
          value={username || ""}
          onChange={(event) => {
            dispatch(updateLoginForm("username", event.target.value));
          }}
        />
        <Form.Input
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
      </Form>
    </div>
  );
}

// == Export
export default LoginPage;
