import { Link } from "react-router-dom";
import {HiArrowNarrowRight} from 'react-icons/hi';


const FlashCard = (props)=>{
    return (
      <div
          className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
          <div className="flex mb-5 items-center">
          <img src={props.flashCard.createGroup.image} className="mr-4 w-12 h-12 rounded-full" alt={`${props.flashCard.createGroup.create_Group}`}/>
          <div>
          <h5
            className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {props.flashCard.createGroup.create_Group}
          </h5>
          <span className="text-sm">{props.flashCard.terms.length} cards</span>
          </div>
          </div>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 line-clamp-2">
            {props.flashCard.createGroup.description}
          </p>
          <Link to={`/flash-card/${props.index}`}>
          <p className="text-red-600 font-medium flex">View Card <HiArrowNarrowRight className="ml-1 mt-1.5"/></p>
          </Link>
        </div>
    )
}

export default FlashCard;