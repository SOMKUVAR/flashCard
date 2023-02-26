import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { emptyTermsImageURL, onSubmit, setCreateGroupImageName } from "../store/actions";
import RedButton from "../component/UI/RedButton";
import validationSchema from "../component/create-flash-card/auth/validationSchema";
import CreateGroup from "../component/create-flash-card/create-group";
import EnterTerm from "../component/create-flash-card/enter-term";
import 'react-toastify/dist/ReactToastify.css';

const CreateFlashCard = () => {

    const initialValues = useSelector((state) => state.flashCardForm);
    const dispatch = useDispatch();

    return (

        <div className="container-fluid mt-3 mb-0">
            <Formik 
                onSubmit={(state,{resetForm}) => {
                dispatch(onSubmit(state));
                dispatch(setCreateGroupImageName("No Chosen File"))
                dispatch(emptyTermsImageURL());
                resetForm();
                toast.success('Saved Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
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
            <ToastContainer/>
        </div>

    )
}


export default CreateFlashCard;
