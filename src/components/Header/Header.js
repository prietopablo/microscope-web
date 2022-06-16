import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/LogoWhite.svg';
import './Header.css';

function Header() {
    return (
        <header className="app-header">
          <div className="container-header">
            <Link className="link-header" to="/">
              <img src={LogoWhite} className="App-logo" alt="logo" />
            </Link>
            <h1>microscope web</h1>
          </div>
        </header>
    );
}

export default Header;
