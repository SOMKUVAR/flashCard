import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import RedButton from "../../Layout/RedButton";
import CreateGroup from "./CreateGroup";
import EnterTerm from "./EnterTerm";
import validationSchema from "./validationSchema";


const CreateFlashCard = () => {
    const initialValues = useSelector((state) => state.flashCardForm);
    return (

        <div className="container-fluid my-8">
            <Formik enableReinitialize={true}
                onSubmit={(state) => {
                console.log(state);}} 
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
