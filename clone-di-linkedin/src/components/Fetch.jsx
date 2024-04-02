import { useState, useEffect } from "react";
import SingleProfile from "./SingleProfile";

const Fetch = function () {
  const randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
  const [profiles, setProfiles] = useState(null);

  const profilesFetch = function () {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
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
      .then((profilesFetched) => {
        setProfiles(profilesFetched);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    profilesFetch();
  }, []);
  return (
    <>
      {profiles &&
        profiles.slice(randomNum, randomNum + 5).map((profile) => {
          return <SingleProfile profile={profile} key={profile._id} />;
        })}
    </>
  );
};

export default Fetch;
