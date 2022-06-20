import React from "react";
import {
  Button,
  Modal,
  Form,
  TextArea,
  Menu,
  Dropdown,
} from "semantic-ui-react";

function FocusCreationModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="focus">
      <Modal
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button>Création de période</Button>}
      >
        <Modal.Content>
          <Menu vertical>
            <Dropdown text="Arc" pointing="left" className="link item">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Dropdown
                    text="periode"
                    pointing="left"
                    className="link-item"
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item> Période avant</Dropdown.Item>
                      <Dropdown.Item> Période apres</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>Evènement</Dropdown.Item>
                <Dropdown.Item>Scène</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
          <Menu vertical>
            <Dropdown text="Arc" pointing="left" className="link item">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Dropdown
                    text="periode"
                    pointing="left"
                    className="link-item"
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item> Période avant</Dropdown.Item>
                      <Dropdown.Item> Période apres</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>Evènement</Dropdown.Item>
                <Dropdown.Item>Scène</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
          <Form>
            <TextArea placeholder="Tell us more" />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default FocusCreationModal;
