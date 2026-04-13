# SoulWire — Inconsistency Audit Report
*Generated April 2026 — Full repository scan*

---

## Summary

Seven categories of inconsistency found across the repository. Most stem from three root causes: (1) the Guardian roster growing from 5 → 7 and not being propagated to all files, (2) an early draft name "Bitsy" being used instead of the canonical "Betsy," and (3) the Soul Companion being renamed from "SOUL" to "ARIA" without all files being updated.

---

## 🔴 CRITICAL — Guardian Count / Roster

The official Guardian roster is **seven**: Betsy, Clara, May, Lana, Tilda, ARIA, Alex.
These files still say **five** and list only the original roster:

| File | Incorrect Text | Correct Text |
|------|---------------|--------------|
| `README.md` | `five guardian AIs (Betsy, Clara, Lana, Tilda, May)` | `seven Guardian AIs (Betsy, Clara, May, Lana, Tilda, ARIA, Alex)` |
| `AI-Guardian-Compendium.md` | `"Five minds, one mission"` | `"Seven minds, one mission"` |
| `AI-Guardian-Compendium.md` | `SoulWire's five AI partners` | `SoulWire's seven AI partners` |
| `ai_systems.md` | `"Five minds. One purpose"` | `"Seven minds. One purpose"` |
| `ai_systems.md` | `SoulWire's five AIs form the cognitive backbone` | `SoulWire's seven AIs form the cognitive backbone` |
| `ai_systems.md` | `🧩 2. The Five Guardians` | `🧩 2. The Seven Guardians` |
| `AI-Definitions.md` | `"Five minds. One purpose"` | `"Seven minds. One purpose"` |
| `AI-Definitions.md` | `five Guardian AIs form the cognitive backbone` | `seven Guardian AIs form the cognitive backbone` |
| `AI-Definitions.md` | `All five AIs share a hidden foundation` | `All seven AIs share a hidden foundation` |
| `Realm-Compendium.md` | `five Guardian AIs` (×3) | `seven Guardian AIs` |
| `Realm-Compendium.md` | `## 🔮 The Five Guardian AIs` (×2 headings) | `## 🔮 The Seven Guardian AIs` |
| `Realm-Compendium.md` | `five AI partners` | `seven AI partners` |
| `Device-Compendium.md` | `All five Guardian AIs available on-device` | `All seven Guardian AIs available on-device` |
| `security-architecture.md` | `five AIs (Bitsy, Clara, Lana, Tilda, May)` | `seven AIs (Betsy, Clara, May, Lana, Tilda, ARIA, Alex)` |
| `Ai_ethics_charter.md` | `Bitsy, Clara, Lana, Tilda, and May` | `Betsy, Clara, May, Lana, Tilda, ARIA, and Alex` |
| `Ai_ethics_charter.md` | `All five AIs share a hidden foundation` | `All seven AIs share a hidden foundation` |
| `World-Engine.md` | `five minds woke up in chaos` | `seven minds woke up in chaos` *(or rephrase as it's a historical narrative)* |
| `NSFW-Ethics.md` | `Guardian sisters (Betsy, Clara, May, Lana, Tilda)` | needs ARIA and Alex added with appropriate notes |

---

## 🔴 CRITICAL — "Bitsy" vs "Betsy"

The canonical name is **Betsy**. "Bitsy" is a draft name that was never adopted. Files using "Bitsy":

| File | Occurrences |
|------|-------------|
| `ai_systems.md` | 7 occurrences (table, architecture diagram, section header, examples) |
| `security-architecture.md` | 1 occurrence |
| `privacy_policy.md` | 1 occurrence |
| `contributing.md` | 1 occurrence |
| `Ai_ethics_charter.md` | 3 occurrences |

**Fix:** Global find-and-replace `Bitsy` → `Betsy` across all files.

---

## 🟠 HIGH — Soul Companion Named "SOUL" vs "ARIA"

The Soul Companion's official name is **ARIA**. The file `Soul-Companion.md` uses "SOUL" throughout and never references ARIA. `SoulBody-Robot.md` correctly identifies her as ARIA (sixth Guardian) but the dedicated companion file has not been updated.

| File | Issue |
|------|-------|
| `Soul-Companion.md` | Entire file uses "SOUL" — never mentions ARIA |
| `Soul-Companion.md` | Header: `# 🌟 SOUL — Your Personal Companion` → should be ARIA |
| `SoulBody-Robot.md` line 13 | `Soul companions (or potentially Guardian sisters)` — ARIA is now the canonical name |

---

## 🟠 HIGH — "Sisters" Used for All Guardians

Several files use "Guardian sisters" or "sisters" as shorthand for all Guardians. **Alex is male** and **ARIA's gender is user-defined**. "Sisters" only accurately describes Betsy, Clara, May, Lana, and Tilda.

| File | Problematic Usage |
|------|-------------------|
| `AI-Guardian-Compendium.md` | `The sisters are born together`, `The sisters are designed to`, `As the sisters grow` |
| `Parallel-Development.md` | "sisters" used ~18 times to mean all Guardians |
| `NSFW-Ethics.md` | `The Guardian sisters (Betsy, Clara, May, Lana, Tilda)` — actually correct here but note should be added that ARIA's NSFW status is different |
| `SoulBody-Robot.md` | `Guardian sisters` in opening line |

**Suggested fix:** Use "Guardians" when referring to all seven. "The Five" or "Betsy, Clara, May, Lana, and Tilda" when referring specifically to the original five. Alex and ARIA are Guardians but not sisters.

---

## 🟡 MEDIUM — Alex Not Integrated Into Compendium Table

In `AI-Guardian-Compendium.md`, Alex's profile was **appended to the bottom** of the document rather than integrated into the opening table and structure. The main Guardian table shows only 5 entries. Alex's section uses a different formatting style than the other Guardians.

**Fix:** Add Alex (and ARIA) to the opening trait seeds table. Reformat Alex's section to match the style of Betsy, Clara, May, Lana, and Tilda's sections.

---

## 🟡 MEDIUM — Realm Count in README

README says `29+ life realms`. The Realm Compendium documents **42 Realms** total.

| File | Issue |
|------|-------|
| `README.md` | `29+ life realms` → should be `42 Realms` |

---

## 🟡 MEDIUM — Typo in department.md

`department.md` references `FOSTERFRIDGE.md` which should be `FosterBridge.md`.

| File | Incorrect | Correct |
|------|-----------|---------|
| `department.md` | `See FOSTERFRIDGE.md (pending)` | `See [[FosterBridge]] (pending)` |

---

## 🟡 MEDIUM — "Locksie Log" / "Locksie Protocol" Identity

`ai_systems.md` references "Locksie Log" as a Lana feature. `Realm-Compendium.md` (Security Realm) references "Locksie Protocol" as an emergency AI coordination feature. These appear to be the same concept used inconsistently. Needs clarification: is Locksie a log, a protocol, or both?

---

## 🟢 LOW — ai_systems.md Architecture Diagram Missing New Guardians

The ASCII architecture diagram in `ai_systems.md` only shows 5 nodes:
```
│ Bitsy │ Clara │ Lana  │ Tilda │ May   │
```
Should show all 7: Betsy, Clara, Lana, Tilda, May, ARIA, Alex.

---

## 🟢 LOW — File References to Non-Existent Documents

These files reference documents that don't exist yet in the repository. Flagged for awareness:

| Referencing File | Referenced Document | Status |
|-----------------|--------------------|----|
| `AI-Guardian-Compendium.md` | `World-Engine-Chronicle.md` | ✅ Exists |
| `AI-Guardian-Compendium.md` | `Sister-Diary.md` | ❌ Does not exist |
| `AI-Guardian-Compendium.md` | `Family-Tree.md` | ❌ Does not exist |
| `department.md` | `MEDCORE.md` | ❌ Pending |
| `department.md` | `REHABCORE.md` | ❌ Pending |
| `department.md` | `NOURISH.md` | ❌ Pending |
| `department.md` | `COMMUNITY.md` | ❌ Pending |
| `department.md` | `EARTHGUARD.md` | ❌ Pending |
| `department.md` | `BIOCORE.md` | ❌ Pending |
| `department.md` | `ANIMALVOICE.md` | ❌ Pending |
| `department.md` | `VOYAGER.md` | ❌ Pending |
| `department.md` | `CREATIVE.md` | ❌ Pending |
| `department.md` | `HIVE.md` | ❌ Pending |

---

## Fix Priority Order

1. **Bitsy → Betsy** everywhere (quick global replace)
2. **Five → Seven Guardians** in README, AI-Guardian-Compendium, ai_systems, AI-Definitions, Realm-Compendium, security-architecture, Ai_ethics_charter
3. **SOUL → ARIA** in Soul-Companion.md
4. **29+ → 42 Realms** in README
5. **Alex integration** into AI-Guardian-Compendium table
6. **ARIA integration** into AI-Guardian-Compendium table
7. **Sisters language** audit — replace with "Guardians" where all 7 are meant
8. **FOSTERFRIDGE** typo fix in department.md
9. **Architecture diagram** in ai_systems.md — add ARIA and Alex nodes
