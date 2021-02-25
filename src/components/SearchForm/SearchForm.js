import { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import SearchIcon from "@material-ui/icons/Search";
import searchFormStyles from "./styles";

const Search = ({ type }) => {
  const classes = searchFormStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://corsanywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=chrome&q=${query}`
      );
      const suggestedAnswers = await response.json();
      setOptions(suggestedAnswers[1]);
    })();
  }, [query]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = (e, value) => {
    return (document.location.href = `https://www.${type}.com/${
      type === "duckduckgo" ? "" : "search"
    }?${type === "yandex" ? "text" : "q"}=${value}`);
  };

  return (
    <Autocomplete
      className={classes.root}
      id="asynchronous-demo"
      open={open}
      onChange={handleChange}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      openOnFocus={false}
      options={options}
      forcePopupIcon={false}
      noOptionsText="No results"
      disableClearable={true}
      renderInput={(params) => (
        <TextField
          className={classes.input}
          {...params}
          variant="outlined"
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search in ${type.toUpperCase()}`}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              </>
            ),
          }}
        />
      )}
    />
  );
};
export default Search;
