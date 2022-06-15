import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import './HomePageLinks.css';

function HomePageLinks() {
    
    const navigate = useNavigate();
    
    return(
        <div className="nav">
            <Button inverted color="black" onClick={() => navigate('/login')}>Se connecter</Button>
            <Button inverted color="black" onClick={() => navigate('/signup')}>Inscription</Button>
        </div>

    );
}

export default HomePageLinks;
