import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const PostComponent = function () {
  const [open, setOpen] = useState(false);
  return (
    <div className="post bg-white rounded-3 border-1">
      <div className="d-flex justify-content-end border-bottom p-1">
        {/* <button className="add-pen-btn rounded-circle py-1">
          <img src="icons/dots.svg" alt="più azioni" />
        </button> */}
        <Dropdown>
          <Dropdown.Toggle className="border-0" variant="transparent">
            <img className="me-2" src="icons/dots.svg" alt="più azioni" />
          </Dropdown.Toggle>

          <Dropdown.Menu align="end" className="mt-1">
            <Dropdown.Item href="#/action-1" className="py-3 pe-5">
              <img className="me-2" src="icons/save2.svg" alt="" />
              Salva
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="py-3 pe-5">
              <img className="me-2" src="icons/link.svg" alt="" />
              Copia link al post
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="py-3 pe-5">
              <img className="me-2" src="icons/dontshow.svg" alt="" />
              Non voglio vederlo
            </Dropdown.Item>
            {/* DINAMICO!!!!!!!!!!!!!! */}
            <Dropdown.Item href="#/action-3" className="py-3 pe-5">
              <img className="me-2" src="icons/stopfollowing.svg" alt="" />
              Smetti di guardare USER
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="py-3 pe-5">
              <img className="me-2" src="icons/report.svg" alt="" />
              Segnala post
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className="add-pen-btn rounded-circle py-1">
          <img src="icons/X.svg" alt="rimuovi dal feed" />
        </button>
      </div>
      <div className="post-content">
        <div className="post-info d-flex justify-content-between align-items-center px-3 pt-3">
          <div className="d-flex ">
            <div className="user-pfp">
              {/* DINAMICO!!!!!!!!! */}
              <img id="user-pfp" src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png" alt="" />
            </div>
            <div className="ms-2">
              {/* DINAMICO!!!!!!!!! */}
              <span className="fw-bold mb-0 ">Nome Cognome</span> &#903; <span>3° e oltre</span>
              <p className="mb-1 lh-1 text-sm">Titolo</p>
              <p className="lh-1">
                data di creazione <span>&#903;</span> <img src="icons/public.svg" alt="" />
              </p>
            </div>
          </div>
          <button className="border-0 text-primary  homepage-btns px-2 py-2 rounded h6">
            {" "}
            <img src="icons/plus.svg" className="mb-1" alt="" /> Segui
          </button>
        </div>
        {/* DINAMICO!!!!!!!!! */}
        <div className="post-description mt-0 px-3 ">
          Io che mi propongo di fare la struttura e mi diverto aggiungendo classi bootstrap, css e funzionalità
          stilistiche discutibili mentre i miei compagni di gruppo fanno le fetch in redux
        </div>
        {/* DINAMICO!!!!!!!!! */}
        <img
          src="https://staticfanpage.akamaized.net/wp-content/uploads/sites/34/2024/03/Meme-Criceto-Triste-1200x675.jpg"
          alt=""
          className="img-fluid py-2"
        />
        <div className="d-flex justify-content-between px-2 pb-2 border-bottom">
          {/* AGGIUNGERE ICONA!!!!!!!!! */}
          <span>2 likes</span>
          {/* DINAMICO!!!!!!!!! */}
          <span>2 commenti</span>
        </div>
        <div className="d-flex justify-content-center">
          <button className="homepage-btns border-0 p-3 m-1 rounded">
            <img style={{ marginInlineEnd: "3px" }} src="icons/thumb-up.svg" alt="" />
            Consiglia
          </button>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="homepage-btns border-0 p-3 m-1 rounded text-dark"
          >
            <img style={{ marginInlineEnd: "3px" }} src="icons/comment.svg" alt="" />
            Commenta
          </Button>
          <button className="homepage-btns border-0 p-3 m-1 rounded">
            <img style={{ marginInlineEnd: "3px" }} src="icons/repost.svg" alt="" />
            Diffondi il post
          </button>
          <button className="homepage-btns border-0 p-3 m-1 rounded">
            <img style={{ marginInlineEnd: "3px" }} src="icons/send.svg" alt="" />
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
                    <img src="icons/smiley.svg" alt="" />
                  </button>
                  <button className="border-0 py-1 homepage-btns rounded-circle">
                    {" "}
                    <img src="icons/image.svg" alt="" />
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
  );
};

export default PostComponent;
