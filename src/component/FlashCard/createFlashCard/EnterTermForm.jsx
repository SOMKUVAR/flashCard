import { ErrorMessage, Field } from "formik";
import { useDispatch } from "react-redux";
import { deleteTerm, focusEnterTermForm } from "../../../store/actions";
import DeleteButton from "../../Layout/Delete";
import EditButton from "../../Layout/EditButton";
import Input from "../../Layout/Input";
import SelectImage from "../../Layout/SelectImage";
import SmallTextArea from "../../Layout/SmallTextArea";


const EnterTermForm = (props) => {
    const dispatch = useDispatch();
    const onEdit = () => {
        document.getElementById(props.id).children[0].children[1].focus();
        dispatch(focusEnterTermForm(props.id));
    }
    const onDelete = () =>{
          dispatch(deleteTerm(props.id));
    }

    return (
        <div className="flex flex-wrap items-center justify-center flex-col xl:flex-row mb-5">
            <div className="rounded-full items-center justify-center h-8 w-8 flex text-white bg-red-600 mx-3 mt-3">{props.index+1}</div>
            <div id= {props.id} className="w-full sm:w-auto flex justify-center">
            <Field component={Input} label="Enter Term*" name={`${'terms['+props.index+'].term'}`} />
            <ErrorMessage>{(errMsg)=>{<div></div>}}</ErrorMessage>
            </div>
            <Field component={SmallTextArea} label="Enter Defination*" name={`${'terms['+props.index+'].defination'}`} />
            <div className="flex flex-wrap items-center">
            <div className="mt-5 ml-2">
                <SelectImage />
            </div>
            <div className="mt-5 ml-3">
                    <DeleteButton onClick={onDelete}/>
                    <EditButton onClick={onEdit} />
            </div>
            </div>
            
        </div>
    )
}

export default EnterTermForm;