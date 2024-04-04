export const GET_USER = "GET_USER";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const DELETE_EXPERIENCES = "DELETE_EXPERIENCES";
export const UPDATE_USER = "UPDATE_USER";
export const POST_EXPERIENCES = "POST_EXPERIENCES";
export const PUT_EXPERIENCES = "PUT_EXPERIENCES";

export const getUser = () => {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
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
      .then((user) => {
        dispatch({
          type: GET_USER,
          payload: user,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const experiencesList = () => {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/660bbe39a281d80019a3ec49/experiences", {
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
      .then((experiences) => {
        console.log(experiences);
        console.log(getState(), "getstate");
        dispatch({
          type: GET_EXPERIENCES,
          payload: experiences,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const experiencesListDelete = (expId, userId) => {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences/" + expId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUzOWEyODFkODAwMTlhM2VjNDkiLCJpYXQiOjE3MTIwNDU2MjUsImV4cCI6MTcxMzI1NTIyNX0.c_0ZpFzaWJeG9_uKPTBJGPyvUgqbD-fgP8aAdinJh1o",
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch({
            type: DELETE_EXPERIENCES,
            payload: expId,
          });
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })

      .catch((error) => console.log(error));
  };
};

export const newExperienze = (userId, form) => {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences", {
      method: "POST",
      body: JSON.stringify(form),
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
      .then((form) => {
        dispatch({
          type: POST_EXPERIENCES,
          payload: form,
        });
      })

      .catch((error) => console.log(error));
  };
};

export const experiencesModifica = (expId, userId, form) => {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences/" + expId, {
      method: "PUT",
      body: JSON.stringify(form),
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
      .then((form) => {
        dispatch(experiencesList());
      })

      .catch((error) => console.log(error));
  };
};
