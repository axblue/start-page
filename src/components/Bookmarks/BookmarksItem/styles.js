import { makeStyles } from "@material-ui/core";
const bookmarksItemStyles = makeStyles({
  root: {
    textAlign: "center",
    width: "100%",
    padding: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  action: {
    height: "100%",
  },
  title: {
    fontSize: "1.5vh",
    marginTop: 5,
    marginBottom: 0,
  },
  media: {
    textAlign: "center",
    height: 30,
    width: 30,
    borderRadius: 8,
    filter: "drop-shadow(0 0 5px rgba(100,0,0, .1))",
  },
  progress: {
    height: 30,
    width: 30,
  },
  progressBg: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
});
export default bookmarksItemStyles;
