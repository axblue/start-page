import React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";

const initialValues = { url: "", title: "" };

const BookmarksAddDialog = ({ open, onCloseDialog, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const name = e.target.name;
    return setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const handleBlur = () => {
    return setValues({
      ...values,
      title: values.url.replace(/(^\w+:|^)\/\//, "").split(".")[0],
    });
  };

  useEffect(() => {
    setValues(initialValues);
  }, [onCloseDialog]);

  return (
    <Dialog open={open} maxWidth={"xs"} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Добавление сайта</DialogTitle>
      <DialogContent>
        <TextField
          onChange={(e) => handleChange(e)}
          name="url"
          value={values.url}
          autoFocus
          margin="dense"
          id="url"
          label="Адрес"
          type="text"
          fullWidth
          onBlur={handleBlur}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="title"
          value={values.title}
          margin="dense"
          id="name"
          label="Название"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog} color="primary">
          Отмена
        </Button>
        <Button onClick={() => onSubmit(values)} color="primary">
          Готово
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default BookmarksAddDialog;
