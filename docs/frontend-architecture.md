# Frontend Architecture

## Technology Stack

This admin web app uses Next.js App Router, React, TypeScript, Tailwind CSS,
shadcn-style primitives, TanStack Query, Axios, Zustand, React Hook Form, Zod,
Motion, Sonner, date-fns, Vitest and React Testing Library.

## Package Responsibilities

Axios owns HTTP transport and API error normalization. TanStack Query owns
server state, request lifecycles and cache invalidation. Zustand owns harmless
client UI preferences only. React Hook Form owns form state, while Zod owns
validation schemas. Motion is reserved for purposeful, reduced-motion-aware UI
movement. Sonner handles operation-level notifications. Lucide React is the
only icon library.

## Folder Responsibilities

`src/app` contains routes and route boundaries. `src/components/ui` contains
domain-independent primitives. `src/components/layout` contains the admin shell.
`src/components/shared` contains reusable presentation components. `src/features`
contains domain modules. `src/lib` contains API, query, formatter, motion and env
infrastructure. `src/providers` composes React providers. `src/stores` contains
global client UI state. `src/config` contains static configuration.

## Dependency Direction

Allowed flow:

```text
app -> features -> components/shared and lib -> components/ui
```

Shared components, lib modules and UI primitives must not import feature
internals. Feature-to-feature usage must go through a feature root `index.ts`.

## Feature Modules

Future features follow this pattern:

```text
features/stations/api/stations.api.ts
features/stations/components/station-list.tsx
features/stations/queries/use-stations.ts
features/stations/schemas/station.schema.ts
features/stations/types/station.types.ts
features/stations/index.ts
```

## Naming

Use kebab-case file names, PascalCase components, camelCase functions and
uppercase snake case only for real constants. Use suffixes such as `.api.ts`,
`.schema.ts`, `.types.ts`, `.store.ts` and `.test.tsx`.

## State Boundaries

Server data belongs in TanStack Query. Do not copy stations, charging units,
payments, sessions or alerts into Zustand. Zustand may persist only harmless UI
preferences such as sidebar collapse state.

## Request Flow

```text
Page -> Feature component -> TanStack Query hook -> Feature API function
-> Shared Axios client -> Backend API
```

Feature API functions return typed data, not Axios responses.

## Mutation Flow

```text
Form -> React Hook Form -> Zod validation -> TanStack mutation
-> Feature API function -> Axios client -> Cache invalidation
-> Toast notification
```

Use inline validation messages for field errors and toasts for operation-level
results.

## Authentication Security

Do not store access tokens, refresh tokens, passwords, security codes,
permissions, personal data or payment data in localStorage, sessionStorage or
Zustand. Prefer credentialed cookies once the backend contract is known.

## Adding Features

Create a feature folder only when implementation begins. Keep APIs, queries,
schemas, components and types inside that feature. Export only the public API
from the feature root.

## File Limit

Every manually maintained source file must stay at 120 lines or fewer. Split by
responsibility instead of compressing code.

## Validation

Run:

```bash
npm run verify
npm run build
```
