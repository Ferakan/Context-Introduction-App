import React, { useContext } from 'react';
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";

import SearchIcon from "@material-ui/icons/Search";
 
import styles from './NavbarStyles';
import {ThemeContext} from '../contexts/ThemeContext';
import {LanguageContext} from '../contexts/LanguageContext';

const country = {
  english: {
    search: "Search",
    food: "🍔"
  },
  french: {
    search: "Chercher",
    food: "🥖"
  },
  portuguese: {
    search: "Buscar",
    food: "🥩"
  },
  spanish: {
    search: "Buscar",
    food: "🌮"
  }
}

function Navbar(props) {
  const { classes } = props;
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const {search, food} = country[language];

  return (
    <div className={classes.root}>
      <AppBar 
        position="static"
        color={isDarkMode ? "default" : "primary"}
      >
        <ToolBar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
          >
            <span role='img' aria-label="united states" >{food}</span>
          </IconButton>
          <Typography 
            className={classes.title}
            variant="h6"
            color="inherit"
          >
            Context App
          </Typography>
          <Switch onClick={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search} >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
           />
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
