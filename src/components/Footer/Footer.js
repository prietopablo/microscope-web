import { List } from "semantic-ui-react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <List.Content>
        <a className="footer--item" href="/contact">
          Contact
        </a>
      </List.Content>
    </div>
  );
}

export default Footer;
