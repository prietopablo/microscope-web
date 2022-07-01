import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosInstance } from "requests";
import { Button, Form, Modal } from "semantic-ui-react";

// eslint-disable-next-line react/prop-types
function ScenesCreationModal({ eventId, periodId }) {
  const [open, setOpen] = React.useState(false);
  const [newScene, setNewScene] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewScene(e.target.value);
  };
  const gameId = useSelector((state) => state.game.gameId);
  const { id } = useParams();

  const handleClick = async () => {
    const response = await axiosInstance.post(`/game/${gameId || id}/ongoing`, {
      parentType: "event",
      cardType: "scene",
      text: newScene,
      tone: false,
      parentId: eventId,
      previous_card_position: 0,
    });
    console.log("response de la création de evenement", response);

    dispatch({
      type: "ADD_SCENES",
      payload: {
        label: newScene,
        id: response.data.card.id,
        eventId,
        periodId,
      },
    });
    setOpen(false);
    setNewScene("");
  };

  return (
    <div className="focus">
      <Modal
        centered={false}
        open={open}
        // onClose={() => setOpen(false)}   {() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <Button size="tiny" inverted>
            Créer une scène
          </Button>
        }
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
          <Button size="small" color="black" onClick={handleClick}>
            Valider la scène
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default ScenesCreationModal;
