import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { expensesAPI } from '../services/api';
import ExpenseCard from '../components/ExpenseCard';
import ComparisonChart from '../components/ComparisonChart';

const Home = () => {
  const { user } = useAuth();
  const [recentExpenses, setRecentExpenses] = useState<any[]>([]);
  const [comparisonData, setComparisonData] = useState<any[]>([]);

  useEffect(() => {
    expensesAPI.getRecent().then(res => setRecentExpenses(res.data)).catch(() => setRecentExpenses([]));
    expensesAPI.getComparison().then(res => setComparisonData(res.data)).catch(() => setComparisonData([]));
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.greeting}>{getGreeting()}, {user?.name}</h1>
      </div>

      <div style={styles.grid}>
        <div style={styles.expensesSection}>
          <h2 style={styles.sectionTitle}>Recent Expenses</h2>
          <div style={styles.expensesGrid}>
            {Array.isArray(recentExpenses) && recentExpenses.map((expense: any) => (
              <ExpenseCard key={expense.id} expense={expense} />
            ))}
          </div>
        </div>

        <div style={styles.chartSection}>
          <ComparisonChart data={comparisonData} />
        </div>
      </div>
    </div>
  );
};

const styles: any = {
  container: { maxWidth: '1200px', margin: '0 auto', padding: '2rem' },
  hero: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '3rem', borderRadius: '12px', marginBottom: '2rem', color: '#fff' },
  greeting: { margin: 0, fontSize: '2.5rem' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' },
  expensesSection: { gridColumn: '1 / 2' },
  sectionTitle: { color: '#1e293b', marginBottom: '1rem' },
  expensesGrid: { display: 'grid', gap: '1rem' },
  chartSection: { gridColumn: '2 / 3' },
};

export default Home;
