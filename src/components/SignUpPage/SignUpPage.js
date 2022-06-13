import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateLoginForm } from '../../actions/loginActions';
import Logo from '../../assets/Logo.svg';
import './SignUpPage.css';

function SignUpPage() {

    const dispatch = useDispatch();
    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);
    const pseudo = useSelector((state) => state.pseudo);

    return (
        <div className="signup">
            <header className="App-header">
                <div className="header">
                    <Link to="/">
                        <img src={Logo} className="App-logo" alt="logo" />
                    </Link>
                    <h1>Microscope-Web</h1>
                </div>
            </header>

            <form 
                className="signup--form"
                onSubmit={(event) => {
                event.preventDefault();
                }}
            >
                <input
                className="signup--form-input"
                placeholder="Nom d'utilisateur"
                type="text"
                value={pseudo}
                onChange={(event) => {
                    dispatch(updateLoginForm('pseudo', event.target.value));

                }}
                />
                <input
                className="signup--form-input"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(event) => {
                    dispatch(updateLoginForm('email', event.target.value));

                }}
                />
                <input
                className="signup--form-input"
                placeholder="Mot de passe"
                type="password"
                value={password}
                onChange={(event) => {
                    dispatch(updateLoginForm('password', event.target.value));

                }}
                />
                <button className="signup--form-submit" type="submit">
                Inscription
                </button>
            </form>
        </div>
    )
}

SignUpPage.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
};

// == Export
export default SignUpPage;