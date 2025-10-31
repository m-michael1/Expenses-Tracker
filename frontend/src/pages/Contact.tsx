const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.text}>
        Have questions or feedback? Reach out to us at support@expensetracker.com
      </p>
    </div>
  );
};

const styles: any = {
  container: { maxWidth: '800px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  title: { color: '#1e293b', marginBottom: '1rem' },
  text: { color: '#475569', lineHeight: '1.6' },
};

export default Contact;
