import React from 'react';
import { connect } from 'react-redux';
import { fetchAllLocations, fetchAllSports, updateInterests } from '../../reducers/interests';
import { AppBar, createStyles, withStyles, Toolbar, Typography, IconButton, Grid, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';
import { get } from 'lodash';

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
        },
        interests: {
            height: 'calc(100vh - 64px)',
        },
        dropdownWidth: {
            width: '15%',
            // paddingTop: 10,
            // paddingBottom: 10,
        },
        nextButton: {
            marginTop: 20,
        }
    });

class Interests extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectedLocation: '',
            selectedSport: '',
        }
    }
    componentDidMount(){
        this.props.fetchLocations();
        this.props.fetchSports();
    }
    componentDidUpdate() {
        if (get(this.props, 'id', undefined)) {
          this.props.history.push('/home');
        }
    }
    handleChange = (event) => {
       this.setState({
           ...this.state,
           [event.target.name]: event.target.value,
       });
    }
    handleNext = () => {
        this.props.updateInterests({
            preferredLocation: this.state.selectedLocation,
            preferredSport: this.state.selectedSport,
        });
    }
    render() {
        const { classes, locationList, sportsList } = this.props;
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
                <Grid className={classes.interests} container direction="column" justify="center" alignItems="center" >
                    <FormControl className={classes.dropdownWidth}>
                        <InputLabel htmlFor="location">Preferred Location</InputLabel>
                        <Select
                        fullWidth
                        value={this.state.selectedLocation}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'selectedLocation',
                            id: 'location',
                        }}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            locationList.map(item => (
                                <MenuItem value={item.id}>
                                    <em>{item.address}</em>
                                </MenuItem>
                            ))
                        }
                        </Select>
                    </FormControl>

                    <FormControl className={classes.dropdownWidth}>
                    <InputLabel htmlFor="location">Preferred Sport</InputLabel>
                        <Select
                        fullWidth
                        value={this.state.selectedSport}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'selectedSport',
                            id: 'location',
                        }}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            sportsList.map(item => (
                                <MenuItem value={item.id}>
                                    <em>{item.sport_name}</em>
                                </MenuItem>
                            ))
                        }
                        </Select>
                    </FormControl>
                    <Button onClick={this.handleNext} variant="contained" color="primary" className={classes.nextButton}>
                        Next
                    </Button>
                    </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locationList: state.interests.locationList,
        sportsList: state.interests.sportsList,
        id: state.interests.id,
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
        updateInterests: ({preferredLocation, preferredSport}) => {
            dispatch(updateInterests({
                preferredLocation,
                preferredSport,
            }))
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Interests));