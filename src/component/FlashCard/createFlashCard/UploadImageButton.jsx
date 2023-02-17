import { useRef, useState } from 'react';
import {MdOutlineUploadFile} from 'react-icons/md';

const UploadImageButton = (props)=>{
    const ref = useRef();
    const [name,setName] = useState("No File Chosen");
    return (
        <div className='flex justify-center align-center'>
        <input hidden  ref={ref}  type='file' onChange={(event)=>{ 
            if(event.target.files[0]){
                setName(event.target.files[0].name);
                props.form.setFieldValue(props.field.name,event.target.files[0]);
            }
        }}/>
        <button onClick={()=>{ref.current.click();}} type="button" className="inline-block pl-3 pr-6 py-1 border-2 border-blue-400 
        font-23 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black 
        hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            <span className="flex"><MdOutlineUploadFile className="mr-2" style={{width:20,height:20}}/> 
            <span className="my-1">Upload Image</span></span>
        </button>
         <span className='text-gray-500 ml-2 text-md  font-semibold'>{name}</span>
        </div>
    )
}

export default UploadImageButton;