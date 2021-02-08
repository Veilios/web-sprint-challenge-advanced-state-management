import React from 'react';
import { connect } from 'react-redux';

class Smurf extends React.Component {
    render() {

        const { smurf } = this.props;

        return(<div data-testid="smurf" className="card">
                <div className="card-body" >
                    <h5 className="card-title">{smurf.name}</h5>
                    <h6>"{smurf.nickname}"</h6>
                    <h6>{smurf.position}</h6>
                    <p className="card-text">{smurf.descrtiption}</p>
                </div>
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.