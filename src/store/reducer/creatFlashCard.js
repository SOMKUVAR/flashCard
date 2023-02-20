import { ADD_TERM, DELETE_TERM, SUBMIT } from "../../constants/actions";

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
            "image":"",
            "focus":false
        }
    ]
};

const flashCardForm = (state=intialState,action)=>{
    switch(action.type){
        case SUBMIT:
           {
             console.log(action.payload);
             localStorage.setItem('state',JSON.stringify(action.payload));
             return action.payload;
           }
        case ADD_TERM:
            { 
               let terms = state.terms;
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

export default flashCardForm;

