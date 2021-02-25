import React from "react";
import { Menu, MenuItem, Typography } from "@material-ui/core";

const initialState = {
  mouseX: null,
  mouseY: null,
};

export default function ContextMenu({ item }) {
  const [state, setState] = React.useState(initialState);

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  return (
    <div onContextMenu={handleClick} style={{ cursor: "context-menu" }}>
      <Typography>Lorem ipsum</Typography>
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
        <MenuItem onClick={() => console.log(item.id)}>Удалить</MenuItem>
      </Menu>
    </div>
  );
}
