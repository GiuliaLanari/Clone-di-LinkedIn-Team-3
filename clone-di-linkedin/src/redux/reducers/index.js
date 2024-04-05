import { GET_USER, GET_EXPERIENCES, DELETE_EXPERIENCES, POST_EXPERIENCES, GET_POST } from "../actions";

import { POST_POST, DELETE_POST, ADD_COMMENT } from "../actions/posts";

const initialState = {
  user: {},
  experiences: [],
  posts: [],
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

    case GET_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case POST_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload.postId) {
            return {
              ...post,
              comments: post.comments.concat(action.payload),
            };
          } else {
            return {
              ...post,
            };
          }
        }),
      };
    // case GET_POST_ID:
    //   return {
    //     ...state,
    //     posts: action.payload,
    //   };

    default:
      return state;
  }
};

export default userReducer;
