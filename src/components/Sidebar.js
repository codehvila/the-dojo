import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";

export default function Sidebar() {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <div className={styles.sidebar_content}>
        <div className={styles.user}>
          {/* avatar and username here */}
          <p>User</p>
        </div>
        <nav id="links" className={styles.links}>
          <ul>
            <li>
              <NavLink to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
