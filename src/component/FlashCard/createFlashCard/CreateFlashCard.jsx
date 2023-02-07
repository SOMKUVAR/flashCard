import {Form, Formik } from "formik";
import {useSelector } from "react-redux";
import RedButton from "../../Layout/RedButton";
import CreateGroup from "./CreateGroup";
import EnterTerm from "./EnterTerm";

const CreateFlashCard = () => {
    const initialValues = useSelector((state)=> state.flashCardForm);
    
    return (

        <div className="container-fluid my-8">
            <Formik onSubmit={(state) => {
                console.log(state);

            }} initialValues={initialValues} enableReinitialize={true}>

                <Form>
                    <CreateGroup />
                    <EnterTerm/>
                    <div className="flex flex-wrap justify-center">
                        <RedButton type="submit">Create</RedButton>
                    </div>
                </Form>

            </Formik>
        </div>
    )
}


export default CreateFlashCard;
