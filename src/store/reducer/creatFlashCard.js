import { ADD_TERM, DELETE_TERM, SUBMIT } from "../../constants/actions";
import { ADD_URL, EMPTY_URL, SET_NAME, SET_URL } from "../../constants/create-flash-card";

const intialState = {
    createGroup:{
        "create_Group":"",
        "description":"",
        "image":null
    },
    terms : [
        {
            "id":new Date(),
            "term":"",
            "defination":"",
            "image":null
        }
    ]
};

const flashCardForm = (state=intialState,action)=>{
    switch(action.type){
        case SUBMIT:
           {
             let state1 = JSON.parse(localStorage.getItem('flashCards')) || [];
             state1.push(action.payload);
             localStorage.setItem('flashCards',JSON.stringify(state1));
             return state;
           }
        case ADD_TERM:
            { 
               let terms = state.terms;
               console.log(terms);
               terms.push(action.payload);
               return {...state,terms}; 
            }  
        case DELETE_TERM:
          { 
            let terms = state.terms;
            terms = terms.filter(term => action.payload !== term.id);
            return {...state,terms};
         }
        default:
            return state;
    }
}

const intitialGroupImageName = "No Chosen File";

const createGroupImageName = (state=intitialGroupImageName,action)=>{
    switch(action.type){
     case SET_NAME:
        return action.payload;
     default:
        return state;
    }
}

const intitialImageTermsURL = [null];

const imageTermsURL = (state=intitialImageTermsURL,action)=>{
    switch(action.type){
        case SET_URL:
          {
            let newState = state.map((item,ind)=>{
                if(ind === action.payload.ind)
                 return action.payload.value;
                 return item;
              });
              return newState;
          }
        case ADD_URL:
             return [...state,null];
        case EMPTY_URL:
            let newState = state.map(()=>null);
            return newState;
        default:
            return state;
    }
}



export  {flashCardForm,createGroupImageName,imageTermsURL};

