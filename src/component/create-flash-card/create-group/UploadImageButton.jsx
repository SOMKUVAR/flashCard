import { useRef, useState } from 'react';
import {MdOutlineUploadFile} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setCreateGroupImageName } from '../../../store/actions';
import { SUPPORTED_FORMATS } from '../auth/validationSchema';

const UploadImageButton = (props)=>{
    const createGroupImageName = useSelector(state => state.createGroupImageName);
    const dispatch = useDispatch();
    const ref = useRef();
    const[err,setErr] = useState('');
    const onChange = (event) => {
        if (event.target.files[0]) {
            let mimeType = event.target.files[0].type;
            dispatch(setCreateGroupImageName(event.target.files[0].name));
            if (SUPPORTED_FORMATS.includes(mimeType)) {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    props.form.setFieldValue(props.field.name, reader.result);
                };
                setErr('');
            } else {
                setErr("Please provide jpeg png or jpg format.")
            }
        }
    }
    return (
        <div>
        <div className='flex justify-center align-center'>
        <input hidden  ref={ref}  type='file' onChange={onChange}/>
        <button onClick={()=>{ref.current.click();}} type="button" className="inline-block pl-3 pr-6 py-1 border-2 border-blue-400 
        font-23 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black 
        hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            <span className="flex"><MdOutlineUploadFile className="mr-2" style={{width:20,height:20}}/> 
            <span className="my-1">Upload Image</span></span>
        </button>
         <span className='text-gray-500 ml-2 text-md  font-semibold'>{createGroupImageName}</span>
        </div>
        <div className="text-red-600 ">{err}</div>

        </div>
    )
}

export default UploadImageButton;