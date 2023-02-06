import {AiFillDelete} from 'react-icons/ai';

const DeleteButton = () => {
     return (
        <button className='text-red-600 '>
            <AiFillDelete style={{width:20,height:20}}/>
        </button>
     )
}

export default DeleteButton;