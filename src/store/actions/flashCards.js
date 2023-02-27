import {  SET_TERM, SET_TERMS } from "../../constants/terms"


export const setTerm = (payload) => {
    return {type:SET_TERM,payload:payload};
}

export const setTerms = (payload) => {
    return {type:SET_TERMS,payload:payload};
}