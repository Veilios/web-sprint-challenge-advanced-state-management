import { ADD_SMURF, CLEAR_ERROR, FAILED, FETCH_SMURFS, SUCCESS } from "../actions";

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
};

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case CLEAR_ERROR: {
            return {
                ...state, error: ''
            };
        };
        case FETCH_SMURFS: {
            return {
                ...state, isLoading: true, error: ''
            };
        };
        case FAILED: {
            return {
                ...state, isLoading: false, error: action.payload
            };
        };
        case SUCCESS: {
            return {
                ...state, isLoading: false, smurf: [...state.smurf, action.payload]
            }
        }
        case ADD_SMURF: {
            return {
                ...state, 
            }
        }
        default:
            return state;
    };
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary