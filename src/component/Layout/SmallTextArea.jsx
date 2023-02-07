

const SmallTextArea = (props)=>{
    return (
        <div className="mb-3 w-11/12 sm:w-96 mx-3">
            <label htmlFor="textarea" className="font-semibold form-label inline-block mb-2 text-slate-500">{props.label}</label>
            <textarea {...props.field} required className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 h-10
                    bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="textarea" rows="3"></textarea>
        </div>
    )
}

export default SmallTextArea;