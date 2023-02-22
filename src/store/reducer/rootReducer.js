import { combineReducers } from "redux";
import {flashCardForm,createGroupImageName,imageTermsURL} from "./creatFlashCard";


const rootReducer = combineReducers({
    flashCardForm:flashCardForm,
    createGroupImageName:createGroupImageName,
    imageTermsURL:imageTermsURL
});

export default rootReducer;