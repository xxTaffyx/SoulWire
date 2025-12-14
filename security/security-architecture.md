⚙️ SoulWire Security Architecture

“Built for trust, not control.”
🕯 Hollow Hearth warmth • 🌌 SoulWire Teal precision • 🔮 Dream-Circuit foresight

🩶 Purpose

This document maps the under-the-hood structure of SoulWire’s safety model — how encryption, AI guardians, and Realm isolation layers cooperate to protect users, families, and creators.
It’s not just “how data is locked,” but how power is distributed so no single process can ever betray a user’s trust.

🌌 1. Core Principles

Local-First → Every Realm runs client-side first.

Minimal Trust Surface → No global super-user keys.

Explicit Consent → Nothing happens without a click, tap, or opt-in.

Immutable Evidence → Important logs can’t be rewritten — only amended.

Human Auditability → Everything can be read and verified by people, not only machines.

🔐 2. Layered Security Model
🧱 Layer 1 — Device Vaults

Every user’s device maintains an encrypted local vault using OS-native secure storage (DPAPI, Secure Enclave, or Keychain).

Secrets never leave the vault; even updates or sync jobs fetch temporary tokens instead of long-lived keys.

🌉 Layer 2 — Realm Isolation

Each Realm (Family, Medical, Business, etc.) runs as a sandboxed module.

Modules communicate only through a signed IPC bridge called the SoulWire Bus.

The Bus enforces “need-to-know” permissions; one Realm cannot read another’s data directly.

🛰️ Layer 3 — Encrypted Transport

All inter-realm or cloud communications use AES-256-GCM or ChaCha20-Poly1305 via TLS 1.3.

Messages are wrapped in short-lived session envelopes signed with Ed25519.

Perfect Forward Secrecy (PFS) keys rotate every 24 hours or 10 MB of data.

🧩 Layer 4 — Hash-Chained Ledgers

Critical Realms (Co-Parent, Business, Payments, Medical) write events to a Merkle-chain ledger.

Each block includes timestamp, hash of prior event, and signature.

Verification tools allow anyone to confirm authenticity offline.

🪞 Layer 5 — Guardian AIs

The five AIs (Bitsy, Clara, Lana, Tilda, May) operate as independent micro-services inside isolated sandboxes.

They communicate through signed messages — never shared memory.

Each AI has scoped read/write rights to certain Realms only.

Example: May can read Medical data but not Social logs; Clara can verify documents but not open them.

🧭 3. Data Flow Overview
[User Action]
   ↓
[Realm Frontend]
   ↓   (local validation)
[Realm Service Layer]
   ↓   (writes to local vault)
[Encryption Engine] ←→ [AI Guardians]
   ↓
[Optional Sync → Encrypted Tunnel → Cloud Mirror]


Vault Encryption: AES-256 with per-realm salt.

AI Interaction: Only metadata and user-consented snippets travel between guardians.

Cloud Mirror: Opt-in; stores encrypted blobs with no server-side keys.

🧬 4. Key Management
Key Type	Scope	Storage	Rotation
Master Device Key	User’s device	OS Secure Enclave	Never exported
Realm Key	Each Realm	Local vault	Rotates monthly
Session Key	Per connection	Memory only	Every 15 min or session end
Audit Key	Ledger signing	Local vault + optional HSM	Yearly renewal
🛡️ 5. AI Communication Bus

Messages use a signed manifest envelope:
{ sender, recipient, scope, purpose, timestamp, hash }

The receiving AI verifies the signature before accepting.

Lana monitors for cross-realm data requests outside declared scope and rejects them automatically.

All AI messages are logged immutably for forensic review.

💠 6. Realm Access Matrix (Simplified)
Realm	Betsy	Clara	Lana	Tilda	May
Creator	✓	✓	✓	✓	✗
Family	✓	✓	✓	✓	✓
Co-Parent	✓	✓	✓	✓	✓
Payments	✓	✓	✓	✗	✗
Education	✓	✓	✓	✓	✓
Medical	✗	✓	✓	✓	✓
Social	✓	✓	✓	✓	✗
Business	✓	✓	✓	✓	✗
Pets	✓	✓	✓	✓	✓

(✓ = Authorized with user consent; ✗ = No access)

🔮 7. Audit & Verification

Every update build includes a signed manifest:
build.yml → checksum.sha512 → signed.manifest.asc

Users can verify integrity with the built-in soulwire verify command.

Optional third-party auditors may re-sign verified builds; multi-sig accepted.

🧠 8. Threat Response Model
Threat Type	Detection	Response
Unauthorized Access	Lana monitors permission calls	Immediate revoke + alert
Data Tampering	Hash-chain mismatch	Ledger rollback + proof-of-alteration
AI Misbehavior	Cross-scope request flagged	Process isolation + audit snapshot
Malware / MITM	Certificate pinning	Auto-disconnect + log
Emergency Override	“Help Now” trigger	Verified authority contact via encrypted tunnel
🕊️ 9. Recovery & Continuity

Local Backups: versioned snapshots of vaults encrypted with recovery key.

Recovery Phrase: optional 24-word key generated offline.

Device Loss: re-key from verified phrase; cross-sign from secondary device if set.

Fail-Safe Mode: minimal UI for exporting and verifying ledgers when offline.

🌙 10. Transparency & Open Verification

Source code and cryptographic primitives are open for review.

External audits are logged publicly in the AUDITS/ directory.

Each major release publishes a reproducible build hash.

Security decisions are documented as ADR (Architecture Decision Records) for community reading.

🩶 Closing Thought

“Security isn’t a lock — it’s a promise of care.”

SoulWire’s architecture was designed so that even when code fails, the human it protects never does.
Every layer — from cryptography to compassion — serves the same goal: dignity through design.
