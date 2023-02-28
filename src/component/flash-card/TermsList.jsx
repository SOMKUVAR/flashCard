import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {setTerm} from '../../store/actions';
import Container from '../UI/Container';


const TermsList = () => {
    const dispatch = useDispatch();
    const terms = useSelector(state => state.flashCard).terms;
    const length = terms === undefined ? 0 : terms.length;
    const currentTerm = useSelector(state => state.term);
    const termNumbers = [];
    for (let i = 0; i < length; i++) 
        if (currentTerm !== i) 
            termNumbers.push(i);
    return (
        <Container>
            <div className='text-slate-400 font-medium pl-2 pb-2 border-b-2 text-sm'>
                FlashCards
            </div>
            <div className='text-red-600 font-bold pl-2 mt-2 mb-3'>
                Cards
            </div>
            <div> {
                termNumbers.map((termNumber) => <div className='font-semibold m-2 cursor-pointer'
                    onClick={
                        () => {
                            dispatch(setTerm(termNumber))
                        }
                }>
                    Card {termNumber+1}</div>)
            } </div>
        </Container>
    )
}

export default TermsList;
