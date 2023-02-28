import React from "react";
import { useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Share from "../component/flash-card/Share";
import Term from "../component/flash-card/Term";
import TermsList from "../component/flash-card/TermsList";
import { setFlashCard, setTerm } from "../store/actions";

const FlashCardDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const flashCard = useSelector((state) => state.flashCard);
 
  useEffect(() => {
    dispatch(setFlashCard(params.id));
    dispatch(setTerm(0));
  }, [params.id]);

  return (
    <div>
      <h1 className="flex font-bold mb-3">
        <Link to="/myFlashCard">
          <HiArrowLeft className="text-xl mr-3 mt-1" />
        </Link>
        {flashCard?.createGroup?.create_Group}{" "}
      </h1>
      <p className="ml-7 mb-4 text-medium text-neutral-600 dark:text-neutral-200 ">
        {flashCard?.createGroup?.description}
      </p>
      <div className="grid grid-cols-4 gap-4 ">
        <div>
          <TermsList />
        </div>
        <div className="col-span-2">
          <Term />
        </div>
        <div>
        <Share />
        </div>
      </div>
    </div>
  );
};

export default FlashCardDetail;
