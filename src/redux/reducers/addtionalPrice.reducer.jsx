import { add_price, subtract_price } from "../types";

export default (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case add_price:
      return state + payload;
    case subtract_price:
      return state - payload;
    default:
      return state;
  }
};
