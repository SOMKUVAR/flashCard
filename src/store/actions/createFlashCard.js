import { ADD_TERM, DELETE_TERM, SUBMIT } from "../../constants/actions"

const onSubmit = (payload) =>{
    return {type : SUBMIT,payload:payload};
}

const addNewTerm = (payload) => {
     return {type:ADD_TERM,payload:payload};
}


const deleteTerm = (payload) => {
     return {type:DELETE_TERM,payload:payload};
}

export {onSubmit,addNewTerm,deleteTerm};