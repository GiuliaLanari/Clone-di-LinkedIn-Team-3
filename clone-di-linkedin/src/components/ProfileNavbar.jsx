// // import { useState } from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// const profile1 =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNjllMmY5NGY0YTAwMTkzNzkxZjEiLCJpYXQiOjE3MTIxNTUxMDYsImV4cCI6MTcxMzM2NDcwNn0.b85bO6JxHfKWlpOGI9jh2PCcgXUQvSPxpCEMku__nI4";
// PHILIP
// const profile2 =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlNTRiNjEzZGYwYTAwMTk0OWYzZGYiLCJpYXQiOjE3MTIyMTUyMjIsImV4cCI6MTcxMzQyNDgyMn0.1z-F-M4-yHvf4lXfLNHtHTktplwRIElPYN-rJl1qBV4";
// GIULIA
// const profile3 =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUwMWEyODFkODAwMTlhM2VjNDgiLCJpYXQiOjE3MTIwNDU1NjksImV4cCI6MTcxMzI1NTE2OX0.K5jsPkciVPeJ0LuXokmsHzJWpgR_erEr0NoDAuTDz60";
// INNOCENZO
// const profile4 =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmZhZWEyODFkODAwMTlhM2VjNGQiLCJpYXQiOjE3MTIwNDU5OTgsImV4cCI6MTcxMzI1NTU5OH0.5NgnDws8dp3_WggoKSOR-Gy4keaTDdMS5VrzDAKKhDM";
// MIA
// const profile5 =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmUzOWEyODFkODAwMTlhM2VjNDkiLCJpYXQiOjE3MTIwNDU2MjUsImV4cCI6MTcxMzI1NTIyNX0.c_0ZpFzaWJeG9_uKPTBJGPyvUgqbD-fgP8aAdinJh1o";
// SIMONE

// const idProfile1 = " 660d69e2f94f4a00193791f1";
// const idProfile2 = " 660d69e2f94f4a00193791f1";
// const idProfile3 = " 660d69e2f94f4a00193791f1";
// const idProfile4 = " 660d69e2f94f4a00193791f1";
// const idProfile5 = " 660d69e2f94f4a00193791f1";

// const ProfileNavbar = () => {
//   const [randomProfile, setRandomProfile] = useState(0);
//   const params = useParams();
//   const id = params.username;
//   const userData = useSelector((state) => state.user.content);
//   const [user, setUser] = useState([]);
//   const currentUser = {};
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchUserData = () => {
//       let userData;
//       switch (id) {
//         case idProfile1:
//           currentUser.token = profile1;
//           currentUser.id = idProfile1;
//           break;
//         case idProfile2:
//           currentUser.token = profile2;
//           currentUser.id = idProfile2;
//           break;
//         case idProfile3:
//           currentUser.token = profile3;
//           currentUser.id = idProfile3;
//           break;
//         case idProfile4:
//           currentUser.token = profile4;
//           currentUser.id = idProfile4;
//           break;
//         case idProfile5:
//           currentUser.token = profile5;
//           currentUser.id = idProfile5;
//           break;
//         default:
//           console.log("no user profile");
//           return;
//       }

//       dispatch(getUser(userData));
//       setUser(userData);
//       setRandomProfile(Math.floor(Math.random() * 5) + 1);
//     };
//     fetchUserData();
//     if (userData.length !== 0) {
//       console.log(`${userData.name} dati`, userData);
//     }
//   }, [id]);

//   return (
//     
//   );
// };

// export default ProfileNavbar;
