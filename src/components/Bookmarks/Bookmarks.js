import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { Box } from "@material-ui/core";
import { useLocalStorage } from "hooks";
import { withHttp } from "helpers";
import BookmarksList from "components/Bookmarks/BookmarksList";
import BookmarksAddDialog from "components/Bookmarks/BookmarksAddDialog";

const Bookmarks = ({ options }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

  const openDialog = () => setDialogIsOpen(true);

  const closeDialog = () => setDialogIsOpen(false);

  const addBookmark = ({ title, url }) => {
    closeDialog();
    return setBookmarks([
      ...bookmarks,
      {
        id: uuid4(),
        title: title.toUpperCase(),
        url: withHttp(url),
        icon: "",
        brandColor: "",
      },
    ]);
  };

  const updateBookmark = (id, data) => {
    const [color, icon] = data;
    return setBookmarks(
      bookmarks.map((bookmark) =>
        bookmark.id === id
          ? { ...bookmark, brandColor: color, icon: icon }
          : bookmark
      )
    );
  };

  const deleteBookmark = (id) => {
    return setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  return (
    <>
      <Box>
        <BookmarksList
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
          onDeleteBookmark={deleteBookmark}
          updateBookmark={updateBookmark}
          options={options}
          onOpenModal={openDialog}
        />
        <BookmarksAddDialog
          open={dialogIsOpen}
          onSubmit={addBookmark}
          onCloseDialog={closeDialog}
          count={bookmarks.length}
        />
      </Box>
    </>
  );
};
export default Bookmarks;
