import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <>
    <header>
     <div className="container py-3">
       <Navbar bg="" expand="lg">
         <Navbar.Brand href="#home" className="logo"><span>Mahadev</span> Constructions</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto">
             <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
             <Nav.Link href="#link" className="nav-link">About Us</Nav.Link>
             <Nav.Link href="#link" className="nav-link">Services</Nav.Link>
             <Nav.Link href="#link" className="nav-link">Our Projects</Nav.Link>
             <Nav.Link href="#link" className="nav-link">Blogs</Nav.Link>
             <Nav.Link href="#link" className="nav-link">Contact Us</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
     </div>
    </header>
    <main>
      <section className="section-1">
        <div className="hero d-flex align-items-center">
          <div className="container-fluid">
            <div className="text-center">
              <span>Welcome Amazing Construction</span>
              <h1>Crafting Dreams with <br />Precision and excellence</h1>
              <p>We excel at transforming visions into really throuh outstanding craftsmanship and precise</p>
              <div className="mt-3">
                  <a href="#" className="btn btn-primary">Contact Us</a>
              <a href="#" className="btn btn-secondary ms-4">View Projects</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
    <footer>

    </footer>
    </>
  );
};

export default Home;
