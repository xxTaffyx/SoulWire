-- Create admin_users table to manage admin emails
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  added_by TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert the head admin (you)
INSERT INTO admin_users (email, added_by)
VALUES ('xxtaffyx@gmail.com', 'system')
ON CONFLICT (email) DO NOTHING;

-- Create RLS policies
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Allow admins to view all admin users
CREATE POLICY "Admins can view admin users"
  ON admin_users FOR SELECT
  USING (auth.uid() IN (SELECT id FROM auth.users WHERE email IN (SELECT email FROM admin_users)));

-- Allow admins to insert new admin users
CREATE POLICY "Admins can insert admin users"
  ON admin_users FOR INSERT
  WITH CHECK (auth.uid() IN (SELECT id FROM auth.users WHERE email IN (SELECT email FROM admin_users)));

-- Allow admins to delete admin users (except the head admin)
CREATE POLICY "Admins can delete admin users"
  ON admin_users FOR DELETE
  USING (
    email != 'xxtaffyx@gmail.com' AND
    auth.uid() IN (SELECT id FROM auth.users WHERE email IN (SELECT email FROM admin_users))
  );

-- Update the admin check trigger to use the admin_users table
CREATE OR REPLACE FUNCTION check_admin_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if the new user's email is in the admin_users table
  IF EXISTS (SELECT 1 FROM admin_users WHERE email = NEW.email) THEN
    NEW.raw_user_meta_data = jsonb_set(
      COALESCE(NEW.raw_user_meta_data, '{}'::jsonb),
      '{is_admin}',
      'true'::jsonb
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop old trigger if exists and create new one
DROP TRIGGER IF EXISTS set_admin_metadata ON auth.users;
CREATE TRIGGER set_admin_metadata
  BEFORE INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION check_admin_user();
