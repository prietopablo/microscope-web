import Header from "../Header/Header";
import { Button, Form, Input, TextArea } from "semantic-ui-react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <Header />
      <Form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Input
          className="contact-form-input"
          type="text"
          placeholder="Nom d'utilisateur"
        />
        <Input className="contact-form-input" type="text" placeholder="Objet" />
        <Form.Field
          control={TextArea}
          className="contact-form-message"
          type="text"
          placeholder="Votre message"
        />

        <Button className="contact-form-button" inverted type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
