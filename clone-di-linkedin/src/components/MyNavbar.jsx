
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";


const MyNavbar = () => {
    
    return (
        <Navbar expand="lg" id="navbar" className="bg-white d-flex sticky-top pt-1 pb-1 mb-5 border-bottom">
            <Container>
                <div className="d-flex">
                    <NavbarBrand href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0A66C2" class="bi bi-linkedin" viewBox="0 0 16 16" className="me-3">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
                    </NavbarBrand>
                    <form>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Cerca"
                            className="inputNav py-0"
                        />
                    </form>                  
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <div className="d-flex flex-column align-items-center bord text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#666666" class="bi bi-house-door-fill" viewBox="0 0 24 24">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                        </svg>
                        <p className="navbar-top">Home</p>
                    </div>
                    <div className="d-flex flex-column align-items-center bord">
                        {/* Network */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#666666" class="bi bi-people-fill" viewBox="0 0 24 24">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                        <p className=" navbar-top fs-12">Rete</p>
                    </div>
                    
                    <div className="d-flex flex-column  align-items-center bord">
                        {/* Jobs */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#666666" class="bi bi-briefcase-fill" viewBox="0 0 24 24">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
                        </svg>
                        <p className="navbar-top fs-12">Jobs</p>
                    </div>
                    <div className="d-flex flex-column  align-items-center bord">
                        {/* Messaging */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#666666" class="bi bi-chat-right-dots-fill" viewBox="0 0 24 24">
                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                        </svg>
                        <p className="navbar-top fs-12">Messaggi</p>
                    </div>
                    <div className="d-flex flex-column align-items-center bord">
                        {/* Notifiche */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#666666" class="bi bi-bell-fill" viewBox="0 0 24 24">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
                        </svg>
                        <p className="navbar-top fs-12">Notifiche</p>
                    </div>
                    <div className="text-decoration-none"> 
                        {/* Profile */}
                        <div className="d-flex flex-column  align-items-center  bord">
                            <img
                            className="rounded-circle shadow-4-strong resized-avatar"
                            alt="avatar2"
                            src={"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
                            />
                            <p className="navbar-top fs-12">Tu</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center bord"> 
                        {/* For Business */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#666666" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 24 24">
                            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                        </svg>
                        <p className="navbar-top fs-12">Per le Aziende</p>
                    </div>
                </div>
                <a href="#login" className="premium">Prova Premium per 0 euro</a>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;


