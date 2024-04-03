/* import { useState } from 'react'
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const profile1="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNjllMmY5NGY0YTAwMTkzNzkxZjEiLCJpYXQiOjE3MTIxNTUxMDYsImV4cCI6MTcxMzM2NDcwNn0.b85bO6JxHfKWlpOGI9jh2PCcgXUQvSPxpCEMku__nI4"
const profile2="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNjllMmY5NGY0YTAwMTkzNzkxZjEiLCJpYXQiOjE3MTIxNTUxMDYsImV4cCI6MTcxMzM2NDcwNn0.b85bO6JxHfKWlpOGI9jh2PCcgXUQvSPxpCEMku__nI4"
const profile3="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNjllMmY5NGY0YTAwMTkzNzkxZjEiLCJpYXQiOjE3MTIxNTUxMDYsImV4cCI6MTcxMzM2NDcwNn0.b85bO6JxHfKWlpOGI9jh2PCcgXUQvSPxpCEMku__nI4"
const profile4="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNjllMmY5NGY0YTAwMTkzNzkxZjEiLCJpYXQiOjE3MTIxNTUxMDYsImV4cCI6MTcxMzM2NDcwNn0.b85bO6JxHfKWlpOGI9jh2PCcgXUQvSPxpCEMku__nI4"
const profile5="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNjllMmY5NGY0YTAwMTkzNzkxZjEiLCJpYXQiOjE3MTIxNTUxMDYsImV4cCI6MTcxMzM2NDcwNn0.b85bO6JxHfKWlpOGI9jh2PCcgXUQvSPxpCEMku__nI4"

const idProfile1 = " 660d69e2f94f4a00193791f1";
const idProfile2 = " 660d69e2f94f4a00193791f1";
const idProfile3 = " 660d69e2f94f4a00193791f1";
const idProfile4 = " 660d69e2f94f4a00193791f1";
const idProfile5 = " 660d69e2f94f4a00193791f1";

const ProfileNavbar = () => { 
    const [randomProfile, setRandomProfile] = useState(0);
    const params = useParams();
    const id = paramas.username;
    const userData = useSelector((state) => state.user.content);
    const [user, setUser] = useState([]);
    const currentUser = {};
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = () => {
            let userData;
            switch (id) {
                case idProfile1:
                    currentUser.token= profile1;
                    currentUser.id = idProfile1;
                    break;
                case idProfile2:
                    currentUser.token= profile2;
                    currentUser.id = idProfile2;
                    break;
                case idProfile3:
                    currentUser.token= profile3;
                    currentUser.id = idProfile3;
                    break;
                case idProfile4:
                    currentUser.token= profile4;
                    currentUser.id = idProfile4;
                    break;
                case idProfile5:
                    currentUser.token= profile5;
                    currentUser.id = idProfile5;
                    break;
                default:
                    console.log("no user profile");
                    return;
            }

        dispatch(getUser(userData));
        setUser(userData);
        setRandomProfile(Math.floor(Math.random() * 5) + 1);
        }
        fetchUserData();
        if (userData.length !== 0) {
            console.log(`${userData.name} dati`,userData);
        }
    }, [id]);

    return (
        <>
            <Col>
                <Row>
                    <Col>
                        <img 
                            src=''
                            alt=''
                            className=''
                        />
                    </Col>
                </Row>
            </Col>
        </>
    )
}




export default ProfileNavbar;  */