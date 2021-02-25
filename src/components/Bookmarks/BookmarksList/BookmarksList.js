import { useState, useCallback } from "react";
import { Grid, Menu, MenuItem } from "@material-ui/core";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import BookmarksItem from "components/Bookmarks/BookmarksItem";
import BookmarksAddButton from "components/Bookmarks/BookmarksAddButton";
import bookmarksListStyles from "./styles";

const initialState = {
  id: "",
  anchorEl: null,
};

const SortableItem = SortableElement(
  ({ bookmark, handleClick, options, classes, updateBookmark }) => {
    return (
      <>
        <Grid item xs={options.columns} className={classes.item}>
          <BookmarksItem
            key={bookmark.id}
            bookmark={bookmark}
            onContextMenu={handleClick}
            options={options}
            updateBookmark={updateBookmark}
          />
        </Grid>
      </>
    );
  }
);

const SortableList = SortableContainer(
  ({
    bookmarks,
    options,
    handleClick,
    classes,
    onOpenModal,
    updateBookmark,
  }) => {
    return (
      <Grid
        container
        spacing={options.spacing}
        className={classes.grid}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {bookmarks.map((bookmark, index) => {
          return (
            <SortableItem
              index={index}
              key={bookmark.id}
              bookmark={bookmark}
              handleClick={handleClick}
              options={options}
              classes={classes}
              onOpenModal={onOpenModal}
              updateBookmark={updateBookmark}
            />
          );
        })}
        <Grid item xs={options.columns} className={classes.item}>
          <BookmarksAddButton handleOpenModal={onOpenModal} />
        </Grid>
      </Grid>
    );
  }
);

const BookmarksList = ({
  bookmarks,
  setBookmarks,
  onDeleteBookmark,
  updateBookmark,
  onOpenModal,
  options,
}) => {
  const classes = bookmarksListStyles({ cols: bookmarks.length });
  const [anchorEl, setAnchorEl] = useState(initialState);

  const handleClick = (event, id) => {
    event.preventDefault();
    console.log(id);
    setAnchorEl({ id: id, anchorEl: event.currentTarget });
  };

  const handleDeleteBookmark = useCallback(() => {
    onDeleteBookmark(anchorEl.id);
    setAnchorEl(initialState);
  }, [onDeleteBookmark, anchorEl.id]);

  const handleClose = () => {
    setAnchorEl(initialState);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setBookmarks(arrayMove(bookmarks, oldIndex, newIndex));
  };

  return (
    <>
      <Grid
        container
        spacing={options.spacing}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <SortableList
          bookmarks={bookmarks}
          updateBookmark={updateBookmark}
          handleClick={handleClick}
          options={options}
          onOpenModal={onOpenModal}
          onSortEnd={onSortEnd}
          classes={classes}
          axis="xy"
          distance={1}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl.anchorEl}
          keepMounted
          open={Boolean(anchorEl.anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleDeleteBookmark}>Удалить</MenuItem>
        </Menu>
      </Grid>
    </>
  );
};

export default BookmarksList;
