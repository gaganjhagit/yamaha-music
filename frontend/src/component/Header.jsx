import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header =()=>{
    return(
        <>       
        <div className='fixed  inset-0 bg-purple-500 h-16 text-center ' >
               <h3 className='text-7xl text-red-500 hover:text-blue-500 shadow-xl'>www.yamaha.com</h3>
        </div>
        <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
        </>
    )
}   

export default Header;
