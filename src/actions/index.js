import axios from 'axios';

export const CLEAR_ERROR = "CLEAR_ERROR";
export const FETCH_SMURFS = "FETCH_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

export const getSmurfs = () => dispatch => {
    dispatch({type: CLEAR_ERROR});
    dispatch({type: FETCH_SMURFS});
    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("Res: ", res.data);
            dispatch({type:SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("Error: ", err);
            dispatch({type: FAILED, payload: err.message});
        })
};

export const addSmurf = newSmurf => dispatch => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(({data}) => {
            dispatch({ type: ADD_SMURF, payload: data})
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })
};


//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.