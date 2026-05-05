import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons/ticker-logo.svg';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home',    to: '/' },
  { label: 'Events',  to: '/events' },
  { label: 'About',   to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navbarBrand}>
          <img src={logo} alt="Ticker" className={styles.navbarLogo} />
        </Link>

        <ul className={styles.navbarLinks}>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  `${styles.navbarLink}${isActive ? ` ${styles["navbarLink--active"]}` : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/events" className={`btn btnPrimary ${styles.navbarDrawerLink}`}>
          Get a Ticket
        </Link>

        <button
          className={styles.navbarToggle}
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span className={styles.navbarToggleBar} />
          <span className={styles.navbarToggleBar} />
          <span className={styles.navbarToggleBar} />
        </button>
      </nav>

      {open && (
        <div className={styles.navbarDrawer}>
          <div className={styles.navbarDrawerLogo}>
            <img src={logo} alt="Ticker" className={styles.navbarLogo} />
          </div>
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={styles.navbarDrawerLink}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/events"
            className={`btn btnPrimary ${styles.navbarDrawerLink}`}
            onClick={() => setOpen(false)}
            style={{ alignSelf: 'flex-start', marginTop: 12 }}
          >
            Get a Ticket
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;