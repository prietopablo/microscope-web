import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { sendLogin, updateLoginForm } from '../../actions/loginActions';
import './LoginPage.css';
import Header from '../Header/Header';

function LoginPage() {

  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);

  return (
    <div className="login">
      <Header />
      <form 
        className="login--form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(sendLogin());
        }}
      >
        <input
          className="login--form-input"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => {
            dispatch(updateLoginForm('email', event.target.value));

          }}
        />
        <input
          className="login--form-input"
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(event) => {
            dispatch(updateLoginForm('password', event.target.value));

          }}
        />
        <Button id="login--form-submit" inverted color="black" type="submit">Connection</Button>
      
      </form>
    </div>
  );
}

LoginPage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

// == Export
export default LoginPage;
