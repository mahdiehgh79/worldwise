import styles from "./sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; copyright {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
export default Sidebar;
