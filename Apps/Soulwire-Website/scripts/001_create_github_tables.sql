-- GitHub Activity Tables for SoulWire

-- Store GitHub commits and code changes
CREATE TABLE IF NOT EXISTS public.github_commits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sha TEXT UNIQUE NOT NULL,
  message TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  committed_at TIMESTAMPTZ NOT NULL,
  url TEXT NOT NULL,
  additions INT DEFAULT 0,
  deletions INT DEFAULT 0,
  files_changed INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Store GitHub releases and version tags
CREATE TABLE IF NOT EXISTS public.github_releases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  release_id BIGINT UNIQUE NOT NULL,
  tag_name TEXT NOT NULL,
  name TEXT NOT NULL,
  body TEXT,
  published_at TIMESTAMPTZ NOT NULL,
  url TEXT NOT NULL,
  is_prerelease BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Store GitHub issues (bugs and features)
CREATE TABLE IF NOT EXISTS public.github_issues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_number INT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  body TEXT,
  state TEXT NOT NULL, -- open, closed
  labels TEXT[], -- array of label names
  created_at_github TIMESTAMPTZ NOT NULL,
  updated_at_github TIMESTAMPTZ NOT NULL,
  closed_at TIMESTAMPTZ,
  url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Store journal entries with GitHub activity integration
CREATE TABLE IF NOT EXISTS public.journal_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL, -- markdown content
  excerpt TEXT,
  category TEXT NOT NULL, -- 'monthly', 'feature', 'technical', etc.
  published_at TIMESTAMPTZ NOT NULL,
  is_published BOOLEAN DEFAULT FALSE,
  github_commit_ids UUID[], -- references to related commits
  github_release_ids UUID[], -- references to related releases
  github_issue_ids UUID[], -- references to related issues
  view_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Store roadmap items with progress tracking
CREATE TABLE IF NOT EXISTS public.roadmap_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- 'foundation', 'growth', 'legacy'
  status TEXT NOT NULL, -- 'planned', 'in-progress', 'completed'
  progress INT DEFAULT 0, -- 0-100
  order_index INT DEFAULT 0,
  github_issue_ids UUID[], -- related GitHub issues
  target_date TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_github_commits_committed_at ON public.github_commits(committed_at DESC);
CREATE INDEX IF NOT EXISTS idx_github_releases_published_at ON public.github_releases(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_github_issues_state ON public.github_issues(state);
CREATE INDEX IF NOT EXISTS idx_github_issues_updated ON public.github_issues(updated_at_github DESC);
CREATE INDEX IF NOT EXISTS idx_journal_entries_published ON public.journal_entries(published_at DESC) WHERE is_published = TRUE;
CREATE INDEX IF NOT EXISTS idx_roadmap_items_category ON public.roadmap_items(category, order_index);
