import React from 'react'
import { useSelector } from 'react-redux';

const TermsList = () => {
    const index = useSelector((state)=> state.term).index;
  return (
    <div>
        {index}
    </div>
  )
}

export default TermsList;