import {ErrorMessage} from "formik";
import {useRef, useState} from "react";
import {SUPPORTED_FORMATS} from "../FlashCard/createFlashCard/validationSchema";


const SelectImage = (props) => {
    const ref = useRef();
    const [url, setUrl] = useState(null);
    const [err,setErr] = useState('');
    return (
        <div>
            <input hidden
                ref={ref}
                type='file'
                onChange={(event) => {
                        if (event.target.files[0]) {
                            let mimeType = event.target.files[0].type;
                            if (SUPPORTED_FORMATS.includes(mimeType)) {
                                const reader = new FileReader();
                                reader.readAsDataURL(event.target.files[0]);
                                reader.onload = () => {
                                    setUrl(reader.result);
                                };
                                setErr('');
                            } else {
                                setUrl(null);
                                setErr("Please provide jpeg png or jpg format.")
                            }
                            props.form.setFieldValue(props.field.name, event.target.files[0]);
                        }
                    }}/> 
                    { url == null ? <button onClick={() => {ref.current.click();}}
                     type="button" className="inline-block px-6 py-2 border-2 border-blue-400
                     font-23 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black
                     hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                     Select Image</button> : <div className="w-32"><img  src={url} className="w-32 h-20"/></div>}
                    <div className="text-red-600">{err}</div>
        </div>
    )
}

export default SelectImage;
