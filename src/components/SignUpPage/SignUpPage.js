import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { sendSignup, updateSignupForm } from '../../actions/signupActions';
import './SignUpPage.css';
import Header from '../Header/Header';

function SignUpPage() {

    const dispatch = useDispatch();
    const emailSignup = useSelector((state) => state.emailSignup);
    const passwordSignup = useSelector((state) => state.passwordSignup);
    const username = useSelector((state) => state.username);

    return (
        <div className="signup">
            <Header />
            <form 
                className="signup--form"
                onSubmit={(event) => {
                    event.preventDefault();
                    dispatch(sendSignup());
                    }}
            >
                <input
                className="signup--form-input"
                placeholder="Nom d'utilisateur"
                type="text"
                value={username}
                onChange={(event) => {
                    dispatch(updateSignupForm('username', event.target.value));

                }}
                />
                <input
                className="signup--form-input"
                placeholder="Email"
                type="email"
                value={emailSignup}
                onChange={(event) => {
                    dispatch(updateSignupForm('emailSignup', event.target.value));

                }}
                />
                <input
                className="signup--form-input"
                placeholder="Mot de passe"
                type="password"
                value={passwordSignup}
                onChange={(event) => {
                    dispatch(updateSignupForm('passwordSignup', event.target.value));

                }}
                />
                <Button id="signup--form-submit" inverted color="black" type="submit">Inscription</Button>
                
            </form>
        </div>
    )
}

SignUpPage.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};

// == Export
export default SignUpPage;