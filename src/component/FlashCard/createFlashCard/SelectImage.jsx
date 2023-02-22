import {useRef, useState} from "react";
import { useDispatch} from "react-redux";
import { setTermImageURL } from "../../../store/actions";
import {SUPPORTED_FORMATS} from "./validationSchema";


const SelectImage = (props) => {
    const dispatch = useDispatch();
    const ref = useRef();
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
                                    dispatch(setTermImageURL({ind:props.index,value:reader.result}));
                                    props.form.setFieldValue(props.field.name, reader.result);
                                };
                                setErr('');
                            } else {
                                dispatch(setTermImageURL({ind:props.index,value:null}));
                                setErr("Please provide jpeg png or jpg format.")
                            }
                        }
                    }}/> 
                    { props.url == null ? <button onClick={() => {ref.current.click();}}
                     type="button" className="inline-block px-6 py-2 border-2 border-blue-400
                     font-23 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black
                     hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                     Select Image</button> : <div className="w-32"><img  src={props.url} className="w-32 h-20"/></div>}
                    <div className="text-red-600 md:w-32">{err}</div>
        </div>
    )
}

export default SelectImage;
