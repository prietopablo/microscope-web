import Header from "../Header/Header";
import { Input, Button, Confirm } from 'semantic-ui-react';
import './Profile.css';

function Profile() {

    return(
        <div>
            <Header />
              <Input id="profile-username"  placeholder='New Username' />
              <Button onClick={this.open}>Show</Button>
              <Confirm
                open={this.state.open}
                onCancel={this.close}
                onConfirm={this.close}
             />
        </div>

    );
}

export default Profile;
