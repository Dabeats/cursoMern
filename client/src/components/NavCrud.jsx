import { Link } from "react-router-dom";

function NavCrud() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">inicio</Link></li>
                <li><Link to="/registro">registro</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavCrud