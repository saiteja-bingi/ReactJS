import {Outlet, NavLink} from 'react-router-dom'
function Technologies(){
    return(
        <div>
            {/* nav links */}
            <ul className='nav bg-gray-200 p-4 flex justify-center gap-4'>
                <li className="nav-item">
                    <NavLink to="java">Java</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="vue">Vue</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="node">Node</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
export default Technologies