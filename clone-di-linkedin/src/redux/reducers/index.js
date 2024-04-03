import { GET_USER, GET_EXPERIENCES, DELETE_EXPERIENCES, POST_EXPERIENCES } from "../actions";

const initialState = {
  user: {},
  experiences: [],
  // formEsperiences: {},
};

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
      };
    case DELETE_EXPERIENCES:
      return {
        ...state,
        experiences: state.experiences.filter((esperienza) => esperienza._id !== action.payload),
      };

    case POST_EXPERIENCES:
      return {
        ...state,
        experiences: state.experiences.concat(action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
