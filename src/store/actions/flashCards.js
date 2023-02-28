import {  SET_FLASHCARD, SET_TERM, SET_TERMS } from "../../constants/terms"


export const setTerm = (payload) => {
    return {type:SET_TERM,payload:payload};
}

export const setTerms = (payload) => {
    return {type:SET_TERMS,payload:payload};
}

export const setFlashCard = (payload) => {
    return {type:SET_FLASHCARD,payload:payload};
}