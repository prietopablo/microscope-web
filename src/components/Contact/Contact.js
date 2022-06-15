import Header from "../Header/Header";
import { Button } from "semantic-ui-react";
import './Contact.css';

function Contact() {
    return (
        <div className="contact">
          <Header />
          <form 
            className="contact-form"
            onSubmit={(event) => {
                event.preventDefault();
            }}
          >
           <input
             className="form"
             type="text"
             placeholder="Pseudo"
           />
           <input
             className="form"
             type="text"
             placeholder="Objet"
           />
           <input
             className="message"
             type="text"
             placeholder="Votre message"
            />
            
            <Button id="button" inverted color="black" type="submit">Envoyer</Button>
            
              
          </form>
        </div>

    );
}

export default Contact;
