import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCarers} from "./carerReducer";

export function CarerList() {
  const dispatch = useDispatch();
  const carers = useSelector((state) => state.carer.carers);

  if (carers == null || carers.length === 0) {
    dispatch(getCarers());
  }

  const formatCarers = () => {
    return carers?.map((carer) => (
      <li id={carer.id}>
        <a href={`/carers/${carer.id}`}>{carer.name}</a>
      </li>
    ));
  };

  return (
    <>
      <h2>Carers</h2>
      <ul>
        {formatCarers()}
      </ul>
    </>
  );
}
