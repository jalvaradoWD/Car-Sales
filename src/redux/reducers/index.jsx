import { combineReducers } from "redux";

// Reducers imports
import price from "./addtionalPrice.reducer";
import car from "./car.reducer";
import features from "./additionalFeatures.reducer";

export default combineReducers({ price, car, features });
