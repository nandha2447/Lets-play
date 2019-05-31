import React from 'react'
import { AppBar, createStyles, withStyles, Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Menu, AccountCircle } from '@material-ui/icons';
import RoomCard from './../../components/RoomCard'
import { connect } from 'react-redux';
import { fetchRooms, requestJoin, requestOptout } from './../../reducers/rooms'

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
    componentDidMount() {
        this.props.fetchRooms();
    }

    handleJoin = (user_id) => (room_id) => {
        this.props.requestJoin(user_id, room_id);

    }

    handleOptOut = (user_id) => (room_id) => {
        this.props.requestOptOut(user_id, room_id);

    }

    render() {
        const { classes, roomList, user } = this.props;

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
                    {roomList.length && user && roomList.map(room => (

                        <Grid item xs={3}>
                            <RoomCard room={room} onJoin={this.handleJoin(user.id)} onOptOut={this.handleOptOut(user.id)} />
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
        user: state.user.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: () =>
            dispatch(fetchRooms()),
        requestJoin: (user_id, room_id) =>
            dispatch(requestJoin(user_id, room_id)),
        requestOptOut: (user_id, room_id) =>
            dispatch(requestOptout(user_id, room_id)),

    };
};



export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));