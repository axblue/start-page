import { makeStyles } from "@material-ui/core";
const settingsStyles = makeStyles({
  root: {
    width: 360,
    padding: "10px 20px",
  },
  row: {
    marginBottom: 15,
  },
  iconBtn: {
    position: "fixed",
    bottom: 0,
    right: 10,
  },
  formControl: {},
  shapeCircle: {
    backgroundColor: "red",
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
});

export default settingsStyles;
