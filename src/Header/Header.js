import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

function Header() {
    return (
        <header className="App-header">
          <Link to="/">
            <img src={Logo} className="App-logo" alt="logo" />
          </Link>
          <h1>Microscope-Web</h1>
        </header>
    );
}

export default Header;
