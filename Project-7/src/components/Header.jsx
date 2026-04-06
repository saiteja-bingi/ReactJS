import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <ul className='nav bg-gray-200 p-4 flex justify-center gap-4'>
            <li className="nav-item">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/register">Register</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/technologies">Technologies</NavLink>
            </li>
        </ul>
    )
}
export default Header