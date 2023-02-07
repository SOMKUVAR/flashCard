import {AiFillDelete} from 'react-icons/ai';

const DeleteButton = (props) => {
     return (
        <button {...props} className='text-red-500'>
            <AiFillDelete style={{width:20,height:20}}/>
        </button>
     )
}

export default DeleteButton;