import React from 'react';
import { connect } from 'react-redux';

// Components
import Smurf from './Smurf';

// Actions
import { getSmurfs } from '../actions';

 class SmurfDisplay extends React.Component {

    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return (
            <div>
                {this.isLoading ? <p>Loading Smurfs ....</p> : this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
                {this.error === '' ? null : <p>{this.error}</p>}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.