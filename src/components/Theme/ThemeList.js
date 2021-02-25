import React, { useContext, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { themes } from "./config";
import { Grid, Box } from "@material-ui/core";
import { ThemeContext } from "context/ThemeContext";
const themeArr = Object.keys(themes).map((theme) => [
  theme,
  themes[theme].present,
  themes[theme].link,
]);

const themeStyles = makeStyles({
  box: {
    width: 40,
    height: 40,
    borderRadius: "50%",

    "&:hover": {
      cursor: "pointer",
    },
  },
  active: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "2px solid #fff",
  },
});

const ThemeList = () => {
  const { modeTheme, changeModeTheme } = useContext(ThemeContext);
  const classes = themeStyles();

  const handleClick = useCallback(
    (theme, link) => {
      console.log(theme, link);
      window.open(link, "_blank");
      changeModeTheme(theme);
    },
    [changeModeTheme]
  );

  return (
    <>
      <Grid container justify="space-between" spacing={1}>
        {themeArr.map((item, index) => {
          const [theme, present, link] = item;
          return (
            <Grid key={index} item xs={2}>
              <Box
                className={modeTheme === theme ? classes.active : classes.box}
                style={{
                  background: `linear-gradient(to right, ${present[0]} 50%,  ${present[1]} 50%)`,
                }}
                onClick={() => handleClick(theme, link)}
              ></Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default ThemeList;
