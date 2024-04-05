import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/actions";
import PostHome from "./PostHome";

const PostComponent = function () {
  const posts = useSelector((state) => state.posts);
  const randNum = Math.floor(Math.random() * posts.length);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(posts));
  }, []);
  const myPosts = posts.filter((id) => id.user._id === user._id);

  return (
    <>
      {myPosts.map((post) => (
        <PostHome post={post} key={post._id} />
      ))}
      {posts.slice(randNum, randNum + 5).map((post) => (
        <PostHome post={post} key={post._id} />
      ))}
    </>
  );
};

export default PostComponent;
