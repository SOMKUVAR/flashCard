import { useDispatch, useSelector } from "react-redux";
import { addNewTerm, addTermImageURL } from "../../../store/actions/createFlashCard";
import ContainerWithShadow from "../../UI/ContainerWithShadow"
import TransparentButton from "../../UI/TransparentButton";
import EnterTermForm from "./EnterTermForm";

const EnterTerm = () =>{
    const imageTermsURL = useSelector(state=> state.imageTermsURL);
    const terms = useSelector(state => state.flashCardForm.terms);
    const dispatch = useDispatch();
   
    const onClick = () => {
        dispatch(addNewTerm( {"id":new Date(),"term":"","defination":"","image":null}));
        dispatch(addTermImageURL());
    }

   
    return (
        <ContainerWithShadow>
            {
                terms.map((term,index) => <EnterTermForm url={imageTermsURL[index]} index={index} {...term} key={term.id}/>)
            }
            <TransparentButton onClick={onClick}>+ Add More</TransparentButton>
        </ContainerWithShadow>
    )
}

export default EnterTerm;