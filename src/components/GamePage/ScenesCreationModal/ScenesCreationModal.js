import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "semantic-ui-react";

function ScenesCreationModal() {
  const [open, setOpen] = React.useState(false);
  const [newScene, setNewScene] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewScene(e.target.value);
  };
  const handleClick = () => {
    dispatch({
      type: "ADD_SCENES",
      payload: {
        label: newScene,
        id: Math.ceil(Math.random() * 100),
      },
    });
    setOpen(false);
  };

  return (
    <div className="focus">
      <Modal
        centered={false}
        open={open}
        // onClose={() => setOpen(false)}   {() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button>Editer Scène</Button>}
      >
        <Modal.Header>Description de la scène</Modal.Header>
        <Modal.Content>
          <Form>
            <input
              placeholder="Description de la scène"
              value={newScene || ""}
              onChange={(e) => handleChange(e)}
              type="text"
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleClick}>Valider la scène</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default ScenesCreationModal;
