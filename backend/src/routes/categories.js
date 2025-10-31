import express from 'express';
import pool from '../../config/database.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.get('/', isAuthenticated, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM categories WHERE user_id = $1 ORDER BY name',
      [req.user.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', isAuthenticated, async (req, res) => {
  try {
    const { name } = req.body;
    const result = await pool.query(
      'INSERT INTO categories (user_id, name) VALUES ($1, $2) RETURNING *',
      [req.user.id, name]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    await pool.query('DELETE FROM categories WHERE id = $1 AND user_id = $2', [req.params.id, req.user.id]);
    res.json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
