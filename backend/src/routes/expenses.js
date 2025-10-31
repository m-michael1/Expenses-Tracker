import express from 'express';
import pool from '../../config/database.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.get('/', isAuthenticated, async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    let query = `
      SELECT e.*, c.name as category_name 
      FROM expenses e 
      LEFT JOIN categories c ON e.category_id = c.id 
      WHERE e.user_id = $1
    `;
    const params = [req.user.id];

    if (startDate && endDate) {
      query += ' AND e.expense_date BETWEEN $2 AND $3';
      params.push(startDate, endDate);
    }

    query += ' ORDER BY e.expense_date DESC';

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/recent', isAuthenticated, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT e.*, c.name as category_name 
       FROM expenses e 
       LEFT JOIN categories c ON e.category_id = c.id 
       WHERE e.user_id = $1 
       ORDER BY e.expense_date DESC 
       LIMIT 5`,
      [req.user.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/comparison', isAuthenticated, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
        DATE_TRUNC('month', expense_date) as month,
        SUM(amount) as total
       FROM expenses 
       WHERE user_id = $1 
         AND expense_date >= CURRENT_DATE - INTERVAL '12 months'
       GROUP BY DATE_TRUNC('month', expense_date)
       ORDER BY month DESC`,
      [req.user.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/by-category', isAuthenticated, async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    let query = `
      SELECT c.name as category, SUM(e.amount) as total
      FROM expenses e
      LEFT JOIN categories c ON e.category_id = c.id
      WHERE e.user_id = $1
    `;
    const params = [req.user.id];

    if (startDate && endDate) {
      query += ' AND e.expense_date BETWEEN $2 AND $3';
      params.push(startDate, endDate);
    }

    query += ' GROUP BY c.name ORDER BY total DESC';

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', isAuthenticated, async (req, res) => {
  try {
    const { category_id, amount, description, expense_date } = req.body;
    const result = await pool.query(
      'INSERT INTO expenses (user_id, category_id, amount, description, expense_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.user.id, category_id, amount, description, expense_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    await pool.query('DELETE FROM expenses WHERE id = $1 AND user_id = $2', [req.params.id, req.user.id]);
    res.json({ message: 'Expense deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
