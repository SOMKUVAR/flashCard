import {BiEdit} from 'react-icons/bi';

const EditButton = (props) => {
     return (
        <button className='text-blue-600' onClick={props.onClick}>
            <BiEdit style={{width:20,height:20}}/>
        </button>
     )
}

export default EditButton;