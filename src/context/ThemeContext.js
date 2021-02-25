import { useMemo, createContext } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import { themes } from "components/Theme/config";
import { useLocalStorage } from "hooks";

const themeArr = Object.keys(themes).map((theme) => [
  theme,
  themes[theme].present,
]);

const ThemeContext = createContext({
  theme: themeArr[0][0],
  changeTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [modeTheme, setModeTheme] = useLocalStorage(
    "modeTheme",
    themeArr[0][0]
  );

  const theme = useMemo(() => {
    return createMuiTheme(themes[modeTheme]);
  }, [modeTheme]);

  const changeModeTheme = (theme) => {
    if (modeTheme !== theme) {
      setModeTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ modeTheme, changeModeTheme }}>
      <MuiThemeProvider theme={theme}> {children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
export { ThemeProvider, ThemeContext };
