import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="app-header">
          <div className="container-header">
            <Link className="link-header" to="/">
              <img src={Logo} className="App-logo" alt="logo" />
            </Link>
            <h1>Microscope-Web</h1>
          </div>
        </header>
    );
}

export default Header;
