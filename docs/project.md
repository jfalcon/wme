# Project Reference

Developer reference for project structure, environment setup, workflow, and detailed technical
conventions. Do not load this into AI context as it will needlessly use up context when AI can
simply grep for details. This document is intended for a developer to read and learn the
structure of the project.

## Project Structure

```text
/actions          # server actions
/app              # Next.js app router — routes, pages, API
  (home)/         # Home page
  api/            # API route handlers
  layout.tsx      # root layout — wraps in providers
  error.tsx       # global error boundary
  not-found.tsx   # 404 page
  types.ts        # 
  constants.ts    # HTTP codes, roles, locales
/components       # shared react components
/certificates     # localhost TLS certs for HTTPS dev server
/docs             # long-form developer reference documentation
/hooks            # custom react hooks — currently `useServiceWorker`
/messages         # i18n message files (en.json, es.json, fr.json)
/public           # static assets (logo, sw.js, etc.)
/styles           # SCSS — globals, theme, variables, mixins, plugins/
/tools            # ancillary scripts (not part of the build):
/types            # ambient module declarations
/util             # utility functions
/lib              # shared application logic

# root-level files of note:
cspell.json         # spell-check configuration
postcss.config.mjs  # PostCSS config — PurgeCSS enabled in production builds
```

## Ancillary Tools

The project allows for ancillary scripts in the `tools` folder. Files in this folder should never
be included in the project. However, they can include project files as needed.

## Environment Variables

TBD
