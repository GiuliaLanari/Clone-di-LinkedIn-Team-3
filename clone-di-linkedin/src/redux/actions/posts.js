export const GET_POST = "GET_POST";

export const getPost = () => {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUzOWEyODFkODAwMTlhM2VjNDkiLCJpYXQiOjE3MTIwNDU2MjUsImV4cCI6MTcxMzI1NTIyNX0.c_0ZpFzaWJeG9_uKPTBJGPyvUgqbD-fgP8aAdinJh1o",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((posts) => {
        console.log(posts);
        dispatch({
          type: GET_POST,
          payload: posts,
        });
        console.log(posts);
      })
      .catch((error) => console.log(error));
  };
};
