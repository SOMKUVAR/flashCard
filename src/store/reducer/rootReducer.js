import { combineReducers } from "redux";
import {flashCardForm,createGroupImageName,imageTermsURL} from "./creatFlashCard";
import { flashCard, term, terms } from "./flashCards";


const rootReducer = combineReducers({
    flashCardForm:flashCardForm,
    createGroupImageName:createGroupImageName,
    imageTermsURL:imageTermsURL,
    term:term,
    terms:terms,
    flashCard:flashCard
});

export default rootReducer;