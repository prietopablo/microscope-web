import { useSelector } from "react-redux";
import { Input } from "semantic-ui-react";
import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  const username = useSelector((state) => state.user.username);
  const email = useSelector((state) => state.user.email);

  return (
    <div className="profile">
      {/* <Input id="profile-username" placeholder="New Username" /> 
      <Header />
      <Button onClick={this.open}>Show</Button>
       <Confirm
                open={this.state.open}
                onCancel={this.close}
                onConfirm={this.close}
             /> */}
      <Header />
      <form
        className="profile--form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Input
          className="profile--form-input"
          placeholder="Nom d'utilisateur"
          type="text"
          value={username || ""}
        />
        <Input
          className="signup--form-input"
          placeholder="Email"
          type="email"
          value={email || ""}
        />
      </form>
    </div>
  );
}

export default Profile;
