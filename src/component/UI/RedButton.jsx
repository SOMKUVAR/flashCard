
const RedButton = (props) => {
    return (
        <button type='button' {...props} className="inline-block px-6 w-40 py-2.5 bg-red-600 text-white font-medium  
                    leading-tight  rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 
                    focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg 
                    transition duration-150 ease-in-out">{props.children}</button>
    )
}

export default RedButton;