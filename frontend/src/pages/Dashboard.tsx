import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { expensesAPI } from '../services/api';

const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6'];

const Dashboard = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([]);

  const loadData = () => {
    expensesAPI.getByCategory(startDate, endDate).then(res => {
      const chartData = res.data.map((item: any) => ({
        name: item.category || 'Uncategorized',
        value: parseFloat(item.total),
      }));
      setData(chartData);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleFilter = () => {
    loadData();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Expense Dashboard</h1>

      <div style={styles.filters}>
        <div style={styles.field}>
          <label style={styles.label}>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            style={styles.input}
          />
        </div>
        <button onClick={handleFilter} style={styles.button}>Apply Filter</button>
      </div>

      <div style={styles.chartContainer}>
        <h2 style={styles.subtitle}>Expenses by Category</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={(entry) => `${entry.name}: $${entry.value.toFixed(2)}`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const styles: any = {
  container: { maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' },
  title: { color: '#1e293b', marginBottom: '2rem' },
  filters: { display: 'flex', gap: '1rem', marginBottom: '2rem', background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  field: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  label: { color: '#475569', fontWeight: '600', fontSize: '0.875rem' },
  input: { padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '6px' },
  button: { alignSelf: 'flex-end', background: '#3b82f6', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '6px', cursor: 'pointer' },
  chartContainer: { background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  subtitle: { color: '#1e293b', marginBottom: '1rem' },
};

export default Dashboard;
