const Login = () => {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Expense Tracker</h1>
        <p style={styles.subtitle}>Track your expenses efficiently</p>
        <button onClick={handleLogin} style={styles.button}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

const styles: any = {
  container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  card: { background: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', textAlign: 'center', maxWidth: '400px' },
  title: { fontSize: '2rem', color: '#1e293b', marginBottom: '0.5rem' },
  subtitle: { color: '#64748b', marginBottom: '2rem' },
  button: { background: '#4285f4', color: '#fff', border: 'none', padding: '1rem 2rem', fontSize: '1rem', borderRadius: '8px', cursor: 'pointer', width: '100%' },
};

export default Login;
