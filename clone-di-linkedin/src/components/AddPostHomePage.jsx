const AddPostHomePage = function () {
  return (
    <div className="top-div-post rounded-3 border border-2">
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center">
          <a href="#i" className="me-2">
            <span>
              <img
                className="rounded-circle shadow-4-strong"
                alt="avatar2"
                width={50}
                height={50}
                src={"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
              />
            </span>
          </a>
          <button className="post-btn border borde-2">
            <span>Avvia un post</span>
          </button>
        </div>
        <div className="d-flex justify-content-around gap-5">
          <button href="#l" className="d-flex gap-2 add-btn-post rounded-1">
            <img src="icons/image.svg" alt="" />
            <span>Contenuti multimediali</span>
          </button>
          <button href="#p" className="d-flex gap-2 add-btn-post rounded-1">
            <img src="icons/calendar.svg" alt="" />
            <span>Evento</span>
          </button>
          <button href="#p" className="d-flex gap-2 add-btn-post rounded-1">
            <img src="icons/article.svg" alt="" />
            <span>Scrivi un articolo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPostHomePage;
