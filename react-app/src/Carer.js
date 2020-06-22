import React from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getCarer} from "./carerReducer";

export function Carer() {
  const {carerId} = useParams();
  const dispatch = useDispatch();
  const carer = useSelector((state) => state.carer.carer);

  if (carer === null) {
    dispatch(getCarer(carerId));
  }

  if (!carer) {
    return null;
  }

  return (
    <div>
      <h2>{carer.name}</h2>
      <p>{carer.id} -  {carer.name}</p>
    </div>
  )
}
