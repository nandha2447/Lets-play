import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import sport from './../../assets/sport.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class RoomCard extends React.Component {
    render() {
  const { classes, room, onOptOut, onJoin } = this.props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={sport} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {room.sport_name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {room.ground_name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {room.location_address} - {room.time_bound}
                </Typography>
              </Grid>
              <Grid item container justify='flex-end'>
                <Button variant="contained" color="secondary" onClick={()=>onOptOut}>
                  Opt out
                </Button>
                <Button variant="contained" color="primary" style={{marginLeft: '10px'}} onClick={onJoin}>
                  Join
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{room.joined}/{room.player_capacity}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
}

export default withStyles(styles)(RoomCard);