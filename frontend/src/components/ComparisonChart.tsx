import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ComparisonChartProps {
  data: Array<{ month: string; total: string }>;
}

const ComparisonChart = ({ data }: ComparisonChartProps) => {
  const chartData = Array.isArray(data) ? data.map(item => ({
    month: new Date(item.month).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    total: parseFloat(item.total),
  })) : [];

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Last 12 Months Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const styles: any = {
  container: { background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  title: { margin: '0 0 1rem 0', color: '#1e293b' },
};

export default ComparisonChart;
