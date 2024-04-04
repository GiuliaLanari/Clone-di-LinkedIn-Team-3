import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/actions";

const PostComponent = function () {
  const [open, setOpen] = useState(false);
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(posts));
  }, []);

  return (
    <>
      {posts.slice(0, 10).map((post) => (
        <div className="post bg-white rounded-3 border border-1 mt-3" key={post._id}>
          <div className="d-flex justify-content-end border-bottom p-1">
            {/* <button className="add-pen-btn rounded-circle py-1">
          <img src="/icons/dots.svg" alt="più azioni" />
        </button> */}
            <Dropdown>
              <Dropdown.Toggle className="border-0" variant="transparent">
                <img className="me-2" src="/icons/dots.svg" alt="più azioni" />
              </Dropdown.Toggle>

              <Dropdown.Menu align="end" className="mt-1">
                <Dropdown.Item href="#/action-1" className="py-3 pe-5">
                  <img className="me-2" src="/icons/save2.svg" alt="" />
                  Salva
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="py-3 pe-5">
                  <img className="me-2" src="/icons/link.svg" alt="" />
                  Copia link al post
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="py-3 pe-5">
                  <img className="me-2" src="/icons/dontshow.svg" alt="" />
                  Non voglio vederlo
                </Dropdown.Item>
                {/* DINAMICO!!!!!!!!!!!!!! */}
                <Dropdown.Item href="#/action-3" className="py-3 pe-5">
                  <img className="me-2" src="/icons/stopfollowing.svg" alt="" />
                  Smetti di guardare {post.username}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="py-3 pe-5">
                  <img className="me-2" src="/icons/report.svg" alt="" />
                  Segnala post
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button className="add-pen-btn rounded-circle py-1">
              <img src="/icons/X.svg" alt="rimuovi dal feed" />
            </button>
          </div>
          <div className="post-content">
            <div className="post-info d-flex justify-content-between align-items-center px-3 pt-3">
              <div className="d-flex ">
                <div className="user-pfp">
                  {/* DINAMICO!!!!!!!!!  */}
                  <img
                    id="user-pfp"
                    src={
                      post.user.image
                        ? post.user.image
                        : "https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
                    }
                    alt=""
                  />
                </div>
                <div className="ms-2">
                  {/* DINAMICO!!!!!!!!! */}
                  <span className="fw-bold mb-0 ">
                    {post.user.name ? post.user.name && post.user.surname : post.username}
                  </span>{" "}
                  &#903; <span>3° e oltre</span>
                  <p className="mb-1 lh-1 text-sm">{post.user.title}</p>
                  <p className="lh-1">
                    {post.createdAt} <span>&#903;</span> <img src="/icons/public.svg" alt="" />
                  </p>
                </div>
              </div>
              <button className="border-0 text-primary  homepage-btns px-2 py-2 rounded h6">
                {" "}
                <img src="/icons/plus.svg" className="mb-1" alt="" /> Segui
              </button>
            </div>
            {/* DINAMICO!!!!!!!!! */}
            <div className="post-description mt-0 px-3 ">{post.text}</div>
            {/* DINAMICO!!!!!!!!!  */}
            <img src={post.user.image ? post.user.image : ""} alt="" className="img-fluid py-2" />
            <div className="d-flex justify-content-between px-2 pb-2 border-bottom">
              {/* AGGIUNGERE ICONA!!!!!!!!! */}
              <span>2 likes</span>
              {/* DINAMICO!!!!!!!!! da fare */}
              <span>2 commenti</span>
            </div>
            <div className="d-flex justify-content-center">
              <button className="homepage-btns border-0 p-3 m-1 rounded">
                <img style={{ marginInlineEnd: "3px" }} src="/icons/thumb-up.svg" alt="" />
                Consiglia
              </button>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="homepage-btns border-0 p-3 m-1 rounded text-dark"
              >
                <img style={{ marginInlineEnd: "3px" }} src="/icons/comment.svg" alt="" />
                Commenta
              </Button>
              <button className="homepage-btns border-0 p-3 m-1 rounded">
                <img style={{ marginInlineEnd: "3px" }} src="/icons/repost.svg" alt="" />
                Diffondi il post
              </button>
              <button className="homepage-btns border-0 p-3 m-1 rounded">
                <img style={{ marginInlineEnd: "3px" }} src="/icons/send.svg" alt="" />
                Invia
              </button>
            </div>
            <Collapse in={open}>
              <div className="commentArea px-3" id="example-collapse-text">
                <div className="d-flex align-items-center">
                  <div className="comment-pfp me-2 ">
                    {/* DINAMICO!!!!!!!!! */}
                    <img
                      id="comment-pfp"
                      src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
                      alt=""
                    />
                  </div>
                  <div className="w-100 border border-1 rounded-pill px-2 border border-dark d-flex justify-content-between align-items-center">
                    <input
                      type="text"
                      className="border-0 bg-transparent custom-input"
                      style={{ height: "50px" }}
                      // size={40}
                      placeholder="Aggiungi un commento..."
                    />
                    <div>
                      <button className="border-0 py-1  homepage-btns rounded-circle">
                        <img src="/icons/smiley.svg" alt="" />
                      </button>
                      <button className="border-0 py-1 homepage-btns rounded-circle">
                        {" "}
                        <img src="/icons/image1.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="comment-pfp me-2">
                    {/* DINAMICO!!!!!!!!! */}
                    <img
                      id="comment-pfp"
                      src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
                      alt=""
                    />
                  </div>
                  <div id="comment-body" className="rounded-3 p-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        {/* DINAMICO!!!!!!!!! */}
                        <p className="m-0">USER</p>
                        <p className="mb-2 text-sm"> 1034 follower</p>
                      </div>
                      <div className="m-0">5 giorni fa</div>
                    </div>
                    {/* DINAMICO!!!!!!!!! */}
                    <p className="m-0">Testo del commento</p>
                    <span>Consiglia</span> | <span>Rispondi</span>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostComponent;
