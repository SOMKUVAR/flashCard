import Input from "../../Layout/Input";
import SelectImage from "../../Layout/SelectImage";
import SmallTextArea from "../../Layout/SmallTextArea";


const EnterTermForm = () => {
    return (
        <div className="flex flex-wrap items-center flex-col sm:flex-row">
        <Input label="Enter Term*"/>
        <SmallTextArea label="Enter Defination*"/>
        <div className="mt-5 ml-3">
         <SelectImage/>
        </div>
     </div>
    )
}

export default EnterTermForm;