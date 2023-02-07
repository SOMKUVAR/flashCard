import { Field } from "formik";
import ContainerWithShadow from "../../Layout/ContainerWithShadow";
import Input from "../../Layout/Input";
import TextArea from "../../Layout/TextArea";
import UploadImageButton from "../../Layout/UploadImageButton";

const CreateGroup = () => {
  
  return (
    <ContainerWithShadow>
      <div className="flex flex-wrap items-center mb-5">
        <Field component={Input} label="Create group*" name="createGroup.create_Group" />
        <div className="mt-5 ml-3">
          <UploadImageButton />
        </div>
      </div>
      <div className="mb-3 mx-3 xl:w-3/4">
        <Field name="createGroup.discription" component={TextArea}label={"Add description"} />
      </div>
    </ContainerWithShadow>
  );
};

export default CreateGroup;
