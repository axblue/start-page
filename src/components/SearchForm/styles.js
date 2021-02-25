import { makeStyles } from "@material-ui/core";
const searchFormStyles = makeStyles({
  root: {
    paddingBottom: 32,
    paddingTop: 32,
    maxWidth: 500,
    margin: "0 auto",
    "& .MuiAutocomplete-inputRoot": {
      borderRadius: 28,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  input: {
    boxShadow: "0 5px 30px -5px rgba(0, 0, 0, 0.2)",
    "& .MuiOutlinedInput-input": {
      padding: "10px 0",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#33bfff",
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
    },
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#33bfff",
      },
    },
    "&:focus": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#33bfff",
      },
    },
  },
});
export default searchFormStyles;
