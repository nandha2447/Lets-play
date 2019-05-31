import React from 'react';
import { connect } from 'react-redux';

class Interests extends React.Component {
    render() {
        return <h1>Interests {JSON.stringify(this.props.state)}</h1>;
    }
}

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps)(Interests);