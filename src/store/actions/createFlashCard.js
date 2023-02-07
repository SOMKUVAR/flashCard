import { ADD_TERM, DELETE_TERM, FOCUS_TERM, SUBMIT } from "../../constants/actions"

const onSubmit = () =>{
    return {type : SUBMIT,payload:null};
}

const addNewTerm = (payload) => {
     return {type:ADD_TERM,payload:payload};
}

const focusEnterTermForm = (payload) => {
    return {type:FOCUS_TERM,payload:payload};
}

const deleteTerm = (payload) => {
     return {type:DELETE_TERM,payload:payload};
}

export {onSubmit,addNewTerm,focusEnterTermForm,deleteTerm};