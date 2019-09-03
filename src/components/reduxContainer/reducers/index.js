import { VIEW_ANIMALS } from "../actions/constants/index";

const initialState = {
  animals: []
};

function rootReducer(state = initialState, action) {
  if (action.type === VIEW_ANIMALS) {
    return Object.assign({}, state, {
      animals: state.animals.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
