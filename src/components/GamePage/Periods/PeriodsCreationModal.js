import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "semantic-ui-react";

function PeriodsCreationModal() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [newPeriods, setNewPeriods] = useState();
  const handleChange = (e) => {
    setNewPeriods(e.target.value);
  };
  const handleClick = () => {
    dispatch({
      type: "ADD_PERIODS",
      payload: {
        label: newPeriods,
        id: Math.ceil(Math.random() * 100),
      },
    });
    setOpen(false);
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
              onChange={(e) => handleChange(e)}
              type="text"
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleClick}>Valider la période</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default PeriodsCreationModal;
