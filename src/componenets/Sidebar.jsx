import styles from "./sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Logo />
      <AppNav />

      <p>list of city</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; copyright {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
export default Sidebar;
