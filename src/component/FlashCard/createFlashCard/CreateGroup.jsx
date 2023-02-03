import {MdOutlineUploadFile} from 'react-icons/md';
const CreateGroup = () => {
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white">
            <div className="flex flex-wrap items-center">
            <div className="mb-3 xl:w-96">
                <label for="exampleFormControlInput1" className="font-semibold form-label 
                inline-block mb-2 text-slate-500"> Create Group*</label>
                <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 
                       bg-white bg-clip-padding border border-solid border-gray-300 rounded transition 
                       ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                       " id="exampleFormControlInput1" placeholder="Example label" />

            </div>
            <div className="mt-5 ml-3">
            <button type="button" class="inline-block pl-3 pr-6 py-1 border-2 border-blue-400 
            font-23
            text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black 
            hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                <span className="flex"><MdOutlineUploadFile className="mr-2" style={{width:20,height:20}}/> 
                <span className="my-1">Upload</span></span>
            </button>
            </div>
            </div>
            <div className="mb-3 xl:w-3/4">
                <label for="exampleFormControlTextarea1" className="font-semibold form-label inline-block mb-2 text-slate-500">Example textarea</label>
                <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                    bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                    id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
            </div>
        </div>
    )
}

export default CreateGroup;
