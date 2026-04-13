-- Insert head admin email directly
INSERT INTO admin_users (email, is_head_admin)
VALUES ('xxtaffyx@gmail.com', true)
ON CONFLICT (email) DO UPDATE SET is_head_admin = true;
