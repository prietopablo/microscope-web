import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Button, Card, Divider, Input } from "semantic-ui-react";
import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  const username = useSelector((state) => state.user.username);
  const email = useSelector((state) => state.user.email);
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  return (
    <div className="profile">
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
          className="profile--form-input"
          placeholder="Email"
          type="email"
          value={email || ""}
        />
        <Input
          className="profile--form-input pwd"
          placeholder="Mot de passe"
          type="password"
          value={""}
        />
        <Input
          className="profile--form-input"
          placeholder="Confirmer le mot de passe"
          type="password"
          value={""}
        />
        <Button inverted className="profile--form-submit" type="submit">
          Modifier
        </Button>
      </form>
      <Divider inverted />
      <h2 className="profile--title">Parties en cours</h2>
      <div className="profile--gamesSection">
        <Card.Group itemsPerRow={isDesktop ? 4 : 1}>
          <Card
            style={{ background: "rgb(35, 33, 61)" }}
            className="profile--game-card"
          >
            <Card.Content
              className="profile--game-card-header"
              header="Work In Progress"
            />
            <Card.Content
              description="Big picture de la partie ici : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          molestie nisl. Phasellus sit amet sollicitudin justo. Fusce bibendum
          finibus arcu vel consequat."
            />
          </Card>
          <Card
            style={{ background: "rgb(35, 33, 61)" }}
            className="profile--game-card"
          >
            <Card.Content
              className="profile--game-card-header"
              header="Work In Progress"
            />
            <Card.Content
              description="Big picture de la partie ici : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          molestie nisl. Phasellus sit amet sollicitudin justo. Fusce bibendum
          finibus arcu vel consequat."
            />
          </Card>
        </Card.Group>
      </div>
      <h2 className="profile--title">Parties archivées</h2>
      <div className="profile--gamesSection">
        <Card.Group itemsPerRow={isDesktop ? 4 : 1}>
          <Card
            style={{ background: "rgb(35, 33, 61)" }}
            className="profile--game-card"
          >
            <Card.Content
              className="profile--game-card-header"
              header="Work In Progress"
            />
            <Card.Content
              description="Big picture de la partie ici : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          molestie nisl. Phasellus sit amet sollicitudin justo. Fusce bibendum
          finibus arcu vel consequat."
            />
          </Card>
          <Card
            style={{ background: "rgb(35, 33, 61)" }}
            className="profile--game-card"
          >
            <Card.Content
              className="profile--game-card-header"
              header="Work In Progress"
            />
            <Card.Content
              description="Big picture de la partie ici : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          molestie nisl. Phasellus sit amet sollicitudin justo. Fusce bibendum
          finibus arcu vel consequat."
            />
          </Card>
          <Card
            style={{ background: "rgb(35, 33, 61)" }}
            className="profile--game-card"
          >
            <Card.Content
              className="profile--game-card-header"
              header="Work In Progress"
            />
            <Card.Content
              description="Big picture de la partie ici : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          molestie nisl. Phasellus sit amet sollicitudin justo. Fusce bibendum
          finibus arcu vel consequat."
            />
          </Card>
        </Card.Group>
      </div>
    </div>
  );
}

export default Profile;
