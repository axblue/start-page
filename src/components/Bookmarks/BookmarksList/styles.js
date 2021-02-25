import { makeStyles } from "@material-ui/core";
const bookmarksListStyles = makeStyles({
  grid: ({ cols }) => ({
    justifyContent: cols !== 0 ? "flex-start" : "center",
  }),
  item: {
    display: "flex",
    justifyContent: "center",
  },
});
export default bookmarksListStyles;
