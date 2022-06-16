import Header from "../Header/Header";
import { Input, Button, Image, List } from 'semantic-ui-react';
import LogoWhite from '../../assets/LogoWhite.svg';
import './ArchivedGames.css';

function ArchivedGames() {
    return(
        <div className="archived-games">
            <Header />
            <h2 className="archived-title">Parties archivées</h2>
            <Input id="archived-input" size='big' icon='search' placeholder='Search...' />
            
            <List divided verticalAlign='middle'>
              <List.Item>
                <List.Content floated='right'>
                  <Button>Ouvrir</Button>
                </List.Content>
                  <Image avatar src={LogoWhite} />
                <List.Content>Jeu 1</List.Content>
              </List.Item>
            </List>
        </div>

    );
}

export default ArchivedGames;
