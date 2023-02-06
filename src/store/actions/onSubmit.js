import { SUBMIT } from "../../constants/actions"

const onSubmit = (payload) =>{
    return {type : SUBMIT,payload:payload};
}

export {onSubmit};