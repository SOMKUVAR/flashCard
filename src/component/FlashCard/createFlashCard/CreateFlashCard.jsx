import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { onSubmit } from "../../../store/actions";
import RedButton from "../../Layout/RedButton";
import CreateGroup from "./CreateGroup";
import EnterTerm from "./EnterTerm";
import validationSchema from "./validationSchema";


const CreateFlashCard = () => {
    const initialValues = useSelector((state) => state.flashCardForm);
    const dispatch = useDispatch();

    return (

        <div className="container-fluid mt-3 mb-0">
            <Formik enableReinitialize={true}
                onSubmit={(state) => {
                dispatch(onSubmit(state));
               }} 
                initialValues={initialValues} 
                validationSchema={validationSchema}
                >
                <Form>
                    <CreateGroup />
                    <EnterTerm />
                    <div className="flex flex-wrap justify-center">
                        <RedButton type="submit">Create</RedButton>
                    </div>
                </Form>
            </Formik>
            <div>
            </div>
        </div>

    )
}


export default CreateFlashCard;
