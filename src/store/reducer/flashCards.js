import { SET_FLASHCARD, SET_TERM, SET_TERMS } from "../../constants/terms";

const intialFlashCard = {};

const flashCard = (state=intialFlashCard,action) => {
    switch(action.type){
        case SET_FLASHCARD:
          return JSON.parse(localStorage.getItem('flashCards'))[action.payload];
        default:
            return state;
    }
}

const intialStateTerm = {};
const term = (state = intialStateTerm,action) =>{
    switch(action.type){
        case SET_TERM:
          return action.payload;
        default:
            return state;
    }
}

const intialStateTerms=[];

const terms = (state = intialStateTerms,action) => {
    switch(action.type){
        case SET_TERMS:
            const terms = [];
            for(let i = 0;i <action.payload.total;i++)
             if(i !== action.payload.index)
               terms.push(`Card ${i+1}`);
            return terms;
        default:
            return state;
    }
}

export {term,terms,flashCard};