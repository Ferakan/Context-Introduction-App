import React, { Component } from 'react';
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
import {withLanguageContext} from '../contexts/LanguageContext';

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

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { classes } = this.props;
    const {isDarkMode, toggleTheme} = this.context;
    const {language} = this.props.languageContext;
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
}

export default withLanguageContext(withStyles(styles)(Navbar));
