import { Box, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import bookmarksAddButtonStyles from "./styles";

const BookmarksAddButton = ({ handleOpenModal }) => {
  const classes = bookmarksAddButtonStyles();
  return (
    <>
      <Box className={classes.box}>
        <IconButton
          className={classes.addButton}
          color="inherit"
          aria-label="Add Bookmark"
          onClick={handleOpenModal}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </>
  );
};
export default BookmarksAddButton;
