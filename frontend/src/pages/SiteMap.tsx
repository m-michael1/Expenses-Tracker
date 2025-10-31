import { Link } from 'react-router-dom';

const SiteMap = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Site Map</h1>
      <ul style={styles.list}>
        <li style={styles.item}><Link to="/" style={styles.link}>Home</Link></li>
        <li style={styles.item}><Link to="/add-expense" style={styles.link}>Add Expense</Link></li>
        <li style={styles.item}><Link to="/add-category" style={styles.link}>Add Category</Link></li>
        <li style={styles.item}><Link to="/dashboard" style={styles.link}>Dashboard</Link></li>
        <li style={styles.item}><Link to="/about" style={styles.link}>About</Link></li>
        <li style={styles.item}><Link to="/contact" style={styles.link}>Contact Us</Link></li>
      </ul>
    </div>
  );
};

const styles: any = {
  container: { maxWidth: '800px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  title: { color: '#1e293b', marginBottom: '1rem' },
  list: { listStyle: 'none', padding: 0 },
  item: { padding: '0.5rem 0' },
  link: { color: '#3b82f6', textDecoration: 'none', fontSize: '1.125rem' },
};

export default SiteMap;
