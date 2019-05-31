import React from 'react';
import { connect } from 'react-redux';
import { fetchAllLocations, fetchAllSports } from '../../reducers/interests';

class Interests extends React.Component {
    componentDidMount(){
        this.props.fetchLocations();
        this.props.fetchSports();
    }
    render() {
        return <h1>Interests {JSON.stringify(this.props.state)}</h1>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Interests);