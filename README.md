# SoulWire

SoulWire is a long-term ecosystem project that brings together:

- privacy-first software
- custom languages and low-level systems
- interconnected AI guardians
- user-facing apps
- shared design and media assets
- immersive worlds such as Vortexian

This repository is organized so it can be used comfortably in GitHub, VS Code, and Obsidian at the same time.

## Repo Map

- `AI/`
  The seven Guardian AIs, their shared foundations, and future prompt, memory, and relationship work.

- `Apps/`
  User-facing apps and product folders. Each app should have its own `README.md`, `docs/`, `src/`, `public/`, and `assets/`.

- `Docs/`
  Global documentation for the whole SoulWire ecosystem. This is for architecture, legal, planning, operations, security, community, and other cross-project references.

- `Shared/`
  Shared assets, brand rules, and design tokens. This is the source of truth for reusable images, icons, video, colors, and visual identity.

- `Worlds/`
  World spaces and world engines. `Worlds/Vortexian/` is where the Vortexian world, engine, VR plans, and AI-linked world systems belong.

- `Soulasm/`
  Low-level assembler and virtual machine work.

- `SoulLang/`
  Language development for the SoulWire stack.

- `SoulCore/`
  Core libraries and runtime foundations.

- `SoulOS/`
  Operating-system level ideas and future implementation work.

- `tests/`
  Shared tests and verification work.

## Current Website

The current website lives in:

- `Apps/Soulwire-Website/`

To run it:

```powershell
Set-Location 'C:\SoulWire\Apps\Soulwire-Website'
npm install
npm run build
```

## Organization Rules

- Put global reference material in `Docs/`.
- Put AI-specific material in the correct folder under `AI/`.
- Put app-specific docs and code inside that app's folder under `Apps/`.
- Put Vortexian and future world-engine work in `Worlds/`, not in `Apps/`.
- Put reusable media in `Shared/Assets/`.
- Put reusable colors, styling tokens, and design rules in `Shared/Brand/` and `Shared/Design/`.

## Folder Patterns

Apps should usually look like this:

```text
Apps/AppName/
  README.md
  docs/
  src/
  public/
  assets/
```

AI folders should usually look like this:

```text
AI/Name/
  README.md
  docs/
  prompts/
  memory/
  assets/
```

World folders should usually look like this:

```text
Worlds/WorldName/
  README.md
  docs/
  engine/
  realms/
  ai-link/
  assets/
  builds/
  server/
```

## Source of Truth

Use these as the main anchors:

- `README.md`
  Repo-wide entry point

- `Docs/Architecture/Repo-Map.md`
  Structure overview

- `Docs/Architecture/Folder-Layout.md`
  Layout rules

- `Docs/Architecture/Shared-Assets-Plan.md`
  Shared media strategy

## Long-Term Direction

SoulWire is being built in layers:

1. low-level machine and language foundations
2. core libraries and system architecture
3. apps and ecosystem tools
4. AI guardians and their interconnections
5. Vortexian and other living world spaces
6. future hardware, OS, and immersive systems

## Notes

- If a file is used by more than one project, it should usually move into `Shared/`.
- If a document explains one specific app, AI, or world, it should live with that thing.
- If a document explains the whole ecosystem, it should stay in `Docs/`.
