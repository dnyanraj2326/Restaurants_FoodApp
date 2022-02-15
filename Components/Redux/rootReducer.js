import { combineReducers } from "redux";
import foodReducers from '../Redux/Foods/food-reducers';

const rootReducer = combineReducers({
    order:foodReducers,
});

export default rootReducer;