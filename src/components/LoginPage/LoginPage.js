import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateLoginForm } from '../../actions/loginActions';
import axios from 'axios';
import Logo from '../../assets/Logo.svg';
import './LoginPage.css';

function LoginPage() {

  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/login', {
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="login">
    
      <header className="App-header">
        <div className="header">
          <Link to="/">
            <img src={Logo} className="App-logo" alt="logo" />
          </Link>
          <h1>Microscope-Web</h1>
        </div>
      </header>

      <form 
        className="login--form"
        onSubmit={handleSubmit}
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
        <button className="login--form-submit" type="submit">
          Connexion
        </button>
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
