import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosInstance } from "requests";
import { Button, Modal, Form } from "semantic-ui-react";
import "./FocusCreationModal.css";

function FocusCreationModal() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [newFocus, setNewFocus] = useState();
  const handleChange = (e) => {
    setNewFocus(e.target.value);
  };
  const gameId = useSelector((state) => state.game.gameId);
  const userId = useSelector((state) => state.user.userId);
  const { id } = useParams();

  const handleClick = async () => {
    const response = await axiosInstance.post(`/game/${gameId || id}/ongoing`, {
      cardType: "focus",
      text: newFocus,
      author_id: userId,
    });

    console.log("response de la création de focus", response);

    if (response.data.focus) {
      dispatch({
        type: "ADD_FOCUS",
        payload: {
          text: newFocus,
          id: response.data.focus.id,
          author_id: response.data.focus.author_id,
        },
      });
    }

    setOpen(false);
  };
  console.log("create focus text", newFocus);

  return (
    <div className="create-focus">
      <Modal
        centered={false}
        open={open}
        // onClose={() => setOpen(false)}   {() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <Button className="create-focus--button">Créer un focus</Button>
        }
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
