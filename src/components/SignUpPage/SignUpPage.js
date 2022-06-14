import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateSignupForm } from '../../actions/signupActions';
import './SignUpPage.css';
import Header from '../Header/Header';

function SignUpPage() {

    const dispatch = useDispatch();
    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);
    const pseudo = useSelector((state) => state.pseudo);

    return (
        <div className="signup">
            <Header />
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
                    dispatch(updateSignupForm('pseudo', event.target.value));

                }}
                />
                <input
                className="signup--form-input"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(event) => {
                    dispatch(updateSignupForm('email', event.target.value));

                }}
                />
                <input
                className="signup--form-input"
                placeholder="Mot de passe"
                type="password"
                value={password}
                onChange={(event) => {
                    dispatch(updateSignupForm('password', event.target.value));

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