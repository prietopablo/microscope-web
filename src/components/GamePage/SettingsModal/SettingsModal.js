/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

// TODO: PropTypes !!!!

import React from "react";
import { Button, Modal } from "semantic-ui-react";
import "./SettingsModal";

function SettingsModal({ bigPicture, palettes }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Paramètre de la partie</Button>}
    >
      <Modal.Header>Paramètres</Modal.Header>
      <Modal.Content>
        <h2>Vue d'ensemble</h2> {bigPicture}
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
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
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
