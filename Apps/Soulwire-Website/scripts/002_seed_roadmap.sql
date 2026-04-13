-- Seed initial roadmap items for SoulWire

INSERT INTO public.roadmap_items (title, description, category, status, progress, order_index, target_date) VALUES
-- Foundation Phase
('SoulLang Compiler Infrastructure', 'Build the core compiler with privacy-first type system', 'foundation', 'in-progress', 75, 1, '2025-06-30'),
('Privacy Primitives Library', 'Implement fundamental privacy-preserving data structures', 'foundation', 'in-progress', 60, 2, '2025-07-31'),
('First Guardian Cohort', 'Develop and test initial 10 Guardian AI assistants', 'foundation', 'in-progress', 45, 3, '2025-09-30'),
('Core Realms Infrastructure', 'Build distributed compute layer for Realms', 'foundation', 'planned', 10, 4, '2025-12-31'),
('Developer Preview Program', 'Launch invite-only access for early builders', 'foundation', 'planned', 5, 5, '2026-03-31'),

-- Growth Phase
('Public Beta Launch', 'Open SoulWire to general public with full documentation', 'growth', 'planned', 0, 1, '2027-01-01'),
('Guardian Marketplace', 'Community-contributed Guardian AI models', 'growth', 'planned', 0, 2, '2027-06-30'),
('Hardware Device Prototypes', 'Physical privacy tools - first generation', 'growth', 'planned', 0, 3, '2028-01-01'),
('Educational Initiative', 'Privacy curriculum for schools and universities', 'growth', 'planned', 0, 4, '2029-01-01'),

-- Legacy Phase
('Decentralized Governance', 'Transition to community-owned decision making', 'legacy', 'planned', 0, 1, '2035-01-01'),
('Generational Handoff Plan', 'Prepare next generation of SoulWire stewards', 'legacy', 'planned', 0, 2, '2040-01-01'),
('Global Privacy Infrastructure', 'SoulWire as foundational privacy layer worldwide', 'legacy', 'planned', 0, 3, '2050-01-01')

ON CONFLICT DO NOTHING;
