import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

  const handleClick = () => {
    dispatch({
      type: "ADD_PERIODS",
      payload: {
        label: newPeriods,
        id: Math.ceil(Math.random() * 100),
        events: [],
        position: newPosition,
      },
    });
    setOpen(false);
    setNewPeriods("");
  };
  console.log("create period text", newPeriods);

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
