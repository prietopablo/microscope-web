/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

// TODO: PropTypes !!!!

import React from "react";
import { Button, Modal } from "semantic-ui-react";
import "./SettingsModal.css";

function SettingsModal({ bigPicture, palettes }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button inverted>Paramètres de la partie</Button>}
    >
      <Modal.Content>
        <div className="settings">
          <div className="settings--big-picture">
            <h2>Vue d'ensemble</h2>
            <p>{bigPicture}</p>
          </div>
          <div className="settings--palettes">
            <h2>Palettes</h2>
            <h3>Oui :</h3>
            <ul>
              {palettes &&
                palettes.map(
                  (palette) =>
                    palette.status && (
                      <li key={"oui" + palette.id}> {palette.text}</li>
                    )
                )}
            </ul>
            <h3>Non :</h3>
            <ul>
              {palettes &&
                palettes.map(
                  (palette) =>
                    !palette.status && (
                      <li key={"non" + palette.id}> {palette.text}</li>
                    )
                )}
            </ul>
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default SettingsModal;

{
  /* <Form>
    <TextArea placeholder='Tell us more' />
  </Form> */
}
