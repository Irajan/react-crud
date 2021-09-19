import { useContext } from "react";
import { Link } from "react-router-dom";

import { userContext } from "../../App";

function Navigation() {
  const { login } = useContext(userContext);

  const setIsLogged = login[1];

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    setIsLogged(false);
  };

  return (
    <nav>
      <ul className="nav-items">
        <li className="nav-item">
          <Link className="nav-link" to="/posts">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            Users
          </Link>
        </li>
        <li>
          <button onClick={handleLogOut}>Log Out</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
