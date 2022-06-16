import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendLogin, updateLoginForm } from '../../actions/loginActions';
import { Input, Button } from 'semantic-ui-react'
import './LoginPage.css';
import Header from '../Header/Header';

function LoginPage() {

  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const password = useSelector((state) => state.password);
  const isConnected = useSelector((state) => state.isConnected);
  const navigate = useNavigate();

  return (
   isConnected ? navigate('/') : 
    <div className="login">
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
          value={username || ''}
          onChange={(event) => {
            dispatch(updateLoginForm('username', event.target.value));

          }}
        />
        <Input
          className="login--form-input"
          placeholder="Mot de passe"
          type="password"
          value={password || ''}
          onChange={(event) => {
            dispatch(updateLoginForm('password', event.target.value));

          }}
        />
        <Button 
          inverted
          className="login--form-submit"
          type="submit"
          >
            Connexion
        </Button>
      </form>
    </div>
  );
}

// == Export
export default LoginPage;
