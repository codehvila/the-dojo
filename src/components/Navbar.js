import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import formsStyles from "../Forms.module.css";
import Temple from "../assets/temple.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.logo}>
          <Link to="/dashboard">
            <img src={Temple} alt="Dojo Logo" />
            <span>The Dojo</span>
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/logout">
            <button className={formsStyles.btn}>Logout</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
