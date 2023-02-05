import { useState } from "react";
import ContainerWithShadow from "../../Layout/ContainerWithShadow"
import TransparentButton from "../../Layout/TransparentButton";
import EnterTermForm from "./EnterTermForm";

const EnterTerm = () =>{
    const [enterTermFormComponents,setEnterTermFormComponents] = useState([<EnterTermForm key={new Date()} index={1}/>])

    const onClick = () => {
          const newEnterTermFormComponents = [...enterTermFormComponents];
          newEnterTermFormComponents.push(<EnterTermForm key={new Date()} index={newEnterTermFormComponents.length}/>);
          setEnterTermFormComponents(newEnterTermFormComponents);
    }

    return (
        <ContainerWithShadow>
            {
                enterTermFormComponents.map((enterTermForm) => enterTermForm)
            }
            <TransparentButton onClick={onClick}>+ Add More</TransparentButton>
        </ContainerWithShadow>
    )
}

export default EnterTerm;