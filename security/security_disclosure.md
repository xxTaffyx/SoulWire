🛡️ SoulWire Vulnerability Disclosure Policy

“Transparency isn’t a risk — it’s our armor.”
🕯 Hollow Hearth warmth • 🌌 SoulWire Teal trust • 🔮 Dream-Circuit integrity

🩶 Purpose

This document explains how security researchers, ethical hackers, and community members can report potential vulnerabilities safely and responsibly.
SoulWire is a living project — built by one person but protected by everyone who chooses to care about it.

This policy exists to make collaboration safe, respectful, and effective for all involved.

🔐 1. Guiding Principle

Every vulnerability report is a gift, not an attack.
Security is strongest when it’s shared, and every discovery helps make the network safer for the people who rely on it.

📬 2. How to Report a Vulnerability

If you find a security issue, please report it privately to:

📧 security@soulwire.io
 (placeholder — replace when live)

Include as much detail as you can:

A clear description of the problem

The affected Realm(s) or component(s)

Steps to reproduce (or proof of concept)

Expected vs. actual behavior

Screenshots, logs, or traces if available

Whether the issue affects a public or test build

⚠️ Do not share vulnerabilities publicly until the fix is confirmed and disclosed through this process.

🕰️ 3. Coordinated Disclosure Timeline

SoulWire follows a 90-day coordinated disclosure window by default:

Timeline	Action
Days 0–2	Acknowledge receipt of your report.
Days 3–14	Reproduce and verify the issue.
Days 15–60	Develop, test, and prepare a fix.
Days 61–90	Release patch, notify reporters, and publish advisory.

If an exploit is actively being used, a faster fix window (24–72 hours) will take priority.
If you need more time for coordinated release, that’s always open for discussion.

🧩 4. Scope of Testing

You are welcome to test:

Public builds of SoulWire Desktop, Mobile, or web components

Documented API endpoints (/api/*)

Plugin SDKs or open Realms

Please avoid testing:

Private user accounts or non-consenting data

Third-party integrations (Twitch, Discord, YouTube, etc.)

Denial-of-Service or spam attacks

Physical or hardware exploits

If you’re unsure, ask first — no one gets punished for asking questions here.

💎 5. Safe-Harbor Policy

If you act in good faith and respect the boundaries above:

You will not face bans, legal threats, or takedowns.

You can be publicly credited (or remain anonymous) at your choice.

Disclosure coordination is handled respectfully and privately.

When fixed, you’re welcome to publish your write-up with proper context.

The goal is collaboration, not confrontation.

🔮 6. Severity Ratings
Level	Impact	Example
Critical	Direct compromise of user data or device.	Encryption/key leak, full access breach.
High	Escalation of privileges or unauthorized actions.	Realm sandbox breakout, AI override.
Medium	Limited data exposure or bypass.	Permissions misconfigurations.
Low	Cosmetic or informative.	UI reveals non-sensitive version info.

Confirmed issues receive an internal ID: SW-YYYY-### and a patch reference.

🧠 7. After a Fix

After a vulnerability is patched:

The reporter is notified directly.

A signed update note is published with the fix.

A short, public advisory is added to SoulWire’s changelog.

Credits (if allowed) are added to the Hall of Guardians, SoulWire’s gratitude page.

Proof-of-concept data is securely destroyed after confirmation.

🔐 8. Contact & Encryption

You can encrypt sensitive reports with the project’s public PGP key:

-----BEGIN PGP PUBLIC KEY BLOCK-----
(placeholder key)
-----END PGP PUBLIC KEY BLOCK-----


Alternate community channels:

Matrix: #soulwire-security:matrix.org (announcements only)

Mastodon: @soulwire@mastodon.social (DMs open)

🕯️ 9. Philosophy of Disclosure

SoulWire was built on empathy and transparency.
A vulnerability report is a conversation — not a confrontation.
This project values researchers who act with integrity, communicate clearly, and care about people’s safety above all else.

“When you find a weakness, you’re helping build a shield.”

🌌 10. Credits

The Hall of Guardians is a public gratitude list for every person who contributes to SoulWire’s safety — developers, researchers, and curious users alike.
If you’d like to be credited (real name, handle, or alias), just mention it when you report your finding.

Thank you for helping protect the people of SoulWire.
🕯 With care,
The SoulWire Project Maintainer