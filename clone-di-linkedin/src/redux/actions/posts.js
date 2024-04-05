export const POST_POST = "POST_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
// export const GET_POST_ID = "GET_POST_ID";

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

// export const idGetPost = (posts, postId) => {
//   return (dispatch, getState) => {
//     fetch(" https://striveschool-api.herokuapp.com/api/posts/ " + postId, {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUzOWEyODFkODAwMTlhM2VjNDkiLCJpYXQiOjE3MTIwNDU2MjUsImV4cCI6MTcxMzI1NTIyNX0.c_0ZpFzaWJeG9_uKPTBJGPyvUgqbD-fgP8aAdinJh1o",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Errore nel reperimento dei dati richiesti");
//         }
//       })
//       .then((posts) => {
//         console.log(posts);
//         dispatch({
//           type: GET_POST_ID,
//           payload: posts,
//         });
//       })
//       .catch((error) => console.log(error));
//   };
// };

export const postDelete = (postId) => {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUzOWEyODFkODAwMTlhM2VjNDkiLCJpYXQiOjE3MTIwNDU2MjUsImV4cCI6MTcxMzI1NTIyNX0.c_0ZpFzaWJeG9_uKPTBJGPyvUgqbD-fgP8aAdinJh1o",
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch({
            type: DELETE_POST,
            payload: postId,
          });
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })

      .catch((error) => console.log(error));
  };
};

export const addComment = function (commentInputValue) {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(commentInputValue),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc1MTRjNTllYzAwMTk5MGQ2ZTUiLCJpYXQiOjE3MTIzMDI1NDEsImV4cCI6MTcxMzUxMjE0MX0.vZuFAueLK3JQq-rExdaJpRzgQH4jCViHJvJuURoRRR8",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata API");
        }
      })
      .then((comment) => {
        dispatch({
          type: ADD_COMMENT,
          payload: comment,
        });
      })
      .catch((error) => console.log("ERRORE", error));
  };
};

// export const postModifica = (postId, post) => {
//   return (dispatch, getState) => {
//     fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
//       method: "PUT",
//       body: JSON.stringify(post),
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUzOWEyODFkODAwMTlhM2VjNDkiLCJpYXQiOjE3MTIwNDU2MjUsImV4cCI6MTcxMzI1NTIyNX0.c_0ZpFzaWJeG9_uKPTBJGPyvUgqbD-fgP8aAdinJh1o",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Errore nel reperimento dei dati richiesti");
//         }
//       })
//       .then((form) => {
//         dispatch(getPost());
//       })

//       .catch((error) => console.log(error));
//   };
// };
