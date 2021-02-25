import { useState } from "react";
import {
  Grid,
  Slider,
  Switch,
  Select,
  Drawer,
  MenuItem,
  TextField,
  Typography,
  IconButton,
  InputLabel,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import ChangeTheme from "../Theme/ThemeList";
import SettingsIcon from "@material-ui/icons/Settings";
import settingsStyles from "./styles";

const Settings = ({ options, setOptions }) => {
  const [state, setState] = useState(false);

  const classes = settingsStyles();

  const toggleDrawerStatus = () => {
    setState(true);
  };
  const closeDrawer = () => {
    setState(false);
  };

  const handleChangeSwitch = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    return setOptions({
      ...options,
      [name]: checked,
    });
  };
  const handleChangeSlider = (event, name, value) => {
    console.log(value);
    console.log(options);
    return setOptions({
      ...options,
      [name]: value,
    });
  };

  const handleChangeInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    return setOptions({
      ...options,
      [name]: value,
    });
  };

  return (
    <>
      <IconButton className={classes.iconBtn} onClick={toggleDrawerStatus}>
        {!state ? <SettingsIcon /> : null}
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        open={state}
        onClose={closeDrawer}
        anchor={"right"}
      >
        <Grid container className={classes.root} justify="center">
          <Typography variant="h5" component="span" gutterBottom>
            Options
          </Typography>
          <Grid container spacing={2} className={classes.row}>
            <Grid item xs={6}>
              <Typography gutterBottom>Spacing</Typography>
              <Slider
                defaultValue={options.spacing}
                step={1}
                marks
                min={1}
                max={4}
                onChangeCommitted={(event, value) =>
                  handleChangeSlider(event, "spacing", value)
                }
              />
              <Typography gutterBottom>Container size</Typography>
              <Slider
                defaultValue={options.widthContainer}
                step={1}
                marks
                min={1}
                max={3}
                onChangeCommitted={(event, value) =>
                  handleChangeSlider(event, "widthContainer", value)
                }
              />
            </Grid>
            <Grid item xs={6}>
              <Typography id="discrete-sliderd" gutterBottom>
                Bookmark size
              </Typography>
              <Slider
                defaultValue={options.columns}
                step={1}
                marks
                min={options.widthContainer === 1 ? 2 : 1}
                max={4}
                onChangeCommitted={(event, value) =>
                  handleChangeSlider(event, "columns", value)
                }
              />
              <FormControl className={classes.formControl} fullWidth={true}>
                <InputLabel id="demo-simple-select-label">
                  Search system
                </InputLabel>
                <Select
                  value={options.searchType}
                  onChange={handleChangeInput}
                  disabled={!options.isSearchForm}
                  name="searchType"
                >
                  <MenuItem value={"google"}>Google</MenuItem>
                  <MenuItem value={"yandex"}>Yandex</MenuItem>
                  <MenuItem value={"duckduckgo"}>DuckDuckGo</MenuItem>
                  <MenuItem value={"bing"}>Bing</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            justify="space-between"
            className={classes.row}
          >
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={options.isBrandColor}
                    onChange={handleChangeSwitch}
                    name="isBrandColor"
                    color="primary"
                  />
                }
                label="Brand color"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={options.isSearchForm}
                    onChange={handleChangeSwitch}
                    name="isSearchForm"
                    color="primary"
                  />
                }
                label="Search form"
              />
            </Grid>
          </Grid>
          <Grid container justify="space-between" className={classes.row}>
            <Typography variant="subtitle1" gutterBottom align="center">
              Theme
            </Typography>
            <ChangeTheme />
          </Grid>
          <Grid container className={classes.row}>
            <Typography variant="subtitle1" gutterBottom align="center">
              Background image
            </Typography>
            <TextField
              fullWidth={true}
              name="background"
              placeholder="url image"
              value={options.background}
              onChange={handleChangeInput}
            />
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};
export default Settings;
