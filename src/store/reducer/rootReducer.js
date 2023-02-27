import { combineReducers } from "redux";
import {flashCardForm,createGroupImageName,imageTermsURL} from "./creatFlashCard";
import { term, terms } from "./flashCards";


const rootReducer = combineReducers({
    flashCardForm:flashCardForm,
    createGroupImageName:createGroupImageName,
    imageTermsURL:imageTermsURL,
    term:term,
    terms:terms
});

export default rootReducer;