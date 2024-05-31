import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='container'>
            <Navbar expand="lg" className="bg-body-tertiary p-3" f>
                <div className='container-fluid'>
                    <NavLink className='navbar-brand fs-5' to="/">
                        <i class="fa-solid fa-note-sticky"></i>
                        <span className='ms-1'>PRACTICE</span>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='nav-link' to="/">Home</NavLink>
                            <NavLink className='nav-link' to="/user">User</NavLink>
                            <NavLink className='nav-link' to="/admin">Admin</NavLink>
                        </Nav>
                        <Nav className='gap-2'>
                            <button className='btn px-4 fw-semibold' onClick={() => navigate('login')}>Log In</button>
                            <button className='btn btn-dark px-3' onClick={() => navigate('register')}>Sign Up</button>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;