-- Insert sample user (Note: In production, users will be created via Google OAuth)
INSERT INTO users
    (google_id, email, name, picture)
VALUES
    ('123456789', 'john@example.com', 'John', 'https://via.placeholder.com/150');

-- Insert sample categories for the user
INSERT INTO categories
    (user_id, name)
VALUES
    (1, 'Food'),
    (1, 'Transportation'),
    (1, 'Entertainment'),
    (1, 'Utilities'),
    (1, 'Healthcare'),
    (1, 'Shopping'),
    (1, 'Education');

-- Insert sample expenses for the last 2 months
INSERT INTO expenses
    (user_id, category_id, amount, description, expense_date)
VALUES
    -- Current month expenses
    (1, 1, 45.50, 'Grocery shopping', CURRENT_DATE - INTERVAL
'2 days'),
(1, 2, 30.00, 'Gas station', CURRENT_DATE - INTERVAL '3 days'),
(1, 3, 60.00, 'Movie tickets', CURRENT_DATE - INTERVAL '5 days'),
(1, 1, 25.75, 'Restaurant', CURRENT_DATE - INTERVAL '7 days'),
(1, 4, 120.00, 'Electricity bill', CURRENT_DATE - INTERVAL '10 days'),
(1, 5, 85.00, 'Doctor visit', CURRENT_DATE - INTERVAL '12 days'),
(1, 6, 150.00, 'Clothing', CURRENT_DATE - INTERVAL '15 days'),
(1, 1, 55.20, 'Grocery shopping', CURRENT_DATE - INTERVAL '18 days'),
(1, 2, 25.00, 'Bus pass', CURRENT_DATE - INTERVAL '20 days'),
(1, 7, 200.00, 'Online course', CURRENT_DATE - INTERVAL '22 days'),

-- Last month expenses
(1, 1, 50.00, 'Grocery shopping', CURRENT_DATE - INTERVAL '32 days'),
(1, 2, 35.00, 'Gas station', CURRENT_DATE - INTERVAL '35 days'),
(1, 3, 45.00, 'Concert tickets', CURRENT_DATE - INTERVAL '38 days'),
(1, 1, 30.50, 'Restaurant', CURRENT_DATE - INTERVAL '40 days'),
(1, 4, 115.00, 'Water bill', CURRENT_DATE - INTERVAL '42 days'),
(1, 6, 80.00, 'Shoes', CURRENT_DATE - INTERVAL '45 days'),
(1, 1, 60.00, 'Grocery shopping', CURRENT_DATE - INTERVAL '48 days'),
(1, 2, 40.00, 'Taxi', CURRENT_DATE - INTERVAL '50 days'),
(1, 5, 95.00, 'Pharmacy', CURRENT_DATE - INTERVAL '52 days'),
(1, 3, 70.00, 'Gaming subscription', CURRENT_DATE - INTERVAL '55 days');
