import {FETCH_WEATHER} from '../actions/index';


// action which contains data from fetch weather api
export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            ///state.push (action.payload.data); // don't manipulate that to state data, totally worng
            return [action.payload.data, ...state];
    }
    
    return state;
}