import Header from "../Header/Header";
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

            <button 
              type="submit"
              className="button"
            >
            Envoyer</button>
           
              
          </form>
        </div>

    );
}

export default Contact;
