import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { expensesAPI, categoriesAPI } from '../services/api';

const AddExpense = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    category_id: '',
    amount: '',
    description: '',
    expense_date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    categoriesAPI.getAll().then(res => setCategories(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await expensesAPI.create(formData);
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Add New Expense</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Category</label>
            <select
              value={formData.category_id}
              onChange={e => setFormData({ ...formData, category_id: e.target.value })}
              style={styles.input}
              required
            >
              <option value="">Select category</option>
              {categories.map((cat: any) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Amount</label>
            <input
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={e => setFormData({ ...formData, amount: e.target.value })}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Description</label>
            <textarea
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              style={{ ...styles.input, minHeight: '100px' }}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Date</label>
            <input
              type="date"
              value={formData.expense_date}
              onChange={e => setFormData({ ...formData, expense_date: e.target.value })}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>Add Expense</button>
        </form>
      </div>
    </div>
  );
};

const styles: any = {
  container: { maxWidth: '600px', margin: '2rem auto', padding: '0 1rem' },
  card: { background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  title: { color: '#1e293b', marginBottom: '2rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  field: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  label: { color: '#475569', fontWeight: '600' },
  input: { padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '1rem' },
  button: { background: '#3b82f6', color: '#fff', border: 'none', padding: '1rem', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer', marginTop: '1rem' },
};

export default AddExpense;
