import Logo from '../App/Logo.svg';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login">
    
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <h1>Microscope-Web</h1>
      </header>
      <form className="form">
        <input className="input" type="email" placeholder="Pseudo"></input>
        <input className="input" type="password" placeholder="Mot de passe"></input>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

// == Export
export default LoginPage;
