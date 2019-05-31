import React from 'react';
import { connect } from 'react-redux';
import { fetchAllLocations } from '../../reducers/interests';

class Interests extends React.Component {
    componentDidMount(){
        this.props.fetchLocations();
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interests);