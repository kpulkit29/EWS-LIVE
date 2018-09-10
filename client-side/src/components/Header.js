import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            EWS
          </Typography>
          <Button color="inherit"><Link to="/" style={{textDecoration:"none",color:"white"}}>Dashboard</Link></Button>
          <Button color="inherit"><Link to="/view" style={{textDecoration:"none",color:"white"}}>View Files</Link></Button>
          <Button color="inherit">About Dapp</Button>
        </Toolbar>
      </AppBar>
      <h1 style={{textAlign:"center",color:"white",position:"relative"}}>Ethereum Web Services</h1>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);