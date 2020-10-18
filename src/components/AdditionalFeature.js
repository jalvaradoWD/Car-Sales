import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_price, subtract_price } from "../redux/types";

const AdditionalFeature = (props) => {
  const { name, price } = props.feature;
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);

  const buttonClick = () => {
    switch (selected) {
      case true:
        dispatch({ type: add_price, payload: price });
        break;
      case false:
        dispatch({ type: subtract_price, payload: price });
        break;
      default:
        return null;
    }

    setSelected(!selected);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={buttonClick} className="button">
        {!selected ? "Add" : "Remove"}
      </button>
      {name} (+{price})
    </li>
  );
};

export default AdditionalFeature;
