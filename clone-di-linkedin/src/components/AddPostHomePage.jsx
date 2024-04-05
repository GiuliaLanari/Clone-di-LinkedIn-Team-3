import AddNewPostForm from "./AddNewPostForm";

const AddPostHomePage = function () {
  return (
    <div className="top-div-post rounded-3 border border-1">
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center">
          <AddNewPostForm />
        </div>
        <div className="d-flex justify-content-around gap-5">
          <button href="#l" className="d-flex gap-2 add-btn-post rounded-1">
            <img src="/icons/image1.svg" alt="" />
            <span>Contenuti multimediali</span>
          </button>
          <button href="#p" className="d-flex gap-2 add-btn-post rounded-1">
            <img src="/icons/calendar.svg" alt="" />
            <span>Evento</span>
          </button>
          <button href="#p" className="d-flex gap-2 add-btn-post rounded-1">
            <img src="/icons/article.svg" alt="" />
            <span>Scrivi un articolo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPostHomePage;
