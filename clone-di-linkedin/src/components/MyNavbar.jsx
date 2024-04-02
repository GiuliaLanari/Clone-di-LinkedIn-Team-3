import Navbar from "react-bootstrap/Navbar";
import { Container,NavbarBrand } from "react-bootstrap/";


const MyNavbar = () => {

    return (
        <Navbar expand="lg" className="bg-white d-flex sticky-top pt-1 pb-1 mb-5 border-bottom">
            <Container>
                <div className="d-flex">
                    <NavbarBrand href="/">  {/* icon linkedin */}LinkedIn</NavbarBrand>
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
                    {/*Logo Home */}

                    {/* Network */}
                    {/* Jobs */}
                    {/* Messaging */}
                    {/* Notifications */} 
                    {/* Profile */}
                    {/* For Business */}
                </div>

                <a href="#login">Prova Premium per 0 euro</a>


            </Container>
        </Navbar>
    );
};

export default MyNavbar;
