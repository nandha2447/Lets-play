import React from 'react'
import { AppBar, createStyles, withStyles, Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Menu, AccountCircle } from '@material-ui/icons';
import RoomCard from './../../components/RoomCard'
import { connect } from 'react-redux';
import {fetchRooms} from './../../reducers/rooms'

const styles = (theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        cardContainer: {
            padding: 20,
        }
    });

class Home extends React.Component {
    componentDidMount(){
        this.props.fetchRooms();
    }
    render() {
        const { classes, roomList } = this.props;

        return (<div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Let's Play
            </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="User">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div className={classes.cardContainer}>
                <Grid container spacing={4}>
                    {roomList.length && roomList.map(room => (

                        <Grid item xs={3}>
                            <RoomCard room={room} />
                        </Grid>
                    ))}

                </Grid>
            </div>

        </div>);
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        roomList: state.rooms.rooms,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchRooms: () =>
        dispatch(fetchRooms()),
      
    };
  };



export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home));