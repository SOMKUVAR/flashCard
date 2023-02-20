import { combineReducers } from "redux";
import flashCardForm from "./creatFlashCard";


const rootReducer = combineReducers({
    flashCardForm:flashCardForm
});

export default rootReducer;