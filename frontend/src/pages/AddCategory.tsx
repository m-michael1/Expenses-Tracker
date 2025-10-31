import { useState, useEffect } from 'react';
import { categoriesAPI } from '../services/api';

const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');

  const loadCategories = () => {
    categoriesAPI.getAll().then(res => setCategories(res.data));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await categoriesAPI.create(name);
    setName('');
    loadCategories();
  };

  const handleDelete = async (id: number) => {
    await categoriesAPI.delete(id);
    loadCategories();
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Manage Categories</h1>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Category name"
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Add Category</button>
        </form>

        <div style={styles.list}>
          <h2 style={styles.subtitle}>Existing Categories</h2>
          {categories.map((cat: any) => (
            <div key={cat.id} style={styles.item}>
              <span>{cat.name}</span>
              <button onClick={() => handleDelete(cat.id)} style={styles.deleteBtn}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles: any = {
  container: { maxWidth: '600px', margin: '2rem auto', padding: '0 1rem' },
  card: { background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  title: { color: '#1e293b', marginBottom: '2rem' },
  form: { display: 'flex', gap: '1rem', marginBottom: '2rem' },
  input: { flex: 1, padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '1rem' },
  button: { background: '#3b82f6', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '6px', cursor: 'pointer' },
  list: { marginTop: '2rem' },
  subtitle: { color: '#475569', fontSize: '1.25rem', marginBottom: '1rem' },
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f8fafc', borderRadius: '6px', marginBottom: '0.5rem' },
  deleteBtn: { background: '#ef4444', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' },
};

export default AddCategory;
