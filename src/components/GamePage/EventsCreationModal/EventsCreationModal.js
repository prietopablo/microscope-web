import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "semantic-ui-react";

// eslint-disable-next-line react/prop-types
function EventsCreationModal({ periodId }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [newEvent, setNewEvent] = useState();
  const handleChange = (e) => {
    setNewEvent(e.target.value);
  };
  // const periodId = useSelector((state) => state.game.periodId);

  const handleClick = () => {
    dispatch({
      type: "ADD_EVENTS",
      payload: {
        label: newEvent,
        id: Math.ceil(Math.random() * 100),
        periodId,
        scenes: [],
      },
    });
    setOpen(false);
    setNewEvent("");
  };

  return (
    <Modal
      centered={false}
      open={open}
      // onClose={() => setOpen(false)}   {() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Editer évènement</Button>}
    >
      <Modal.Header>Description évènement</Modal.Header>
      <Modal.Content>
        <Form>
          <input
            placeholder="Description évènement"
            value={newEvent || ""}
            onChange={(e) => handleChange(e)}
            type="text"
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClick}>Valider évènement</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default EventsCreationModal;
