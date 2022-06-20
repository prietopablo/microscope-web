import Focus from './Focus/Focus';
import FocusCreationModal from './FocusCreationModal/FocusCreationsModal';
import './GamePage.css';
import SettingsModal from './SettingsModal/SettingsModal';
import StartEnd from './StartEnd/StartEnd';

function GamePage() {
    return (
       <div className="">
       <div className="players-usernames">
            <div className="player-username">Adlen</div>
            <div className="player-username">Jeremy</div>
            <div className="player-username">Victor</div>
            <div className="player-username">Pablo</div>
            
        </div>
        <div className="focus">
        <SettingsModal />
        <Focus />
        <FocusCreationModal />
        </div>
        <StartEnd />
        </div>
    );
}

export default GamePage;
