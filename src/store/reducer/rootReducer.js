import { combineReducers } from "redux";
import { onSubmit } from "./onSubmit";


const rootReducer = combineReducers({
    flashCardForm:onSubmit
});

export default rootReducer;