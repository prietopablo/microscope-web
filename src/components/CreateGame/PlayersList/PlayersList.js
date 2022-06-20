import './PlayersList.css';

function PlayersList() {  
    return (
      <div className="players">
        <h2 className="players--title">Joueurs</h2>
        <ul className="players--list">
            <li className="players--list-item">
                Joueur 1
            </li>
            <li className="players--list-item">
                Joueur 2
            </li>
            <li className="players--list-item">
                Joueur 3
            </li>
            <li className="players--list-item">
                Joueur 4
            </li>
        </ul>
      </div>    
    );
}
  
// == Export
export default PlayersList;