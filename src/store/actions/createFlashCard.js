import { ADD_TERM, DELETE_TERM, SUBMIT } from "../../constants/actions"
import { ADD_URL, EMPTY_URL, SET_NAME, SET_URL } from "../../constants/create-flash-card";

const onSubmit = (payload) =>{
    return {type : SUBMIT,payload:payload};
}

const addNewTerm = (payload) => {
     return {type:ADD_TERM,payload:payload};
}


const deleteTerm = (payload) => {
     return {type:DELETE_TERM,payload:payload};
}

const setCreateGroupImageName = (payload)=>{
    return {type:SET_NAME,payload:payload};
}


const setTermImageURL = (payload)=> {
     return {type:SET_URL,payload:payload}
}

const addTermImageURL = () => {
     return {type:ADD_URL};
}

const emptyTermsImageURL = () => {
     return {type:EMPTY_URL};
}


export {onSubmit,addNewTerm,deleteTerm,setCreateGroupImageName,setTermImageURL,addTermImageURL,emptyTermsImageURL};