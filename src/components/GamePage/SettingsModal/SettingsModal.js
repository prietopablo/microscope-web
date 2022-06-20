import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import './SettingsModal';

function SettingsModal() {
    const [open, setOpen] = React.useState(false);

    return(
        <Modal
        
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button>Paramètre de la partie</Button>}
      >
        <Modal.Header>Paramètres</Modal.Header>
        <Modal.Content>

        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </Modal.Actions>
      </Modal>

    );
}

export default SettingsModal;


{/* <Form>
    <TextArea placeholder='Tell us more' />
  </Form> */}