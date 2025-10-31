interface ExpenseCardProps {
  expense: {
    id: number;
    amount: number;
    description: string;
    expense_date: string;
    category_name: string;
  };
}

const ExpenseCard = ({ expense }: ExpenseCardProps) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.category}>{expense.category_name || 'Uncategorized'}</span>
        <span style={styles.amount}>${parseFloat(expense.amount.toString()).toFixed(2)}</span>
      </div>
      <p style={styles.description}>{expense.description}</p>
      <p style={styles.date}>{new Date(expense.expense_date).toLocaleDateString()}</p>
    </div>
  );
};

const styles: any = {
  card: { background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  header: { display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' },
  category: { color: '#64748b', fontSize: '0.875rem', fontWeight: '600' },
  amount: { color: '#ef4444', fontSize: '1.25rem', fontWeight: 'bold' },
  description: { color: '#334155', margin: '0.5rem 0' },
  date: { color: '#94a3b8', fontSize: '0.875rem', margin: 0 },
};

export default ExpenseCard;
