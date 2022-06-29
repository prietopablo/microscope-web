import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "requests";
import { Button, Modal, Form } from "semantic-ui-react";

function FocusCreationModal() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [newFocus, setNewFocus] = useState();
  const handleChange = (e) => {
    setNewFocus(e.target.value);
  };
  const gameId = useSelector((state) => state.game.gameId);
  const userId = useSelector((state) => state.user.userId);

  const handleClick = async () => {
    const response = await axiosInstance.post(`/game/${gameId}/ongoing`, {
      cardType: "focus",
      text: newFocus,
      author_id: userId,
    });

    console.log(response);

    if (response.data.message) {
      dispatch({
        type: "ADD_FOCUS",
        payload: {
          label: newFocus,
          id: Math.ceil(Math.random() * 100),
        },
      });
    }

    setOpen(false);
  };
  console.log("create focus text", newFocus);

  return (
    <div className="focus">
      <Modal
        centered={false}
        open={open}
        // onClose={() => setOpen(false)}   {() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button>Editer focus</Button>}
      >
        <Modal.Header>Description du focus</Modal.Header>
        <Modal.Content>
          <Form>
            <input
              placeholder="Description du focus"
              value={newFocus || ""}
              onChange={(e) => handleChange(e)}
              type="text"
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleClick}>Valider le focus</Button>
          <Button onClick={() => setOpen(false)}>Anuler</Button>
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
