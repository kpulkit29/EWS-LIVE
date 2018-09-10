import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function TitlebarGridList(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{background:"transparent"}}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div" style={{color:"white"}}>Click the Info Icon to view your files</ListSubheader>
        </GridListTile>
        {props.list.map(tile => (
          <GridListTile>
            <img src="images/file.svg" />
            <GridListTileBar
              title={`File size ${tile[1]} Kb`}
              subtitle={<span>Hash {tile[0]}</span>}
              actionIcon={<a href={`https://ipfs.io/ipfs/${tile[0]}`} target="_blank">
                <IconButton className={classes.icon}>
                  <InfoIcon/>
                </IconButton></a>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);