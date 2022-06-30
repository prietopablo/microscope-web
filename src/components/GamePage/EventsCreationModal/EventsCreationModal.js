import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosInstance } from "requests";
import { Button, Form, Modal } from "semantic-ui-react";

// eslint-disable-next-line react/prop-types
function EventsCreationModal({ periodId }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [newEvent, setNewEvent] = useState();
  const handleChange = (e) => {
    setNewEvent(e.target.value);
  };
  const gameId = useSelector((state) => state.game.gameId);
  const { id } = useParams();
  // const periods = useSelector((state) => state.game.periods);
  // const periodId = useSelector((state) => state.game.periodId);
  // const actualPeriod = periods.find((period) => period.id === periodId);

  const handleClick = async () => {
    const response = await axiosInstance.post(`/game/${gameId || id}/ongoing`, {
      parentType: "period",
      cardType: "event",
      text: newEvent,
      tone: false,
      parentId: periodId,
      previous_card_position: 1,
    });
    console.log("response de la création de evenement", response);

    dispatch({
      type: "ADD_EVENTS",
      payload: {
        label: newEvent,
        id: response.data.card.id,
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
      trigger={
        <Button inverted className="nav--link-center">
          Créer un évènement
        </Button>
      }
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
        <Button color="black" onClick={handleClick}>
          Valider évènement
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default EventsCreationModal;
