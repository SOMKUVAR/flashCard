import { SUBMIT } from "../../constants/actions";

const intialState = {
    createGroup:{
        "Create Group":"",
        "description":"",
        "image":null
    },
    terms : [
        {
            "term":"",
            "defination":"",
            "image":null
        }
    ]
};

const onSubmit = (state=intialState,action)=>{
    switch(action.type){
        case SUBMIT:
            return state;
        default:
            return state;
    }
}

export {onSubmit};

