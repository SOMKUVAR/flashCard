import { combineReducers } from "redux";
import { onSubmit } from "./onSubmit";


const rootReducer = combineReducers({
    intialValues:onSubmit
});

export default rootReducer;