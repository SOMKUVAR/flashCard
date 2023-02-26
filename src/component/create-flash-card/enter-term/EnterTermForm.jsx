import { ErrorMessage, Field } from "formik";
import { useDispatch } from "react-redux";
import { deleteTerm } from "../../../store/actions";
import DeleteButton from "../../UI/Delete";
import EditButton from "../../UI/EditButton";
import Input from "../../UI/Input";
import SelectImage from "./SelectImage";
import SmallTextArea from "../../UI/SmallTextArea";


const EnterTermForm = (props) => {
    const dispatch = useDispatch();
    const onEdit = () => {
        document.getElementById(props.id).children[0].children[1].focus();
    }
    const onDelete = () => {
        dispatch(deleteTerm(props.id));
    }

    return (
        <div className="flex flex-wrap items-start  justify-center flex-col xl:flex-row mb-5">
            <div className="rounded-full items-center justify-center h-8 w-8 flex text-white bg-red-600 mx-3 mt-8">{props.index + 1}</div>
            <div id={props.id} className="w-full sm:w-auto flex justify-center flex-col mb-3 xl:mb-0">
                <Field component={Input} label="Enter Term*" name={`terms[${props.index}].term`} />
                <ErrorMessage name={`terms[${props.index}].term`}>
                    {(err) => <div className="text-red-600 mb-3 w-11/12 sm:w-96 mx-3">{err}</div>}
                </ErrorMessage>
            </div>
            <div className="w-full sm:w-auto flex justify-center flex-col">
                <Field component={SmallTextArea} label="Enter Defination*" name={`terms[${props.index}.defination`} />
                <ErrorMessage name={`terms[${props.index}.defination`}>
                    {(err) => <div className="text-red-600 mb-3 w-11/12 sm:w-96 mx-3">{err}</div>}
                </ErrorMessage>
            </div>
            <div className="flex flex-wrap items-start mt-8">
                <div className="ml-2">
                   <Field component={SelectImage} name={`terms[${props.index}.image`} index={props.index} url={props.url}/>
                </div>
                <div className="ml-3 flex flex-col">
                    <DeleteButton onClick={onDelete} />
                    <EditButton onClick={onEdit} />
            </div>   
            </div>
        </div>
    )
}

export default EnterTermForm;