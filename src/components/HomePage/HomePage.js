import { useNavigate } from 'react-router-dom';
import Logo from '../App/Logo.svg';

function HomePage() {
    const navigate = useNavigate();
    return(
    <div className="home"> 
        <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <h1>Microscope-Web</h1>
      </header>
      <div className="buttons">
      <button className="button" type="button">Jouer</button>
            <button className="button" type="button">Parties archivées</button>
            <button className="button" type="button" onClick={() => navigate('login')} >Se connecter</button> 
            <button className="button" type="button">Inscription</button>
        </div>
    </div>
    );
}

export default HomePage;
