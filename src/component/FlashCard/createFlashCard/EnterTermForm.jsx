import { useRef } from "react";
import DeleteButton from "../../Layout/Delete";
import EditButton from "../../Layout/EditButton";
import Input from "../../Layout/Input";
import SelectImage from "../../Layout/SelectImage";
import SmallTextArea from "../../Layout/SmallTextArea";


const EnterTermForm = (props) => {
    const searchInput = useRef();

    const onEdit = () => {
        searchInput.current.focus();
    }
    return (
        <div className="flex flex-wrap items-center justify-center flex-col xl:flex-row mb-12">
            <div className="rounded-full items-center justify-center h-8 w-8 flex text-white bg-red-600 mx-3 mt-3">{props.index}</div>

            <Input ref={searchInput} label="Enter Term*" />
            <SmallTextArea label="Enter Defination*" />
            <div className="flex flex-wrap items-center">
            <div className="mt-5 ml-2">
                <SelectImage />
            </div>
            <div className="mt-5 ml-3">
                    <DeleteButton />
                    <EditButton onClick={onEdit} />
            </div>
            </div>
            
        </div>
    )
}

export default EnterTermForm;