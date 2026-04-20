# DLS Take Home Assessment

## Usage: How to Instantiate Storybook Workshop

1. Install pnpm packages

```
pnpm install
```

2. CD into the UI package repository

```text
cd packages
cd ui
```

3. Run Storybook

```
pnpm run storybook
```

---

## Ideal Application Architecture: Atomic Monorepo

### Why a Monorepo?

- Streamlined, optimized workflow -- packages multiple projects into a single repo and imports components directly from the shared workspace instead of a multi-step, cloud-driven approach

### Atomic Design Structure

Components are grouped based on atomic design principles:

- **Atoms**
  - Smallest functional units (buttons, input fields, labels, etc.)

- **Molecules**
  - Atoms grouped into functional UI elements
  - Examples: search form, input groups
  - _An AccordionItem falls under this category_

- **Organisms**
  - Complex components that consist of atoms and/or molecules
  - Examples: headers, navigation bars, product grids
  - _An Accordion component falls under this category_

- **Templates**
  - Page-level layouts composed of organisms
  - Focus on content structure

- **Pages**
  - Fully composed templates with static (text, images, etc.)and dynamic content (via internal/external APIs)
  - Content is sourced from APIs, CMSs, and/or CDNs

### Dependency Direction (Strict Flow)

- Components can only depend on lower level atomic structures, not the other way around
  - Atoms → no dependencies
  - Molecules → atoms
  - Organisms → molecules + atoms
  - Templates → organisms + molecules + atoms
  - Pages → templates + all lower levels

### Application Tree Structure

```text
dls-take-home-assessment/
├─ apps/
│  ├─ docs/
│  └─ playground/
├─ packages/
│  ├─ tokens/
│  ├─ theme/
│  ├─ icons/
│  ├─ utils/
│  ├─ testing/
│  └─ ui/
│     └─ src/
│        ├─ atoms/
│        ├─ molecules/
│        ├─ organisms/
│        ├─ templates/
│        ├─ pages/
│        ├─ hooks/
│        ├─ lib/
│        ├─ styles/
│        └─ index.ts
├─ .storybook/
├─ tsconfig.base.json
├─ vitest.workspace.ts
└─ pnpm-workspace.yaml
```

#### Why this structure?

- Atomic design clarity
- Monorepo maintainability
- Practical React tooling alignment

#### _Disclaimer: or sake of time and brevity, I've only fleshed out the core design system as follows:_

```text
packages/ui/src/
├─ atoms/
├─ molecules/
├─ organisms/
├─ templates/
└─ pages/
```

#### Component Folder Convention

```text
Button/
├─ Button.tsx
├─ Button.types.ts
├─ Button.test.tsx
├─ Button.stories.tsx
├─ Button.css
└─ index.ts
```

- Co-locates:
  - Implementation
  - Types
  - Tests
  - Stories
  - Styles
  - Exports

- Benefits
  - Consistency
    - Reusable components ensure a consistent UI/UX across the application
  - Scalability
    - Design systems can scale with minimal technical debt
  - Maintainability
    - Atomic changes propagate system-wide
      _(e.g., updating a button style affects all usages)_

---

## Package Management System: pnpm

### Why pnpm over npm?

- Saves disk space
- Faster install/reinstall times
- Uses a non-flat node_modules structure
- Symlinks only direct dependencies
- Simplifies monorepo management via pnpm-workspace.yaml
- Cleaner organization and fewer merge conflicts
- More readable configuration (minimal YAML vs JSON sprawl)

---

## Build Tool: Vite

### Why Vite?

- Fast and lightweight development experience
- Ideal for building reusable component libraries
- No need for:
  - SSR (Server-Side Rendering)
  - SSG (Static Site Generation)
  - React Server Components
  - Complex routing
  - Async integration with external APIs

Thus, no need for fully-featured full-stack framework like `Next.js` or `React Router`

### Presets

- Framework: React
- Variant: TypeScript + React Compiler

---

## Frontend Package Library, Playground, and Documentation Hub: Storybook

- Industry-standard tool for building and testing UI components in isolation to support component design system development

---

## Linting & Code Quality

### ESLint

- Related devDependencies (planned):
  - `@eslint/js`
  - `@types/node`
  - `@typescript-eslint/eslint-plugin`
  - `@typescript-eslint/parser`
  - `eslint`
  - `eslint-config-prettier`
  - `eslint-plugin-jsdoc`
  - `eslint-plugin-prettier`
  - `typescript-eslint`

### Prettier

- Ensures consistent formatting across the entire codebase

### Husky + Lint-Staged (TODO)

Why?

- Run pre-commit hooks on staged files
- Automatically fix issues using `eslint --fix`
- Avoid staging unintended changes using `--no-stash`

### Visual Regression Testing: Chromatic or Jest-Image-Snapshot w/ Puppeteer (TODO)

---

## Accessibility

Accordion Pattern (Show/Hide)

- Reference:
  https://www.w3.org/WAI/ARIA/apg/patterns/accordion/

---

## CSS Methodology: BEM

**Why BEM?**
**Simplicity**

- Easy to implement via naming conventions
  **Modularity**
- Independent blocks reduce coupling
- Avoids cascade/inheritance issues
  **Reusability**
- Encourages reusable style compositions
- Reduces long-term CSS duplication
  **Structure**
- Clear, predictable naming system
  **Flexibility**
- Works alongside other tools and methodologies

---

## Current Component Architectural Approach: Data-Driven

```text
  <Accordion
    shouldAllowMultipleExpanded="true"
    items={[
      { id: "shipping", title: "Shipping", content: <p>Ships in 2 days.</p> },
      { id: "returns", title: "Returns", content: <p>30-day returns.</p> },
    ]}
  />
```

For sake of time, opted for data-driven approach

- React consumes structured data as props natively
- Easy to serialize, transform, and generate data from internal / external APIs or CMS content
- Straight-forward implementation for snapshot-style Storybook examples
- Structured data is easy to configure, mock-up, etc.

---

## Future Direction: Compound Components

```text
<Accordion shouldAllowMultipleExpanded>
  <Accordion.Item value="shipping">
    <Accordion.Header>Shipping</Accordion.Header>
    <Accordion.Panel>Ships in 2 days.</Accordion.Panel>
  </Accordion.Item>

  <Accordion.Item value="returns">
    <Accordion.Header>Returns</Accordion.Header>
    <Accordion.Panel>30-day returns.</Accordion.Panel>
  </Accordion.Item>
</Accordion>
```

**Why this is better long-term**

- More flexible and expressive
- Avoids bloated prop APIs
- Scales better with complex UI
- Aligns with React’s composition model (children)
- Maps naturally to accessible UI primitives
- Matches industry-standard libraries (e.g., Radix)

### Summary

- **Data-driven APIs** → simpler, faster to implement
- **Compound APIs** → more scalable, flexible, and industry-aligned

The long-term direction should favor **compound / composable components** for a robust design system.

---

## TODO - Implement the following:

- Typography
- Theming
- Mixins
- Icons
- Utils/Helpers
