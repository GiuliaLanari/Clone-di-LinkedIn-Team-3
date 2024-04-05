export const POST_POST = "POST_POST";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";
export const ADD_COMMENTS_POSTS = "ADD_COMMENTS_POSTS";

export const postPost = function (inputValue) {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      body: JSON.stringify(inputValue),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUzOWEyODFkODAwMTlhM2VjNDkiLCJpYXQiOjE3MTIwNDU2MjUsImV4cCI6MTcxMzI1NTIyNX0.c_0ZpFzaWJeG9_uKPTBJGPyvUgqbD-fgP8aAdinJh1o",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((post) => {
        dispatch({
          type: POST_POST,
          payload: post,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const fetchCommentPosts = (postID) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const myUrl = "https://striveschool-api.herokuapp.com/api/comments/";
      const response = await fetch(myUrl, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNjllMmY5NGY0YTAwMTkzNzkxZjEiLCJpYXQiOjE3MTIxNTUxMDYsImV4cCI6MTcxMzM2NDcwNn0.b85bO6JxHfKWlpOGI9jh2PCcgXUQvSPxpCEMku__nI4",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const filteredComments = data.filter(
          (comment) => comment.elementId === postID
        );

        dispatch({ type: ADD_COMMENTS_POSTS, payload: filteredComments });
        console.log(" commenti", filteredComments);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};


