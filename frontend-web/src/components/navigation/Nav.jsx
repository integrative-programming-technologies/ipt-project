import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import logoImage from '../../assets/hamloy.png';

const Nav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

    return (
        <nav className="navbar">
            <h1 className="logo">
                <img src={logoImage} alt="Logo" style={{ width: '100px', height: 'auto' }} />
            </h1>
            <ul className="nav-links">
                {user ? (
                    <>
                        <NavLink className='nav-childs' to="/profile">Home</NavLink>
                        <NavLink className='nav-childs' to="/" onClick={handleLogout}>Logout</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink className='nav-childs' to="/">Home</NavLink>
                        <NavLink className='nav-childs' to="/login">Login</NavLink>
                        <NavLink className='nav-childs' to="/register">Register</NavLink>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Nav;
