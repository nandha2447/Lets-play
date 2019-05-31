import React from 'react';
import { connect } from 'react-redux';
import { fetchAllLocations, fetchAllSports } from '../../reducers/interests';
import { AppBar, createStyles, withStyles, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';

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

class Interests extends React.Component {
    componentDidMount(){
        this.props.fetchLocations();
        this.props.fetchSports();
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLocations: () => {
            dispatch(fetchAllLocations())
        },
        fetchSports: () => {
            dispatch(fetchAllSports())
        },
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Interests));