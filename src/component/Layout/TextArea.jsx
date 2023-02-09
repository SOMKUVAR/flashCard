

const TextArea = (props) => {
    return (
        <>
            <label htmlFor="textarea" className="font-semibold form-label inline-block mb-2 text-slate-500">{props.label}</label>
            <textarea {...props.field}  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                    bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="textarea" rows="3" placeholder="Your message"></textarea>
        </>
    )
}

export default TextArea;