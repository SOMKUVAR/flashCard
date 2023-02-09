import { ErrorMessage, Field } from "formik";
import { CREATEGROUP, DESCRIPTION, GROUP_TITLE, IMAGE } from "../../../constants/createFlashCard";
import ContainerWithShadow from "../../Layout/ContainerWithShadow";
import Input from "../../Layout/Input";
import TextArea from "../../Layout/TextArea";
import UploadImageButton from "./UploadImageButton";

const CreateGroup = () => {
  
  return (
    <ContainerWithShadow>
      <div className="flex flex-wrap mb-5 flex-col sm:flex-row">
        <div>
        <Field component={Input} label="Create group*" name={`${CREATEGROUP+"."+GROUP_TITLE}`} />
        <ErrorMessage name={`${CREATEGROUP+"."+GROUP_TITLE}`}>{(err)=> <div className="text-red-600 mb-3 w-11/12 sm:w-96 mx-3">{err}</div>}</ErrorMessage>
        </div>
        <div className="ml-3 md:mt-8">
        <Field component={UploadImageButton} name={`${CREATEGROUP+"."+IMAGE}`} />
        <ErrorMessage name={`${CREATEGROUP+"."+IMAGE}`}>{(err)=> <div className="text-center text-red-600">{err}</div>}</ErrorMessage>
        </div>
      </div>
      <div className="mb-3 mx-3 xl:w-3/4">
        <Field name={`${CREATEGROUP+"."+DESCRIPTION}`} component={TextArea}label={"Add description"} /> 
        <ErrorMessage name={`${CREATEGROUP+"."+DESCRIPTION}`} >{(err)=> <div className="text-red-600">{err}</div>}</ErrorMessage>     
      </div>
    </ContainerWithShadow>
  );
};

export default CreateGroup;
