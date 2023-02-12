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
    const onDelete = () => {
        dispatch(deleteTerm(props.id));
    }

    return (
        <div className="flex flex-wrap items-start  justify-center flex-col xl:flex-row mb-5">
            <div className="rounded-full items-center justify-center h-8 w-8 flex text-white bg-red-600 mx-3 mt-3">{props.index + 1}</div>
            <div id={props.id} className="w-full sm:w-auto flex justify-center flex-col">
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
            <div className="flex flex-wrap items-center mt-8">
                <div className="ml-2">
                    <SelectImage />
                </div>
                <div className="ml-3">
                    <DeleteButton onClick={onDelete} />
                    <EditButton onClick={onEdit} />
                </div>
            </div>

        </div>
    )
}

export default EnterTermForm;