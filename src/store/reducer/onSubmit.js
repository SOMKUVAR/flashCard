import { ADD_TERM, DELETE_TERM, FOCUS_TERM, SUBMIT } from "../../constants/actions";

const intialState = {
    createGroup:{
        "create_Group":"hii",
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

const onSubmit = (state=intialState,action)=>{
    switch(action.type){
        case SUBMIT:
           {
             console.log('submit button click');
             return state;
           }
        case ADD_TERM:
            { 
               let terms = state.terms;
               terms.push(action.payload);
               return {...state,terms}; 
            }
        case FOCUS_TERM:
         {   let terms = state.terms;
            terms = terms.map(term => {
            if(action.payload === term.id){term.focus = true;}
             return term;
            });
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

export {onSubmit};

