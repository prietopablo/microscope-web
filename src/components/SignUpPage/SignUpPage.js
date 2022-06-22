import { Input, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { sendSignup, updateSignupForm } from "../../actions/signupActions";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import Header from "../Header/Header";

function SignUpPage() {
  const dispatch = useDispatch();
  const emailSignup = useSelector((state) => state.emailSignup);
  const passwordSignup = useSelector((state) => state.passwordSignup);
  const username = useSelector((state) => state.username);
  const isSignedUp = useSelector((state) => state.isSignedUp);
  const navigate = useNavigate();

  return isSignedUp ? (
    navigate("/login")
  ) : (
    <div className="signup">
      <Header />
      <form
        className="signup--form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(sendSignup());
        }}
      >
        <Input
          className="signup--form-input"
          placeholder="Nom d'utilisateur"
          type="text"
          value={username}
          onChange={(event) => {
            dispatch(updateSignupForm("username", event.target.value));
          }}
        />
        <Input
          className="signup--form-input"
          placeholder="Email"
          type="email"
          value={emailSignup}
          onChange={(event) => {
            dispatch(updateSignupForm("emailSignup", event.target.value));
          }}
        />
        <Input
          className="signup--form-input"
          placeholder="Mot de passe"
          type="password"
          value={passwordSignup}
          onChange={(event) => {
            dispatch(updateSignupForm("passwordSignup", event.target.value));
          }}
        />

        <Button className="signup--form-submit" inverted type="submit">
          Inscription
        </Button>
      </form>
    </div>
  );
}

// == Export
export default SignUpPage;
