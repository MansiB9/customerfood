import React from 'react'
import { Badge, Container, Nav, Navbar, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img  from '../Images/Flint&Flame.png';
import { useSelector } from 'react-redux';
//import '../MyNavBar.css';



function MyNavBar() {

    const { ItemCount } =useSelector((state) => state.cart)

    return (
        <div>
            <Navbar className='navbar' fixed='top' collapseOnSelect bg="light" varient="light" expand="lg">
                <Container>
                    <Navbar.Brand href='#home'><img className='ms-25 w-25 h-25' src={img}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-nav-bar'/>
                    <Navbar.Collapse id-controls='responsive-nav-bar'/>
                    <Nav className='ms-auto'>
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>  
                        <NavLink>  
                            <Link to="/cart">My Cart <Badge className='m-2'>{ItemCount}</Badge></Link>
                        </NavLink>         
                        <NavLink> 
                            <Link to="/orders">My Orders</Link>
                        </NavLink> 
                        <NavLink> 
                            <Link to="/profile">My Profile</Link>
                        </NavLink> 
                        <NavLink> 
                            <Link to="/register">Register</Link>
                        </NavLink>   
                        <NavLink> 
                            <Link to="/login">Login</Link>
                        </NavLink>   
                        
                    </Nav>
                   
                </Container>
            </Navbar>
        </div>
    )
}
export default MyNavBar
