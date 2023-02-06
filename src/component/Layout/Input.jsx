import React from "react";


const Input = React.forwardRef((props,ref) => {
    return (
        <div className="mb-3 w-11/12 sm:w-96 mx-3">
        <label htmlFor="input1" className="font-semibold form-label 
        inline-block mb-2 text-slate-500">{props.label}</label>
        <input ref={ref} required type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 
               bg-white bg-clip-padding border border-solid border-gray-300 rounded transition 
               ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
               " id="input1" />

       </div>
    )
});

export default Input;