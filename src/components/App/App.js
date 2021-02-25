import { Box, Container } from "@material-ui/core";
import { useLocalStorage } from "hooks/useLocalStorage";
import Bookmarks from "components/Bookmarks";
import SearchForm from "components/SearchForm";
import Settings from "components/Settings";
import appStyles from "./styles.js";

const initialOptions = {
  columns: 2,
  spacing: 1,
  searchType: "google",
  widthContainer: 2,
  modeTheme: 0,
  background: "",
  isBrandColor: true,
  isSearchForm: true,
};

const widthContainer = ["sm", "md", "lg"];

const App = () => {
  const [options, setOptions] = useLocalStorage("options", initialOptions);
  const classes = appStyles({ background: options.background });

  return (
    <>
      <Box className={classes.box}>
        <Container
          maxWidth={
            options.widthContainer === 1
              ? widthContainer[0]
              : widthContainer[options.widthContainer - 1]
          }
        >
          {options.isSearchForm ? (
            <SearchForm type={options.searchType} />
          ) : null}
          <Bookmarks options={options} />
        </Container>
      </Box>

      <Settings options={options} setOptions={setOptions} />
    </>
  );
};

export default App;
