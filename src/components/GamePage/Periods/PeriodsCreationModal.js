import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosInstance } from "requests";
import { Button, Form, Modal } from "semantic-ui-react";

function PeriodsCreationModal() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [newPeriods, setNewPeriods] = useState();
  const [newPosition, setNewPosition] = useState();
  const handleChangePeriod = (e) => {
    setNewPeriods(e.target.value);
  };
  const handleChangePosition = (e) => {
    setNewPosition(e.target.value);
  };
  const gameId = useSelector((state) => state.game.gameId);
  const { id } = useParams();
  const periods = useSelector((state) => state.game.periods);

  console.log("periods >>>>>>>>>>>>>>>>>>", periods);
  const handleClick = async () => {
    const response = await axiosInstance.post(`/game/${gameId || id}/ongoing`, {
      parentType: "game",
      cardType: "period",
      text: newPeriods,
      // TODO: tone sur toutes les cards
      tone: false,
      parentId: gameId || id,
      previous_card_position: 1,
    });

    console.log("response de la création de periode", response);

    dispatch({
      type: "ADD_PERIODS",
      payload: {
        text: newPeriods,
        id: response.data.card.id,
        events: [],
        position: newPosition,
      },
    });
    setOpen(false);
    setNewPeriods("");
  };
  // console.log("create period text", newPeriods);

  return (
    <div className="period-creation">
      <Modal
        centered={false}
        open={open}
        onOpen={() => setOpen(true)}
        trigger={<Button>Editer période</Button>}
      >
        <Modal.Header>Description de la période</Modal.Header>
        <Modal.Content>
          <Form>
            <input
              placeholder="Tell us more"
              value={newPeriods || ""}
              onChange={(e) => handleChangePeriod(e)}
              type="text"
            />
            <input
              placeholder="Position de la période"
              value={newPosition || ""}
              onChange={(e) => handleChangePosition(e)}
              type="number"
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleClick}>Valider la période</Button>
          <Button onClick={() => setOpen(false)}>Anuler</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default PeriodsCreationModal;
