import { makeStyles } from "@material-ui/core";
const appStyles = makeStyles({
  box: ({ background }) => ({
    display: "flex",
    background: `url(${background}) center center / cover no-repeat`,
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "center",
  }),
});
export default appStyles;
