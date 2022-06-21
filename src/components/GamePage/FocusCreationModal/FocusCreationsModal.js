import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "semantic-ui-react";

function FocusCreationModal() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [newFocus, setNewFocus] = useState();
  const handleChange = (e) => {
    setNewFocus(e.target.value);
  };
  const handleClick = () =>
    dispatch({
      type: "ADD_FOCUS",
      payload: {
        label: newFocus,
        id: Math.ceil(Math.random() * 100),
      },
    });
  console.log("create focus text", newFocus);

  return (
    <div className="focus">
      <Modal
        centered={false}
        open={open}
        // onClose={() => setOpen(false)}   {() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button>Focus</Button>}
      >
        <Modal.Header>Description du focus</Modal.Header>
        <Modal.Content>
          <Form>
            <input
              placeholder="Tell us more"
              value={newFocus || ""}
              onChange={(e) => handleChange(e)}
              type="text"
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={(handleClick, () => setOpen(false))}>
            Valider le focus
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default FocusCreationModal;

{
  /* <Menu vertical>
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
          </Menu> */
}
