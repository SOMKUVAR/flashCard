import { useDispatch, useSelector } from "react-redux";
import { addNewTerm } from "../../../store/actions/createFlashCard";
import ContainerWithShadow from "../../Layout/ContainerWithShadow"
import TransparentButton from "../../Layout/TransparentButton";
import EnterTermForm from "./EnterTermForm";

const EnterTerm = () =>{
    const terms = useSelector(state => state.flashCardForm.terms);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(addNewTerm( {
            "id":new Date(),
            "term":"",
            "defination":"",
            "image":null,
            "focus":false
        }));
    }

    return (
        <ContainerWithShadow>
            {
                terms.map((term,index) => <EnterTermForm index={index} {...term} key={term.id}/>)
            }
            <TransparentButton onClick={onClick}>+ Add More</TransparentButton>
        </ContainerWithShadow>
    )
}

export default EnterTerm;