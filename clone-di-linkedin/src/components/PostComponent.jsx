import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/actions";
import PostHome from "./PostHome";

const PostComponent = function () {
  const posts = useSelector((state) => state.posts);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(posts));
  }, []);

  const myPosts = posts.filter((id) => id.user._id === user._id);

  return (
    <>
      {posts.slice(0, 5).map((post) => (
        <PostHome post={post} key={post._id} />
      ))}
      {myPosts.map((post) => (
        <PostHome post={post} key={post._id} />
      ))}
    </>
  );
};

export default PostComponent;
