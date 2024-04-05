import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/index";
import ProfilePage from "./ProfilePage";

const ProfileNavbar = () => {
  const [randomProfile, setRandomProfile] = useState(Math.floor(Math.random() * 99) + 1);
  const params = useParams();
  const id = params.username;
  const userData = useSelector((state) => state.user.content);
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();

  const profiles = [
    //PHILIP
    {
      id: "660d69e2f94f4a00193791f1",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNjllMmY5NGY0YTAwMTkzNzkxZjEiLCJpYXQiOjE3MTIxNTUxMDYsImV4cCI6MTcxMzM2NDcwNn0.b85bO6JxHfKWlpOGI9jh2PCcgXUQvSPxpCEMku__nI4",
    },
    //GIULIA
    {
      id: "660e54b613df0a001949f3df",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlNTRiNjEzZGYwYTAwMTk0OWYzZGYiLCJpYXQiOjE3MTIyMTUyMjIsImV4cCI6MTcxMzQyNDgyMn0.1z-F-M4-yHvf4lXfLNHtHTktplwRIElPYN-rJl1qBV4",
    },
    //INNOCENZO
    {
      id: "660bbe01a281d80019a3ec48",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUwMWEyODFkODAwMTlhM2VjNDgiLCJpYXQiOjE3MTIwNDU1NjksImV4cCI6MTcxMzI1NTE2OX0.K5jsPkciVPeJ0LuXokmsHzJWpgR_erEr0NoDAuTDz60",
    },
    //MIA
    {
      id: "660bbfaea281d80019a3ec4d",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmZhZWEyODFkODAwMTlhM2VjNGQiLCJpYXQiOjE3MTIwNDU5OTgsImV4cCI6MTcxMzI1NTU5OH0.5NgnDws8dp3_WggoKSOR-Gy4keaTDdMS5VrzDAKKhDM",
    },
    //SIMONE
    {
      id: "660bbe39a281d80019a3ec49",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUzOWEyODFkODAwMTlhM2VjNDkiLCJpYXQiOjE3MTIwNDU2MjUsImV4cCI6MTcxMzI1NTIyNX0.c_0ZpFzaWJeG9_uKPTBJGPyvUgqbD-fgP8aAdinJh1o",
    },
  ];

  useEffect(() => {
    const fetchUserData = () => {
      const currentUser = {};
      if (currentUser) {
        dispatch(getUser(currentUser.token));
        setUser(profiles);
        setRandomProfile(Math.floor(Math.random() * 99) + 1);
      } else {
        console.log("no user profile");
      }
    };

    fetchUserData();

    if (userData && userData.length !== 0) {
      console.log(`${userData.name} data`, userData);
    }
  }, [id, dispatch, userData]);

  return <ProfilePage />;
};

export default ProfileNavbar;


