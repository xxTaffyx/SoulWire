import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

// Realm data structure
const realms = {
  creator: {
    name: "Creator Realm",
    category: "Creative & Work",
    icon: "🎥",
    tagline: "Forge, stream, and share without surveillance",
    description:
      "The Creator Realm unifies everything a modern content creator needs — streaming, editing, chat, analytics — inside one privacy-first environment.",
    features: [
      {
        title: "Live Streaming",
        items: [
          "RTMP Ingest & HLS playback",
          "Adaptive bitrates with hardware encoding",
          "DVR & instant replay",
          "Moderation panel with bans and filters",
          "Multi-platform dual-stream",
        ],
      },
      {
        title: "Video Hosting",
        items: [
          "Upload & transcode videos",
          "Playlists with chapters",
          "Community comments with moderation",
          "AI-assisted captions",
          "Collaboration tools",
        ],
      },
      {
        title: "Community",
        items: [
          "Discord-style chat rooms",
          "Customizable roles & permissions",
          "Auto-moderation tools",
          "Safe space mode",
          "Watch parties & premieres",
        ],
      },
      {
        title: "Monetization",
        items: ["Tips via SoulBank", "Subscription tiers", "Revenue dashboard", "No platform cut - keep your money"],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Stream scheduling, file organization, task management" },
      { name: "May", role: "Posture alerts, eye strain prevention, rest breaks" },
      { name: "Lana", role: "Live security against raids, doxxing, harassment" },
      { name: "Clara", role: "News verification for factual content" },
      { name: "Tilda", role: "Captions, transcripts, educational streaming support" },
    ],
  },
  "creative-world": {
    name: "Creative World",
    category: "Creative & Work",
    icon: "🎨",
    tagline: "Create without compromise",
    description:
      "The Creative World Realm is for making art — writing, visual art, music, and digital creation — with tools that respect your work and never train AI on your creations without consent.",
    features: [
      {
        title: "Writing",
        items: [
          "Distraction-free editor",
          "Outlining tools",
          "Character & world building",
          "Version history",
          "Export to multiple formats",
          "Writing goal tracking",
        ],
      },
      {
        title: "Visual Art",
        items: [
          "Digital canvas with layers",
          "Professional art tools",
          "Reference management",
          "Portfolio showcase",
          "Commission management via SoulBank",
        ],
      },
      {
        title: "Music",
        items: [
          "Audio recording & editing",
          "MIDI support",
          "Virtual instruments",
          "Collaboration features",
          "Distribution tools",
        ],
      },
      {
        title: "Creator Rights",
        items: [
          "Your work stays yours",
          "No AI training without consent",
          "Copyright protection",
          "Licensing tools",
          "Plagiarism detection via Clara",
        ],
      },
    ],
    guardians: [
      { name: "Tilda", role: "Creative assistance when asked, never takes over" },
      { name: "Betsy", role: "Project organization, deadline tracking" },
      { name: "Clara", role: "Research, reference verification, plagiarism detection" },
      { name: "May", role: "Creative burnout prevention, posture reminders" },
      { name: "Lana", role: "Copyright protection, work security" },
    ],
  },
  gaming: {
    name: "Gaming Realm",
    category: "Creative & Work",
    icon: "🎮",
    tagline: "Play without being played",
    description:
      "The Gaming Realm supports gamers with community, organization, and tools — without the toxicity, gambling mechanics, and data harvesting of most gaming platforms.",
    features: [
      {
        title: "Game Management",
        items: [
          "Cross-platform game library",
          "Playtime tracking",
          "Backlog management",
          "Achievement tracking",
          "Cloud save backup",
        ],
      },
      {
        title: "Community",
        items: [
          "Cross-platform friends",
          "Party voice chat",
          "LFG (Looking for Group)",
          "Guilds & clans",
          "Safe, moderated spaces",
        ],
      },
      {
        title: "Wellbeing",
        items: [
          "Play break reminders",
          "Optional session limits",
          "In-game spending tracking",
          "Enhanced toxicity blocking",
        ],
      },
      {
        title: "Modding & Creation",
        items: ["Mod management", "Creation tools for game creators", "Safe mod sharing"],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Gaming schedule, friend coordination" },
      { name: "May", role: "Play breaks, posture reminders, addiction awareness" },
      { name: "Tilda", role: "Game guides, walkthroughs" },
      { name: "Lana", role: "Privacy, harassment protection, spending alerts" },
      { name: "Clara", role: "Game info, reviews, deals" },
    ],
  },
  business: {
    name: "Business Realm",
    category: "Creative & Work",
    icon: "💼",
    tagline: "Run your business, not your business running you",
    description:
      "The Business Realm supports small business owners and entrepreneurs with the tools to run a business ethically and sustainably.",
    features: [
      {
        title: "Business Management",
        items: [
          "Business health dashboard",
          "Invoicing via SoulBank",
          "Expense tracking",
          "Profit & loss reporting",
          "Tax preparation integration",
        ],
      },
      { title: "Team", items: ["Employee management", "Payroll via SoulBank", "Staff scheduling", "Team messaging"] },
      { title: "Operations", items: ["Inventory tracking", "Order management", "Shipping integration", "Basic CRM"] },
      {
        title: "Ethical Business",
        items: ["B Corp resources", "Sustainability tracking", "Fair wage calculator", "Transparent pricing tools"],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Scheduling, invoicing, reminders" },
      { name: "Clara", role: "Business research, market info, regulations" },
      { name: "Tilda", role: "Business education, skill building" },
      { name: "Lana", role: "Business security, fraud protection" },
      { name: "May", role: "Entrepreneur burnout prevention, work-life balance" },
    ],
  },
  "career-growth": {
    name: "Career Growth Realm",
    category: "Creative & Work",
    icon: "📈",
    tagline: "Your career, your terms",
    description:
      "The Career Growth Realm supports job seekers and career builders with tools for finding work, building skills, and advancing professionally.",
    features: [
      {
        title: "Job Search",
        items: [
          "Aggregated job listings",
          "Application tracker",
          "Resume builder",
          "Cover letter templates",
          "Interview prep via Tilda",
          "Salary research",
        ],
      },
      {
        title: "Career Development",
        items: [
          "Skill assessment",
          "Learning paths via Education Realm",
          "Certification tracking",
          "Portfolio showcase",
          "Professional networking",
        ],
      },
      {
        title: "Workplace",
        items: [
          "Performance tracking",
          "Negotiation tools",
          "Workplace rights information",
          "Discrimination documentation",
        ],
      },
      {
        title: "Transitions",
        items: ["Career change support", "Layoff resources", "Retirement transition", "Return to work after gaps"],
      },
    ],
    guardians: [
      { name: "Tilda", role: "Interview prep, skill building, career education" },
      { name: "Betsy", role: "Application tracking, scheduling" },
      { name: "Clara", role: "Company research, salary data" },
      { name: "Lana", role: "Privacy in job search, discrimination documentation" },
      { name: "May", role: "Job search stress management, rejection resilience" },
    ],
  },
  "task-project": {
    name: "Task & Project Realm",
    category: "Creative & Work",
    icon: "✅",
    tagline: "Organize work with Betsy's help",
    description:
      "The Task & Project Realm helps you manage tasks, projects, and goals with Betsy's organizational support across all your work.",
    features: [
      {
        title: "Task Management",
        items: [
          "Create and organize tasks",
          "Priority levels",
          "Due dates and reminders",
          "Recurring tasks",
          "Task dependencies",
        ],
      },
      {
        title: "Projects",
        items: [
          "Project organization",
          "Milestones tracking",
          "Progress visualization",
          "Team collaboration",
          "Time tracking",
        ],
      },
      {
        title: "Goals",
        items: [
          "Set personal and professional goals",
          "Break down into actionable steps",
          "Track progress over time",
          "Celebrate achievements",
        ],
      },
      {
        title: "Integration",
        items: ["Works across all Realms", "Calendar sync", "Smart task suggestions", "Context-aware organization"],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Primary organizational AI - task management, scheduling, coordination" },
      { name: "Clara", role: "Research assistance for projects" },
      { name: "May", role: "Workload balance, stress monitoring" },
      { name: "Tilda", role: "Productivity education, time management" },
      { name: "Lana", role: "Project security, deadline protection" },
    ],
  },
  // Family & Relationships
  family: {
    name: "Family Realm",
    category: "Family & Relationships",
    icon: "👨‍👩‍👧",
    tagline: "Home isn't a place on a server — it's the people you keep synced",
    description:
      "The Family Realm is SoulWire's everyday heartbeat. It replaces scattered group chats and half-broken apps with one calm dashboard where every household can coordinate life without sacrificing privacy.",
    features: [
      {
        title: "Family Groups",
        items: [
          "Multiple households support",
          "Role system (Admin, Guardian, Teen, Sibling)",
          "Secure two-step invite process",
          "Privacy-first design",
        ],
      },
      {
        title: "Shared Calendars",
        items: [
          "Household master calendar",
          "Personal calendars with privacy levels",
          "Recurring events",
          "Smart schedule merging via Betsy",
        ],
      },
      {
        title: "Chores & Tasks",
        items: [
          "Recurring routines",
          "Task assignment",
          "Allowance connection via SoulBank",
          "Progress tracking with rewards",
        ],
      },
      {
        title: "Shopping & Inventory",
        items: [
          "Shared shopping lists",
          "Pantry tracking with expiration alerts",
          "Recipe integration",
          "Price comparison",
        ],
      },
      {
        title: "Adoption & Foster",
        items: [
          "Journey tracking",
          "Placement coordination",
          "Attachment resources",
          "Legal process management",
          "Sibling connection tools",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Calendars, tasks, reminders, coordination" },
      { name: "May", role: "Family health, sleep, nutrition monitoring" },
      { name: "Tilda", role: "Learning moments, life skills education" },
      { name: "Lana", role: "Safety monitoring, distress signal detection" },
      { name: "Clara", role: "Community alerts, weather, local events" },
    ],
  },
  "co-parent": {
    name: "Co-Parent Realm",
    category: "Family & Relationships",
    icon: "👨‍👩‍👧‍👦",
    tagline: "Because cooperation shouldn't require court orders",
    description:
      "The Co-Parent Realm is a neutral, legally-auditable space for separated parents to coordinate childcare, finances, and communication without edits or manipulation.",
    features: [
      {
        title: "Immutable Event Log",
        items: [
          "Append-only ledger with no deletions",
          "Cryptographic verification",
          "Timestamp anchoring",
          "Legal export ready",
        ],
      },
      {
        title: "Immutable Chat",
        items: [
          "Message threads with amendment posts only",
          "Read receipts with timestamps",
          "Evidence export for court",
        ],
      },
      {
        title: "Custody & Calendar",
        items: [
          "Color-coded custody schedule",
          "Swap requests with documented trail",
          "Holiday auto-population",
          "Appointment integration",
        ],
      },
      { title: "Document Vault", items: ["Legal document storage", "E-signatures", "Proof of view receipts"] },
      {
        title: "Rules & Agreements",
        items: ["Versioned agreements with full history", "Clause acknowledgment", "Update notifications"],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Logs, reminders, weekly summaries" },
      { name: "May", role: "Health appointment syncing" },
      { name: "Lana", role: "Immutable logging, coercion detection, emergency contacts" },
      { name: "Clara", role: "Timestamps, custody calendars, legal information" },
      { name: "Tilda", role: "Explains custody/legal jargon" },
    ],
  },
  relationship: {
    name: "Relationship Realm",
    category: "Family & Relationships",
    icon: "💑",
    tagline: "Love, supported",
    description:
      "The Relationship Realm supports intimate partnerships from dating through long-term commitment, helping couples communicate, coordinate, and grow together.",
    features: [
      {
        title: "Dating & Finding Love",
        items: [
          "Privacy-first matching",
          "Verified profiles for safety",
          "No algorithm manipulation",
          "Values-based matching",
          "Video verify before meeting",
          "Safety features and education",
        ],
      },
      {
        title: "Committed Relationships",
        items: [
          "Shared calendar coordination",
          "Communication tools and prompts",
          "Relationship goals tracking",
          "Love languages understanding",
          "Conflict resolution tools",
        ],
      },
      {
        title: "Major Milestones",
        items: [
          "Moving in together planning",
          "Wedding planning tools",
          "Honeymoon coordination",
          "Anniversary tracking",
        ],
      },
      {
        title: "Relationship Challenges",
        items: [
          "Couples counseling finder",
          "Relationship assessments",
          "Separation resources",
          "Divorce support via Legal Realm",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Scheduling, date planning, milestone reminders" },
      { name: "May", role: "Relationship health monitoring, emotional check-ins" },
      { name: "Tilda", role: "Communication skills, healthy relationship education" },
      { name: "Lana", role: "Dating safety, privacy protection, red flag detection" },
      { name: "Clara", role: "Venue research, vendor verification" },
    ],
  },
  "elder-care": {
    name: "Elder Care Realm",
    category: "Family & Relationships",
    icon: "👴",
    tagline: "Caring for those who cared for us",
    description:
      "The Elder Care Realm supports people caring for aging parents or loved ones — one of the most demanding and underappreciated roles in society.",
    features: [
      {
        title: "Care Coordination",
        items: [
          "Care team coordination",
          "Task division among family",
          "Appointment management",
          "Medication tracking via SoulHealth",
          "Daily wellness check-ins",
        ],
      },
      {
        title: "Health Management",
        items: [
          "Medical records integration",
          "Doctor communication",
          "Symptom tracking",
          "Cognitive monitoring",
          "Fall detection via SoulWatch/SoulPendant",
        ],
      },
      {
        title: "Living Arrangements",
        items: ["Aging in place resources", "Facility research and reviews", "Move coordination support"],
      },
      {
        title: "Financial & Legal",
        items: [
          "Power of Attorney via SoulBank",
          "Healthcare directives",
          "Benefits navigation (Medicare, Medicaid, VA)",
          "Financial management tools",
        ],
      },
      {
        title: "Caregiver Wellbeing",
        items: [
          "Burnout monitoring by May",
          "Respite resources",
          "Support groups",
          "Self-care reminders",
          "Grief resources",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Appointment scheduling, care coordination" },
      { name: "May", role: "Elder health monitoring, caregiver wellbeing checks" },
      { name: "Clara", role: "Benefits information, facility research" },
      { name: "Lana", role: "Emergency response, fall detection, elder abuse awareness" },
      { name: "Tilda", role: "Caregiver education, disease information" },
    ],
  },
  pets: {
    name: "Pets Realm",
    category: "Family & Relationships",
    icon: "🐾",
    tagline: "They're family too",
    description:
      "The Pets Realm manages pet care for all pets from dogs and cats to fish, reptiles, and livestock — health, activities, community, and services.",
    features: [
      {
        title: "Pet Profiles",
        items: [
          "Complete pet records with photos",
          "Medical history tracking",
          "Medication schedules",
          "Diet & allergies",
          "Behavior notes",
        ],
      },
      {
        title: "Health Management",
        items: [
          "Vet appointments",
          "Vaccination tracking",
          "Medication reminders",
          "Symptom logging",
          "Weight & activity tracking",
        ],
      },
      {
        title: "Daily Care",
        items: [
          "Feeding schedule via SoulFeeder",
          "Walking/exercise tracking",
          "Grooming appointments",
          "Training logs",
        ],
      },
      {
        title: "Lost Pet Support",
        items: [
          "GPS tracking via SoulCollar",
          "Lost pet alerts to local users",
          "Microchip info via SoulChip",
          "Found pet reporting",
        ],
      },
      {
        title: "Pet Services",
        items: [
          "Vet finder with ratings",
          "Groomer directory",
          "Pet sitter/walker matching",
          "Boarding facilities",
          "Training resources",
        ],
      },
      {
        title: "Special Animals",
        items: [
          "Livestock via SoulHerd",
          "Aquariums via SoulAqua",
          "Reptiles/exotics via SoulTerr",
          "Poultry via SoulCoop",
          "Working dogs via SoulK9",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Appointment scheduling, feeding reminders" },
      { name: "Clara", role: "Breed information, pet care research" },
      { name: "May", role: "Health monitoring, symptom guidance" },
      { name: "Lana", role: "Lost pet alerts, location tracking" },
      { name: "Tilda", role: "Training guidance, pet care education" },
    ],
  },
  parenthood: {
    name: "Parenthood Realm",
    category: "Family & Relationships",
    icon: "👶",
    tagline: "From first heartbeat to first steps and beyond",
    description:
      "The Parenthood Realm supports the journey from trying to conceive through pregnancy, birth, postpartum, and early parenting for all paths to parenthood.",
    features: [
      {
        title: "Trying to Conceive",
        items: [
          "Cycle tracking",
          "Ovulation prediction",
          "Fertility treatment tracking (IUI, IVF)",
          "Partner coordination",
          "Emotional support and loss resources",
        ],
      },
      {
        title: "Pregnancy",
        items: [
          "Week-by-week development tracking",
          "Symptom logging",
          "Appointment management",
          "Kick counting",
          "Birth plan creation",
          "High-risk support",
          "Mental health screening",
        ],
      },
      {
        title: "Birth & Postpartum",
        items: [
          "Birth documentation",
          "Recovery tracking",
          "Feeding support (no judgment)",
          "Sleep tracking",
          "Diaper monitoring",
          "PPD/PPA screening",
          "Partner support resources",
        ],
      },
      {
        title: "Early Parenting (0-5)",
        items: [
          "Developmental milestones",
          "Pediatrician visits and vaccines",
          "Childcare finding",
          "Sleep support",
          "Feeding transitions",
        ],
      },
      {
        title: "All Paths to Parenthood",
        items: [
          "LGBTQ+ parent support",
          "Single parent resources",
          "Adoption connections",
          "Surrogacy support",
          "Grandparents raising grandchildren",
        ],
      },
    ],
    guardians: [
      { name: "May", role: "Health monitoring, symptom guidance, mental health screening" },
      { name: "Betsy", role: "Appointments, checklists, coordination" },
      { name: "Tilda", role: "Parenting education, child development" },
      { name: "Clara", role: "Resource verification, product safety" },
      { name: "Lana", role: "Privacy protection (pregnancy data is sensitive)" },
    ],
  },
  // Health & Wellness
  medical: {
    name: "Medical Realm",
    category: "Health & Wellness",
    icon: "🩺",
    tagline: "Your body, your data, your care",
    description:
      "The Medical Realm manages your personal health — records, tracking, wellness, and coordination of care. Your health data stays on your device unless you choose to share it.",
    features: [
      {
        title: "Health Records",
        items: [
          "Unified medical records",
          "Import/export capability",
          "Lab results tracking",
          "Imaging storage",
          "Allergy alerts",
          "Medication history",
          "Immunization records",
        ],
      },
      {
        title: "Health Tracking",
        items: [
          "Vitals via SoulWatch/SoulHealth",
          "Symptom logging",
          "Chronic condition management",
          "Medication reminders",
          "Sleep quality",
          "Activity tracking",
          "Mental health monitoring",
        ],
      },
      {
        title: "Family Health History",
        items: ["Health conditions by relative", "Genetic risk tracking", "Doctor sharing capability"],
      },
      {
        title: "Emergency Information",
        items: [
          "Lock screen emergency card",
          "Emergency contacts",
          "Critical conditions & allergies",
          "Current medications",
          "Blood type",
          "Organ donor status",
          "Advance directive links",
        ],
      },
    ],
    guardians: [
      { name: "May", role: "Primary health AI - tracking, reminders, insights, guidance" },
      { name: "Betsy", role: "Appointment reminders, medication schedules" },
      { name: "Clara", role: "Medical information, drug interactions, research" },
      { name: "Lana", role: "Emergency protocols, data privacy, HIPAA compliance" },
      { name: "Tilda", role: "Health education, condition information" },
    ],
  },
  "doctor-provider": {
    name: "Doctor & Provider Realm",
    category: "Health & Wellness",
    icon: "👨‍⚕️",
    tagline: "Finding care that cares",
    description:
      "The Doctor & Provider Realm helps you find, evaluate, and connect with healthcare providers — doctors, dentists, therapists, and specialists.",
    features: [
      {
        title: "Find Providers",
        items: [
          "Search by specialty, location, insurance",
          "Verified patient reviews",
          "Insurance verification",
          "Telehealth filtering",
          "Accessibility indicators",
          "LGBTQ+ affirming markers",
          "Language matching",
        ],
      },
      {
        title: "Appointments",
        items: [
          "Direct booking when available",
          "Appointment reminders via Betsy",
          "Prep checklists",
          "Follow-up tracking",
        ],
      },
      {
        title: "Provider Relationships",
        items: [
          "Complete care team view",
          "Secure provider messaging",
          "Medical record sharing with permission",
          "Referral tracking",
        ],
      },
    ],
    guardians: [
      { name: "Clara", role: "Provider research, verification, credential checking" },
      { name: "Betsy", role: "Appointment scheduling, reminders" },
      { name: "May", role: "Appointment preparation, follow-up tracking" },
      { name: "Lana", role: "Privacy, secure messaging" },
      { name: "Tilda", role: "Specialty explanations, question preparation" },
    ],
  },
  "assistive-tech": {
    name: "Assistive Tech Realm",
    category: "Health & Wellness",
    icon: "♿",
    tagline: "Technology is just the beginning",
    description:
      "The Disability & Neurodivergence Realm supports the full experience of living with disability — physical, sensory, cognitive, psychiatric, chronic illness, and neurodivergence.",
    features: [
      {
        title: "Neurodivergence",
        items: [
          "ADHD support with executive function tools",
          "Autism support with sensory management",
          "Dyslexia/dyscalculia accommodations",
          "Masking fatigue management",
          "Late diagnosis resources",
          "Workplace & educational accommodations",
        ],
      },
      {
        title: "Physical Disability",
        items: [
          "Mobility device management",
          "Accessibility mapping",
          "Travel accommodations",
          "Adaptive sports",
          "Home modifications",
          "Personal care attendant management",
          "Accessible transportation",
        ],
      },
      {
        title: "Sensory Disability",
        items: [
          "Deaf/Hard of Hearing resources",
          "Blind/Low Vision optimization",
          "DeafBlind support",
          "Sensory processing tools",
        ],
      },
      {
        title: "Chronic Illness",
        items: [
          "Energy management with spoon theory",
          "Symptom tracking",
          "Medical advocacy tools",
          "Invisible illness validation",
          "Chronic pain management",
        ],
      },
      {
        title: "Rights & Advocacy",
        items: [
          "ADA, IDEA, Section 504 education",
          "Discrimination reporting",
          "Self-advocacy training",
          "Healthcare advocacy",
        ],
      },
      {
        title: "Benefits & Financial",
        items: [
          "SSDI/SSI navigation",
          "Medicaid/Medicare guidance",
          "ABLE accounts via SoulBank",
          "Equipment funding resources",
        ],
      },
    ],
    guardians: [
      { name: "May", role: "Health management, accommodation of health conditions" },
      { name: "Betsy", role: "Scheduling with executive function support" },
      { name: "Tilda", role: "Self-advocacy training, rights education" },
      { name: "Clara", role: "Policy tracking, resource verification" },
      { name: "Lana", role: "Privacy protection, discrimination documentation" },
    ],
  },
  soulhold: {
    name: "SoulHold",
    category: "Health & Wellness",
    icon: "🫂",
    tagline: "Mental health support and therapy tools",
    description:
      "SoulHold provides comprehensive mental health support, therapy tools, and crisis resources in a safe, stigma-free environment.",
    features: [
      {
        title: "Mental Health Tracking",
        items: [
          "Mood journaling",
          "Symptom monitoring",
          "Trigger identification",
          "Pattern recognition",
          "Progress visualization",
        ],
      },
      {
        title: "Therapy Support",
        items: [
          "Therapist finder with specialties",
          "Session notes and goals",
          "Homework tracking",
          "DBT/CBT skill tools",
          "Progress reviews",
        ],
      },
      {
        title: "Crisis Support",
        items: [
          "24/7 crisis hotlines",
          "Safety planning",
          "Emergency contacts",
          "Crisis text lines",
          "Immediate resources",
        ],
      },
      {
        title: "Self-Care",
        items: [
          "Coping skills library",
          "Breathing exercises",
          "Grounding techniques",
          "Self-compassion prompts",
          "Wellness activities",
        ],
      },
      {
        title: "Community",
        items: ["Peer support groups", "Anonymous sharing", "Recovery stories", "Moderated safe spaces"],
      },
    ],
    guardians: [
      { name: "May", role: "Primary mental health support, crisis detection, gentle check-ins" },
      { name: "Lana", role: "Crisis response, safety protocols, privacy protection" },
      { name: "Betsy", role: "Therapy appointment reminders, medication tracking" },
      { name: "Tilda", role: "Mental health education, skill building" },
      { name: "Clara", role: "Therapist verification, resource curation" },
    ],
  },
  soulhaven: {
    name: "SoulHaven",
    category: "Health & Wellness",
    icon: "🏡",
    tagline: "Domestic violence support and safety",
    description:
      "SoulHaven provides critical support for those experiencing domestic violence with safety planning, resources, and connections to help — all with extreme privacy protection.",
    features: [
      {
        title: "Safety Planning",
        items: [
          "Escape planning tools",
          "Document gathering checklist",
          "Financial preparation",
          "Children safety planning",
          "Exit strategy guidance",
        ],
      },
      {
        title: "Documentation",
        items: [
          "Incident logging with timestamps",
          "Photo evidence storage",
          "Text/email preservation",
          "Medical record tracking",
          "Legal documentation preparation",
        ],
      },
      {
        title: "Resources",
        items: [
          "Shelter finder",
          "Legal aid connections",
          "Counseling services",
          "Financial assistance programs",
          "Restraining order guidance",
        ],
      },
      {
        title: "Emergency Features",
        items: [
          "Quick exit button",
          "Disguised app icon",
          "Emergency contact alerts",
          "Location sharing with trusted contacts",
          "Crisis hotline access",
        ],
      },
      {
        title: "Recovery Support",
        items: [
          "Trauma therapy resources",
          "Support groups",
          "Financial recovery tools",
          "Legal advocacy",
          "Children's support services",
        ],
      },
    ],
    guardians: [
      { name: "Lana", role: "Extreme privacy protection, emergency response, evidence security" },
      { name: "May", role: "Trauma support, safety monitoring, wellness check-ins" },
      { name: "Clara", role: "Resource verification, legal information, shelter research" },
      { name: "Betsy", role: "Safety plan coordination, appointment scheduling" },
      { name: "Tilda", role: "Safety education, legal process guidance" },
    ],
  },
  // Money & Resources
  soulbank: {
    name: "SoulBank",
    category: "Money & Resources",
    icon: "🏦",
    tagline: "Your money, your control, your future",
    description:
      "SoulBank is SoulWire's actual bank — not a fintech app. No fees designed to trap poor people, no selling your data, just honest banking that helps you build wealth and security.",
    features: [
      {
        title: "Banking",
        items: [
          "Checking & savings accounts",
          "No fees, no minimums",
          "Debit cards (physical & virtual)",
          "Direct deposit (paid 2 days early)",
          "Mobile check deposit",
          "Bill pay",
          "Joint & teen accounts",
          "Competitive interest rates",
        ],
      },
      {
        title: "Payments",
        items: [
          "Person-to-person transfers",
          "Request money",
          "Split bills",
          "Recurring payments",
          "Invoicing",
          "International transfers",
          "QR payments",
          "Tips & donations",
        ],
      },
      {
        title: "Budgeting & Tracking",
        items: [
          "Budget builder",
          "Spending insights",
          "Income tracking",
          "Bill calendar",
          "Spending alerts",
          "Cash flow forecast",
          "Reports",
          "Net worth tracking",
        ],
      },
      {
        title: "Savings & Goals",
        items: [
          "Savings buckets for multiple goals",
          "Emergency fund builder",
          "Round-up savings",
          "Automatic savings rules",
          "Goal tracking",
          "Savings challenges",
        ],
      },
      {
        title: "Investing",
        items: [
          "Brokerage account",
          "IRA accounts",
          "401(k) rollover",
          "Target date funds",
          "Index funds",
          "ESG investing",
          "Fractional shares",
          "No commissions",
          "529 & ABLE accounts",
        ],
      },
      {
        title: "Debt Management",
        items: [
          "Debt dashboard",
          "Payoff strategies",
          "Mortgage tracking",
          "Student loans",
          "Credit card optimization",
          "Credit score monitoring",
        ],
      },
      {
        title: "Insurance Hub",
        items: ["Policy storage", "Premium tracking", "Coverage analysis", "Claim filing", "Comparison shopping"],
      },
      {
        title: "Estate Planning",
        items: [
          "Will builder",
          "Power of Attorney",
          "Advance directives",
          "Beneficiary tracking",
          "Digital estate planning",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Bill reminders, payment scheduling, goal management" },
      { name: "Clara", role: "Financial education, market info, rate comparisons" },
      { name: "Tilda", role: "Financial literacy, investing education" },
      { name: "Lana", role: "Fraud detection, security monitoring" },
      { name: "May", role: "Financial stress monitoring, celebrates wins" },
    ],
  },
  "housing-renting": {
    name: "Housing & Renting Realm",
    category: "Money & Resources",
    icon: "🏠",
    tagline: "Finding home shouldn't feel homeless",
    description:
      "The Housing & Renting Realm helps you find, secure, and manage housing — whether renting, buying, or somewhere in between.",
    features: [
      {
        title: "Finding Housing",
        items: [
          "Search with honest filters",
          "Scam detection via Lana",
          "True cost calculator",
          "Neighborhood info without bias",
          "Accessibility filters",
          "Discrimination reporting",
          "Waitlist tracking",
        ],
      },
      {
        title: "Renting",
        items: [
          "Application tracker",
          "Document vault for leases",
          "Rent payment via SoulBank",
          "Maintenance request tracking",
          "Landlord communication log",
          "Tenant rights by state",
          "Lease review via Tilda",
          "Move-in/out documentation",
          "Roommate tools",
        ],
      },
      {
        title: "Buying",
        items: [
          "Mortgage pre-approval via SoulBank",
          "Affordability calculator",
          "Offer tracking",
          "Inspection checklist",
          "Closing checklist",
          "First-time buyer resources",
        ],
      },
      {
        title: "Homeownership",
        items: [
          "Mortgage tracking",
          "Home value tracking",
          "Maintenance schedule",
          "Project tracking",
          "Contractor finder",
          "Property tax tracking",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Application tracking, scheduling, reminders" },
      { name: "Clara", role: "Neighborhood data, market info" },
      { name: "Lana", role: "Scam detection, discrimination documentation" },
      { name: "Tilda", role: "Lease explanations, homebuying education" },
    ],
  },
  vehicle: {
    name: "Vehicle Realm",
    category: "Money & Resources",
    icon: "🚗",
    tagline: "Your vehicle, managed",
    description:
      "The Vehicle Realm manages everything about vehicle ownership — maintenance, documentation, costs, and eventually selling or replacing.",
    features: [
      {
        title: "Vehicle Management",
        items: [
          "Vehicle profiles",
          "Maintenance schedule based on mileage/time",
          "Complete maintenance history",
          "Fuel/charging tracking",
          "Mileage logging",
          "Document storage (title, registration, insurance)",
          "Recall alerts",
        ],
      },
      {
        title: "Costs & Financing",
        items: [
          "Loan tracking via SoulBank",
          "True cost of ownership",
          "Insurance integration",
          "Tax deduction tracking",
        ],
      },
      {
        title: "Service & Repair",
        items: [
          "Honest mechanic finder",
          "Fair price estimates",
          "DIY repair guides via Tilda",
          "OBD integration via SoulDrive",
        ],
      },
      {
        title: "Buying & Selling",
        items: [
          "Value estimator",
          "Private sale listing tools",
          "Used car buying checklist",
          "Dealer vs private comparison",
          "Vehicle history reports",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Maintenance reminders, scheduling, document organization" },
      { name: "Clara", role: "Recall info, value estimates, repair information" },
      { name: "May", role: "Safety reminders, fatigue alerts via SoulDrive" },
      { name: "Lana", role: "Theft protection, scam detection" },
    ],
  },
  "shared-hearth": {
    name: "The Shared Hearth",
    category: "Money & Resources",
    icon: "🤝",
    tagline: "Giving that actually helps",
    description:
      "The Charity Realm facilitates giving — money, time, and resources — in ways that actually make a difference through charitable donations, volunteering, and mutual aid.",
    features: [
      {
        title: "Charitable Giving",
        items: [
          "Donation tracking for taxes",
          "Charity verification via Clara",
          "Cause matching",
          "Recurring giving",
          "Automatic receipts",
          "Impact tracking",
          "Giving budget",
          "Employer matching",
        ],
      },
      {
        title: "Volunteering",
        items: [
          "Opportunity finder by skill/location",
          "Skills-based matching",
          "Hour tracking",
          "Group volunteering",
          "Virtual opportunities",
          "Youth & senior programs",
          "Disability-accessible options",
          "Volunteer portfolio",
          "Verification letters",
        ],
      },
      {
        title: "Mutual Aid",
        items: [
          "Local mutual aid network finder",
          "Request help (rides, meals, supplies, money)",
          "Offer help",
          "Community needs board",
          "Disaster response coordination",
          "Solidarity resources",
          "Start a mutual aid group",
          "Transparent fund tracking",
        ],
      },
      {
        title: "Community Service",
        items: [
          "Court-ordered service tracking",
          "School requirements",
          "Scholarship service documentation",
          "Professional requirements",
        ],
      },
      {
        title: "Giving Circles",
        items: [
          "Join giving circles",
          "Start a giving circle",
          "Family philanthropic planning",
          "Workplace giving coordination",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Donation tracking, volunteer scheduling, hour logging" },
      { name: "Clara", role: "Charity verification, cause research, impact data" },
      { name: "Tilda", role: "Philanthropy education, mutual aid principles" },
      { name: "Lana", role: "Scam protection, privacy for mutual aid" },
      { name: "May", role: "Connecting giving to wellbeing, compassion fatigue prevention" },
    ],
  },
  // Education & Growth
  education: {
    name: "Education Realm",
    category: "Education & Growth",
    icon: "📚",
    tagline: "Knowledge belongs to everyone, not to paywalls",
    description:
      "The Education Realm is SoulWire's complete learning ecosystem for students, homeschoolers, and lifelong learners with Tilda as your guide.",
    features: [
      {
        title: "Learning Spaces",
        items: [
          "Personal classrooms",
          "Group collaboration (text, voice, whiteboard)",
          "Core, elective, hobby, career, and life skills courses",
          "Syllabus builder",
          "Grading & feedback tracking",
        ],
      },
      {
        title: "Tutoring",
        items: [
          "AI tutoring via Tilda - guides reasoning, never gives direct answers",
          "Subject packs (math, science, literature, coding, languages, life skills)",
          "Focus mode to block distractions",
          "Full accessibility support",
        ],
      },
      {
        title: "Free Resources",
        items: ["Curated open textbook library", "Offline access downloads", "Citation tracking via Clara"],
      },
      {
        title: "Notes & Portfolio",
        items: ["Rich notes with multiple formats", "Export to PDF, MD, HTML, EPUB", "Optional AI summaries"],
      },
      { title: "Peer Learning", items: ["Study groups", "Shared whiteboards", "Mentor matching"] },
    ],
    guardians: [
      { name: "Tilda", role: "Primary education AI - tutoring, explanations, never gives direct answers" },
      { name: "Betsy", role: "Study scheduling, deadline tracking" },
      { name: "Clara", role: "Citation verification, research assistance" },
      { name: "May", role: "Study breaks, eye strain prevention, wellness" },
      { name: "Lana", role: "Academic integrity, safe online learning" },
    ],
  },
  memory: {
    name: "Memory Realm",
    category: "Education & Growth",
    icon: "📓",
    tagline: "Preserve what matters, process what hurts",
    description:
      "The Memory Realm is for journaling, memories, legacy, and processing life — including grief and loss.",
    features: [
      {
        title: "Journaling",
        items: [
          "Private daily journal",
          "Optional prompts from Tilda",
          "Mood tracking",
          "Gratitude practice",
          "Voice journaling",
          "Fully encrypted",
        ],
      },
      {
        title: "Memory Keeping",
        items: [
          "Photo organization by date/event/person",
          "Memory book creation",
          "Life story recording",
          "Family tree building",
          "Time capsules for future",
        ],
      },
      {
        title: "Legacy",
        items: ["Ethical will (values, not legal)", "Life lessons recording", "Future messages", "Memorial wishes"],
      },
      {
        title: "Grief & Loss",
        items: [
          "Grief journal for processing",
          "Memorial pages",
          "Anniversary reminders (optional)",
          "Grief resources and support",
          "Continuing bonds practices",
          "All types of grief supported",
          "Anticipatory grief resources",
          "Peer support connections",
          "Cultural grief practices",
        ],
      },
    ],
    guardians: [
      { name: "Tilda", role: "Prompts, story assistance, memory organization" },
      { name: "May", role: "Emotional support, grief resources, wellness check-ins" },
      { name: "Betsy", role: "Organization, reminders, time capsule delivery" },
      { name: "Lana", role: "Privacy protection - your most personal data" },
      { name: "Clara", role: "Genealogy research, historical context" },
    ],
  },
  // Social & Entertainment
  social: {
    name: "Social Realm",
    category: "Social & Entertainment",
    icon: "👥",
    tagline: "Connection without manipulation",
    description:
      "The Social Realm is SoulWire's alternative to social media — real connection without algorithms designed to addict you or ads that stalk you.",
    features: [
      {
        title: "Connections",
        items: [
          "Mutual friend connections",
          "Following for public figures",
          "Interest-based groups",
          "Local connections",
        ],
      },
      {
        title: "Sharing",
        items: [
          "Posts (text, photos, videos)",
          "Optional temporary stories",
          "Chronological feed - no algorithm",
          "Granular privacy controls",
        ],
      },
      { title: "Communication", items: ["Private messaging", "Group chats", "Voice/video calls and hangouts"] },
      {
        title: "Wellbeing",
        items: [
          "Optional engagement metrics (no forced like counts)",
          "Time awareness tracking",
          "Design that reduces social comparison",
          "Encouraged breaks",
        ],
      },
      {
        title: "Friendship",
        items: [
          "Friend maintenance reminders",
          "Friendship levels (close, acquaintance, etc.)",
          "Shared activity suggestions",
          "Long-distance friendship tools",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Friend reminders, event planning" },
      { name: "May", role: "Social wellbeing, comparison awareness, break reminders" },
      { name: "Lana", role: "Privacy, harassment protection, blocking" },
      { name: "Tilda", role: "Social skills, communication help" },
      { name: "Clara", role: "Event info, local happenings" },
    ],
  },
  entertainment: {
    name: "Entertainment Realm",
    category: "Social & Entertainment",
    icon: "🎬",
    tagline: "Watch, listen, play — on your terms",
    description:
      "The Entertainment Realm is for consuming media — movies, TV, music, podcasts, books — without surveillance, ads, or algorithmic manipulation.",
    features: [
      {
        title: "Cinema Keep",
        items: [
          "Personal media library",
          "Streaming service integration",
          "Unified search across platforms",
          "Watchlist management",
          "Watch history",
          "Recommendations based on taste, not ads",
        ],
      },
      {
        title: "Music",
        items: [
          "Music library management",
          "Playlist creation and sharing",
          "Streaming service integration",
          "Discovery without manipulation",
        ],
      },
      {
        title: "Podcasts & Audio",
        items: ["Podcast player with subscriptions", "Audiobooks via SoulRead", "Show discovery"],
      },
      { title: "Reading", items: ["E-books via SoulRead integration", "Reading lists", "Reading history tracking"] },
      { title: "Games", items: ["Game tracking", "Links to Gaming Realm for full features"] },
    ],
    guardians: [
      { name: "Betsy", role: "Watchlist management, new episode reminders" },
      { name: "Clara", role: "Content information, honest recommendations" },
      { name: "May", role: "Screen time awareness, break reminders" },
      { name: "Tilda", role: "Discussion guides, learning from entertainment" },
      { name: "Lana", role: "Privacy - no tracking of what you watch" },
    ],
  },
  "cinema-keep": {
    name: "Cinema Keep",
    category: "Social & Entertainment",
    icon: "🎥",
    tagline: "Your personal film and media library",
    description:
      "Cinema Keep is your unified media library integrated into the Entertainment Realm, bringing all your movies, shows, and streaming services together.",
    features: [
      {
        title: "Unified Library",
        items: [
          "All your owned media in one place",
          "Streaming service integration",
          "Physical media tracking",
          "Digital purchases organized",
        ],
      },
      {
        title: "Discovery",
        items: [
          "Search across all platforms simultaneously",
          "Honest recommendations based on your taste",
          "No promoted content",
          "Genre and mood browsing",
        ],
      },
      {
        title: "Organization",
        items: ["Custom collections", "Watchlists by mood/occasion", "Watched history", "Rating and notes"],
      },
      {
        title: "Sharing",
        items: [
          "Share recommendations with friends",
          "Create shared watchlists",
          "Family viewing coordination",
          "No spoilers protection",
        ],
      },
    ],
    guardians: [
      { name: "Clara", role: "Content information, metadata accuracy, availability tracking" },
      { name: "Betsy", role: "Watchlist organization, new release notifications" },
      { name: "Tilda", role: "Film analysis, discussion prompts, educational content" },
      { name: "May", role: "Viewing time awareness, healthy habits" },
      { name: "Lana", role: "Privacy - no tracking your viewing habits" },
    ],
  },
  "safe-browser": {
    name: "Safe Browser Realm",
    category: "Social & Entertainment",
    icon: "🌐",
    tagline: "Browse without being the product",
    description:
      "The Safe Browser is SoulWire's privacy-focused web browser with Lana's protection — blocking trackers, ads, and fingerprinting.",
    features: [
      {
        title: "Privacy",
        items: [
          "Block all known trackers",
          "Ad blocking (optional allowlist)",
          "Fingerprint protection",
          "Cookie management",
          "HTTPS everywhere",
        ],
      },
      {
        title: "Browsing",
        items: [
          "Standard tabs",
          "Bookmarks",
          "Private local-only history",
          "Downloads management",
          "Distraction-free reading mode",
        ],
      },
      {
        title: "Security",
        items: [
          "Phishing protection via Lana",
          "Malware blocking",
          "Dangerous site warnings",
          "Password integration via SoulVault",
        ],
      },
      {
        title: "Family Safety",
        items: ["Content filtering for kids/teens", "Safe search", "Parent-controlled site blocking"],
      },
    ],
    guardians: [
      { name: "Lana", role: "Security, phishing detection, privacy protection" },
      { name: "Clara", role: "Fact-checking, source verification" },
      { name: "Betsy", role: "Bookmark organization" },
      { name: "Tilda", role: "Research assistance, reading help" },
    ],
  },
  // Home & Daily Life
  home: {
    name: "Home Realm",
    category: "Home & Daily Life",
    icon: "🏠",
    tagline: "Your sanctuary, organized",
    description:
      "The Home Realm manages your living space — smart home, maintenance, organization, and daily household operations.",
    features: [
      {
        title: "Smart Home",
        items: [
          "All SoulWire device control",
          "Automation rules and routines",
          "One-tap scenes (movie night, bedtime, away)",
          "Energy monitoring via SoulPower",
          "Security via SoulSecure",
          "Climate via SoulStat",
        ],
      },
      {
        title: "Maintenance",
        items: [
          "Maintenance schedules",
          "Appliance tracking with warranties",
          "Verified contractor finder",
          "Home improvement project tracking",
        ],
      },
      {
        title: "Organization",
        items: ["Cleaning schedule", "Inventory management", "Storage maps for finding things"],
      },
      {
        title: "Sustainability",
        items: [
          "Energy usage tracking",
          "Solar monitoring",
          "Water conservation",
          "Waste reduction tips",
          "Carbon footprint calculation",
          "Sustainable product alternatives",
          "Garden/compost support",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Scheduling, reminders, organization" },
      { name: "Clara", role: "Contractor verification, product research, sustainability info" },
      { name: "May", role: "Home environment health (air quality, etc.)" },
      { name: "Lana", role: "Home security, emergency protocols" },
      { name: "Tilda", role: "Home skills, DIY guidance" },
    ],
  },
  travel: {
    name: "Travel Realm",
    category: "Home & Daily Life",
    icon: "✈️",
    tagline: "Adventure, organized",
    description:
      "The Travel Realm supports trip planning, booking, and on-the-road needs — without the manipulation of typical travel sites.",
    features: [
      {
        title: "Planning",
        items: [
          "Multi-stop trip builder",
          "Destination research via Clara",
          "Day-by-day itineraries",
          "Customizable packing lists",
          "Budget via SoulBank integration",
        ],
      },
      {
        title: "Booking",
        items: [
          "Honest price comparison",
          "No hidden fees display",
          "All reservations centralized",
          "Loyalty program tracking",
        ],
      },
      {
        title: "On the Road",
        items: [
          "Offline map downloads",
          "Translation via SoulBridge",
          "Currency conversion via SoulBank",
          "Local emergency info",
          "Safety check-ins",
        ],
      },
      {
        title: "Travel Types",
        items: [
          "Accessible travel planning",
          "Family-friendly options",
          "Solo travel safety",
          "Adventure travel via SoulTrail",
          "Business travel tools",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Itinerary management, reminders, organization" },
      { name: "Clara", role: "Destination research, travel advisories, local info" },
      { name: "Lana", role: "Travel safety, emergency protocols, check-ins" },
      { name: "May", role: "Jet lag support, travel health, wellness" },
      { name: "Tilda", role: "Language basics, cultural education" },
    ],
  },
  identity: {
    name: "Identity Realm",
    category: "Home & Daily Life",
    icon: "🆔",
    tagline: "You are not your data",
    description:
      "The Identity Realm manages identity documents, verification, and digital identity — protecting you from identity theft while giving you control.",
    features: [
      {
        title: "Document Management",
        items: [
          "Secure ID scans (passport, license, etc.)",
          "Expiration alerts and renewal reminders",
          "Physical document location tracking",
          "Vital records storage",
        ],
      },
      {
        title: "Digital Identity",
        items: [
          "Password management via SoulVault",
          "Two-factor authentication backup",
          "Account inventory",
          "Data broker removal assistance",
        ],
      },
      {
        title: "Identity Protection",
        items: [
          "Dark web monitoring via Lana",
          "Credit monitoring via SoulBank",
          "Fraud alert system",
          "Identity theft recovery resources",
        ],
      },
      {
        title: "Verification",
        items: [
          "Optional SoulWire identity verification",
          "Selective disclosure (prove facts without revealing documents)",
          "Age verification without revealing birthdate",
        ],
      },
    ],
    guardians: [
      { name: "Lana", role: "Primary identity protection, monitoring, security" },
      { name: "Betsy", role: "Document organization, renewal reminders" },
      { name: "Clara", role: "Data broker research, removal processes" },
      { name: "Tilda", role: "Identity safety education" },
    ],
  },
  food: {
    name: "Food Realm",
    category: "Home & Daily Life",
    icon: "🍽️",
    tagline: "Recipes, meal planning, dietary tracking",
    description:
      "The Food Realm helps you plan meals, track nutrition, discover recipes, and coordinate food for your household.",
    features: [
      {
        title: "Meal Planning",
        items: [
          "Weekly meal planner",
          "Recipe collection and organization",
          "Auto-generate shopping lists",
          "Dietary preference filtering",
          "Leftover tracking",
        ],
      },
      {
        title: "Recipe Discovery",
        items: [
          "Recipe search and saving",
          "Dietary accommodation (allergies, preferences)",
          "Cooking skill level filtering",
          "Budget-friendly options",
          "Meal prep guides",
        ],
      },
      {
        title: "Nutrition",
        items: [
          "Calorie and macro tracking (optional)",
          "Dietary goals",
          "Nutrition information",
          "Meal logging",
          "Water intake tracking",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Smart shopping lists",
          "Pantry inventory",
          "Price comparison",
          "Store integration",
          "Meal cost calculation",
        ],
      },
      {
        title: "Family Coordination",
        items: ["Shared meal plans", "Family dietary needs", "Cooking schedules", "Recipe sharing"],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Meal planning, shopping lists, pantry organization" },
      { name: "May", role: "Nutrition guidance, dietary needs, wellness" },
      { name: "Clara", role: "Recipe research, food safety information" },
      { name: "Tilda", role: "Cooking skills, technique education" },
      { name: "Lana", role: "Privacy in food tracking" },
    ],
  },
  legal: {
    name: "Legal Realm",
    category: "Home & Daily Life",
    icon: "⚖️",
    tagline: "Justice should be accessible, not expensive",
    description:
      "The Legal Realm helps everyday people navigate legal systems — storing documents, understanding rights, and connecting with verified legal help.",
    features: [
      {
        title: "Document Vault",
        items: ["Legal document storage", "Template library", "E-signatures", "Organization by matter/date/type"],
      },
      {
        title: "Know Your Rights",
        items: [
          "Plain-language rights guides",
          "Situation-specific information (arrest, eviction, employment)",
          "State law variations",
          "Updates via Clara when laws change",
        ],
      },
      {
        title: "Legal Help",
        items: [
          "Verified attorney finder",
          "Pro bono resources",
          "Legal aid (low-cost options)",
          "Self-help resources",
        ],
      },
      {
        title: "Divorce & Separation",
        items: [
          "State-specific process guide",
          "Document preparation",
          "Lawyer vs mediation guidance",
          "Asset division tools",
          "Custody basics",
          "Emotional support resources",
          "DV resources via SoulHaven",
          "Co-parent transition",
        ],
      },
      {
        title: "Estate Planning",
        items: ["Will basics", "Estate planning attorney finder", "Links to SoulBank for full tools"],
      },
      {
        title: "Guardianship",
        items: [
          "When guardianship is needed",
          "Supported decision-making alternatives",
          "Petition process",
          "Guardian responsibilities",
          "Ending guardianship",
        ],
      },
    ],
    guardians: [
      { name: "Clara", role: "Legal research, law updates, resource verification" },
      { name: "Tilda", role: "Plain-language explanations, rights education" },
      { name: "Betsy", role: "Document organization, deadline tracking" },
      { name: "Lana", role: "Document security, evidence protection" },
      { name: "May", role: "Stress support during legal proceedings" },
    ],
  },
  civic: {
    name: "Civic Realm",
    category: "Home & Daily Life",
    icon: "🏛️",
    tagline: "Voting, local government, community",
    description:
      "The Civic Realm helps you engage with democracy and your local community through voting, local government participation, and civic involvement.",
    features: [
      {
        title: "Voting",
        items: [
          "Voter registration status",
          "Election reminders and deadlines",
          "Ballot preview and research",
          "Candidate information via Clara",
          "Issue guide summaries",
          "Polling location finder",
          "Early voting and absentee info",
        ],
      },
      {
        title: "Local Government",
        items: [
          "Town hall meeting schedules",
          "City council agendas",
          "Public comment opportunities",
          "Local representative contact info",
          "Bill tracking",
          "Community forum",
        ],
      },
      {
        title: "Community Engagement",
        items: [
          "Neighborhood associations",
          "Community events",
          "Volunteer opportunities",
          "Local issue organizing",
          "Petition support",
        ],
      },
      {
        title: "Civic Education",
        items: [
          "How government works via Tilda",
          "Understanding ballot measures",
          "Candidate research tools",
          "Political literacy resources",
        ],
      },
    ],
    guardians: [
      { name: "Clara", role: "Candidate research, fact-checking, ballot information" },
      { name: "Betsy", role: "Election reminders, meeting schedules" },
      { name: "Tilda", role: "Civic education, explaining government processes" },
      { name: "Lana", role: "Voting privacy protection" },
      { name: "May", role: "Civic engagement wellness, preventing burnout" },
    ],
  },
  news: {
    name: "News Realm",
    category: "Home & Daily Life",
    icon: "📰",
    tagline: "Verified news with Clara's fact-checking",
    description:
      "The News Realm provides access to verified, fact-checked news with Clara's help, combating misinformation and media manipulation.",
    features: [
      {
        title: "News Feed",
        items: [
          "Curated from verified sources",
          "Chronological by default (no engagement algorithm)",
          "Multiple perspectives on major stories",
          "Local news prioritization",
          "Topic filtering",
        ],
      },
      {
        title: "Fact-Checking",
        items: [
          "Clara verifies claims",
          "Source credibility ratings",
          "Bias indicators",
          "Original source links",
          "Correction tracking",
        ],
      },
      {
        title: "Personalization",
        items: [
          "Topic preferences",
          "Source selection",
          "Breaking news alerts (optional)",
          "Save for later",
          "Reading history",
        ],
      },
      {
        title: "Media Literacy",
        items: [
          "How to spot misinformation via Tilda",
          "Understanding bias",
          "Source evaluation",
          "Critical reading skills",
        ],
      },
    ],
    guardians: [
      { name: "Clara", role: "Primary news AI - fact-checking, source verification, bias detection" },
      { name: "Tilda", role: "Media literacy education, critical thinking" },
      { name: "Betsy", role: "News organization, reading list management" },
      { name: "May", role: "News consumption wellness, doomscrolling prevention" },
      { name: "Lana", role: "Privacy in news reading habits" },
    ],
  },
  spiritual: {
    name: "Spiritual Realm",
    category: "Home & Daily Life",
    icon: "🕯️",
    tagline: "Sacred space in a digital world",
    description:
      "The Spiritual Realm provides space for faith, meditation, spiritual community, and personal practice — without judgment, advertising, or data harvesting.",
    features: [
      {
        title: "Personal Practice",
        items: [
          "Meditation (guided and timed)",
          "Prayer journaling and reminders",
          "Breathing exercises",
          "Practice tracking",
          "Ritual scheduling",
        ],
      },
      {
        title: "Sacred Texts",
        items: [
          "Multi-faith library",
          "Structured reading plans",
          "Personal annotations",
          "Audio texts",
          "Study guides via Tilda",
        ],
      },
      {
        title: "Community",
        items: [
          "Verified faith communities",
          "Services and gathering events",
          "Study groups",
          "Respectful interfaith dialogue",
        ],
      },
      {
        title: "Observance",
        items: ["Religious calendar with holy days", "Fasting tracking", "Sabbath mode for intentional disconnect"],
      },
      {
        title: "Transitions",
        items: [
          "Grief support (links to Memory Realm)",
          "Spiritual resources for major life events",
          "Spiritual direction finder",
        ],
      },
    ],
    guardians: [
      { name: "Tilda", role: "Study assistance, text exploration" },
      { name: "Betsy", role: "Practice scheduling, community coordination" },
      { name: "May", role: "Wellness integration, grief support" },
      { name: "Clara", role: "Resource curation, community safety" },
      { name: "Lana", role: "Privacy protection - deeply personal data" },
    ],
  },
  // Professional Support
  "professional-support": {
    name: "Professional Support Realm",
    category: "Professional Support",
    icon: "👷",
    tagline: "Every worker deserves support",
    description:
      "The Professional Support Realm is a single app that adapts to support workers across 17 different professions with profession-specific tools, resources, and community.",
    features: [
      {
        title: "How It Works",
        items: [
          "Select your profession from dropdown",
          "Dashboard configures with profession-specific features",
          "Switch professions anytime",
          "Access tools tailored to your work",
        ],
      },
      {
        title: "17 Professions Supported",
        items: [
          "Blue Collar / Trades",
          "Healthcare",
          "Education",
          "Service Member",
          "First Responder",
          "Law Enforcement",
          "Agriculture",
          "Delivery / Transport",
          "Mental Health Provider",
          "Social Worker",
          "Childcare",
          "Hospitality / Service",
          "Journalism",
          "Funeral / Death Care",
          "Veterinary",
          "Legal Professional",
          "Clergy / Spiritual Leader",
        ],
      },
      {
        title: "Common Features",
        items: [
          "Shift scheduling and coordination",
          "Professional certification tracking",
          "Continuing education",
          "Burnout prevention via May",
          "Safety protocols via Lana",
          "Union resources",
          "Peer support communities",
        ],
      },
      {
        title: "Profession-Specific Tools",
        items: [
          "Tailored documentation",
          "Industry-specific workflows",
          "Specialized safety features",
          "Professional development resources",
        ],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Scheduling, documentation, organization across all professions" },
      { name: "May", role: "Burnout prevention, wellness, trauma support" },
      { name: "Clara", role: "Regulations, resources, continuing education" },
      { name: "Lana", role: "Safety, accountability, anonymous reporting" },
      { name: "Tilda", role: "Training, skill development, education" },
    ],
  },
  // Safety Systems
  soulshelter: {
    name: "SoulShelter",
    category: "Safety Systems",
    icon: "🏘️",
    tagline: "No one left behind in the digital age",
    description:
      "SoulShelter coordinates homeless services — shelters, resources, and case management — with dignity, privacy, and without surveillance.",
    features: [
      {
        title: "Shelter Services",
        items: [
          "Real-time bed availability",
          "Reservations where available",
          "Waitlist position tracking",
          "Community safety ratings",
        ],
      },
      {
        title: "Basic Needs",
        items: [
          "Meal service locations and schedules",
          "Clothing resources",
          "Hygiene facilities (showers)",
          "Mail/address services",
        ],
      },
      {
        title: "Health",
        items: [
          "Medicine management via Medical Realm",
          "Healthcare access for unhoused",
          "Mental health resources",
          "Crisis support",
        ],
      },
      {
        title: "Documents",
        items: ["Secure digital ID storage", "Benefits application help", "Document recovery assistance"],
      },
      {
        title: "Pathways",
        items: ["Employment resources", "Housing transition (transitional, permanent)", "Education opportunities"],
      },
      {
        title: "Safety",
        items: ["Anonymous wellness check-ins", "Emergency contacts", "No location tracking", "Privacy first"],
      },
    ],
    guardians: [
      { name: "Betsy", role: "Resource coordination, appointments" },
      { name: "May", role: "Health tracking, medication management" },
      { name: "Clara", role: "Resource verification, benefits info" },
      { name: "Lana", role: "Privacy protection, safety without surveillance" },
      { name: "Tilda", role: "Skill building, education access" },
    ],
  },
  "soulbridge-translation": {
    name: "SoulBridge",
    category: "Safety Systems",
    icon: "🌍",
    tagline: "Language should connect, not divide",
    description:
      "SoulBridge provides translation and language access — real-time translation, language learning, and cultural context across all of SoulWire.",
    features: [
      {
        title: "Translation",
        items: [
          "Real-time text translation across all Realms",
          "Voice translation",
          "Video captioning with translation",
          "Document translation",
          "Image text translation",
        ],
      },
      { title: "Offline", items: ["Downloadable language packs", "Essential emergency phrases"] },
      { title: "Context", items: ["Cultural notes beyond words", "Idiom explanations", "Formality level guidance"] },
      {
        title: "Specialized",
        items: [
          "Medical terminology translation",
          "Legal terminology translation",
          "Professional interpreter connections",
        ],
      },
      { title: "Accessibility", items: ["Sign language support (ASL and others)", "Interpreter finder"] },
    ],
    guardians: [
      { name: "Clara", role: "Translation accuracy, terminology expertise" },
      { name: "Tilda", role: "Language learning, cultural education" },
      { name: "Betsy", role: "Translation coordination" },
      { name: "Lana", role: "Secure translation, privacy" },
      { name: "May", role: "Medical translation accuracy" },
    ],
  },
  soultrail: {
    name: "SoulTrail",
    category: "Safety Systems",
    icon: "🥾",
    tagline: "Missing persons location and recovery",
    description:
      "SoulTrail provides safety for outdoor adventures and emergency location services for missing persons recovery.",
    features: [
      {
        title: "Adventure Safety",
        items: [
          "Trail maps and navigation",
          "Weather integration via SoulWeather",
          "Emergency location beacon via SoulBeacon",
          "Check-in system",
          "Trip planning",
        ],
      },
      {
        title: "Missing Persons",
        items: [
          "Location broadcasting when missing",
          "Coordinated search efforts",
          "Family/authority communication",
          "Search volunteer coordination",
          "Recovery resources",
        ],
      },
      {
        title: "Outdoor Recreation",
        items: [
          "Hiking trail database",
          "Camping site information",
          "Wildlife alerts",
          "Trail conditions",
          "Gear checklists",
        ],
      },
      {
        title: "Emergency Response",
        items: [
          "Quick SOS activation",
          "Automated emergency contacts",
          "Location sharing with first responders",
          "Search and rescue coordination",
        ],
      },
    ],
    guardians: [
      { name: "Lana", role: "Emergency response, location security, search coordination" },
      { name: "Clara", role: "Weather data, trail information, condition updates" },
      { name: "Betsy", role: "Trip planning, check-in reminders" },
      { name: "May", role: "Adventure safety, wellness monitoring" },
      { name: "Tilda", role: "Outdoor skills, safety education" },
    ],
  },
  souldrive: {
    name: "SoulDrive",
    category: "Safety Systems",
    icon: "🚗",
    tagline: "Vehicle emergency and accident response",
    description: "SoulDrive provides vehicle emergency detection, crash response, and driver safety monitoring.",
    features: [
      {
        title: "Crash Detection",
        items: [
          "Automatic crash detection",
          "Emergency service notification",
          "Location sharing with first responders",
          "Emergency contact alerts",
        ],
      },
      {
        title: "Roadside Assistance",
        items: [
          "Breakdown help requests",
          "Tow truck coordination",
          "Service provider connections",
          "Location sharing",
        ],
      },
      {
        title: "Driver Safety",
        items: ["Fatigue detection", "Distraction alerts", "Safe driving coaching", "Break reminders"],
      },
      {
        title: "Vehicle Integration",
        items: ["OBD-II connection", "Vehicle diagnostics", "Maintenance alerts", "Trip logging"],
      },
    ],
    guardians: [
      { name: "Lana", role: "Emergency detection and response, crash coordination" },
      { name: "May", role: "Fatigue monitoring, wellness checks, stress detection" },
      { name: "Betsy", role: "Roadside assistance coordination" },
      { name: "Clara", role: "Service provider verification, location data" },
      { name: "Tilda", role: "Safe driving education" },
    ],
  },
  reentry: {
    name: "Reentry Realm",
    category: "Safety Systems",
    icon: "🔓",
    tagline: "Post-incarceration support and integration",
    description:
      "The Reentry Realm supports people transitioning from incarceration back to community life with resources, advocacy, and practical assistance.",
    features: [
      {
        title: "Reentry Planning",
        items: [
          "Pre-release planning",
          "Release date countdown",
          "Document preparation",
          "Housing planning",
          "Employment preparation",
        ],
      },
      {
        title: "Basic Needs",
        items: [
          "Housing resources",
          "Food assistance",
          "Clothing support",
          "Transportation help",
          "Healthcare connection",
        ],
      },
      {
        title: "Legal Support",
        items: [
          "Parole/probation tracking",
          "Legal rights education",
          "Record sealing/expungement",
          "Court date management",
          "Attorney connections",
        ],
      },
      {
        title: "Employment",
        items: [
          "Second-chance employer database",
          "Job skills training",
          "Resume building",
          "Interview prep",
          "Employment rights",
        ],
      },
      {
        title: "Family Reconnection",
        items: [
          "Family contact coordination",
          "Parenting support",
          "Child custody navigation",
          "Relationship rebuilding",
        ],
      },
      {
        title: "Community",
        items: ["Peer support groups", "Mentorship matching", "Success stories", "Accountability partners"],
      },
    ],
    guardians: [
      { name: "Clara", role: "Legal information, resource verification, rights education" },
      { name: "Betsy", role: "Appointment tracking, task management, goal setting" },
      { name: "May", role: "Mental health support, trauma processing, wellness" },
      { name: "Tilda", role: "Education access, skill building" },
      { name: "Lana", role: "Privacy protection, safety planning" },
    ],
  },
  immigration: {
    name: "Immigration Realm",
    category: "Safety Systems",
    icon: "🛂",
    tagline: "Navigate immigration systems and rights",
    description:
      "The Immigration Realm helps immigrants, refugees, and their families navigate the complex immigration system with information, resources, and support.",
    features: [
      {
        title: "Immigration Process",
        items: [
          "Case tracking",
          "Form assistance",
          "Document checklists",
          "Deadline reminders",
          "Interview preparation",
        ],
      },
      {
        title: "Know Your Rights",
        items: [
          "Immigration rights by status",
          "Interaction with authorities",
          "Workplace rights",
          "Housing rights",
          "Emergency contacts",
        ],
      },
      {
        title: "Legal Help",
        items: ["Immigration attorney finder", "Legal aid resources", "Document review", "Case status lookup"],
      },
      {
        title: "Integration Support",
        items: [
          "English learning resources",
          "Cultural adjustment",
          "Community connections",
          "Employment assistance",
          "Education access",
        ],
      },
      {
        title: "Family",
        items: ["Family reunification tracking", "Sponsor coordination", "Child education rights", "Healthcare access"],
      },
      {
        title: "Refugees & Asylum",
        items: ["Asylum process guidance", "Resettlement support", "Trauma resources", "Community sponsorship"],
      },
    ],
    guardians: [
      { name: "Clara", role: "Immigration information, policy updates, form guidance" },
      { name: "Tilda", role: "Language learning, cultural education, system navigation" },
      { name: "Betsy", role: "Document organization, deadline tracking" },
      { name: "Lana", role: "Rights protection, emergency response, privacy" },
      { name: "May", role: "Immigration stress support, trauma resources" },
    ],
  },
}

// Generate static paths for all realms
export async function generateStaticParams() {
  return Object.keys(realms).map((slug) => ({
    slug: slug,
  }))
}

export default async function RealmDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const realm = realms[slug as keyof typeof realms]

  if (!realm) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-6 text-muted-foreground hover:text-foreground">
            <Link href="/realms">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all Realms
            </Link>
          </Button>

          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{realm.icon}</div>
              <div>
                <div className="text-sm text-primary font-medium mb-2">{realm.category}</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance tracking-tight">{realm.name}</h1>
              </div>
            </div>
            <p className="text-2xl md:text-3xl text-primary font-medium italic">{realm.tagline}</p>
            <p className="text-xl text-foreground leading-relaxed">{realm.description}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Features" subtitle="Everything this Realm provides" className="mb-16" />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {realm.features.map((feature, i) => (
              <Card key={i} className="bg-background border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guardian Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Guardian AI Support" subtitle="Your AI partners in this Realm" className="mb-12" />

          <div className="max-w-4xl mx-auto space-y-4">
            {realm.guardians.map((guardian, i) => (
              <Card key={i} className="bg-card border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{guardian.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{guardian.name}</h4>
                      <p className="text-muted-foreground">{guardian.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to explore {realm.name}?</h2>
            <p className="text-lg text-muted-foreground">This Realm is part of the complete SoulWire ecosystem</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#newsletter">Follow the Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/realms">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  All Realms
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
