import React from 'react';
import { useSelector } from 'react-redux';


const Term = () => {
    const termIndex = useSelector(state => state.term);
    const terms = useSelector(state => state.flashCard).terms;
    const term = terms === undefined ? null : terms[termIndex];
    if(term !== null)
    return (
            <div className="flex justify-center my-5">
                <div
                    className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:w-full md:flex-row p-2">
                        {
                            term.image && <img
                            className="h-96 w-full rounded-t-lg object-cover md:h-full md:w-52 md:rounded-none "
                            src={term.image}
                            alt="term detail" />
                        }
                    <div className="flex flex-col justify-start p-6">
                        <h5
                            className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            {term.term}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          {term.defination}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Term;