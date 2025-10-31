import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>Expense Tracker</Link>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact Us</Link>
          <Link to="/sitemap" style={styles.link}>Site Map</Link>
        </div>
        {user && (
          <div style={styles.user}>
            <img src={user.picture} alt={user.name} style={styles.avatar} />
            <span style={styles.userName}>{user.name}</span>
            <button onClick={logout} style={styles.logoutBtn}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

const styles: any = {
  nav: { background: '#1e293b', padding: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
  container: { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' },
  logo: { color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' },
  links: { display: 'flex', gap: '2rem' },
  link: { color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.3s' },
  user: { display: 'flex', alignItems: 'center', gap: '1rem' },
  avatar: { width: '40px', height: '40px', borderRadius: '50%' },
  userName: { color: '#fff' },
  logoutBtn: { background: '#ef4444', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' },
};

export default Navbar;
