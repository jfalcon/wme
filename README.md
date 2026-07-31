# WME

Will add something cool here later.

## Core Features

Below are notable features of the project intended to enhance not only the developer experience
but the end user experience as well.

* Automatic noindex, nofollow for ERP/LOB applications.
* Enforces linear commit history (can be overridden via --no-verify).
* ES2022 (~5 years back) for smaller bundle sizes with less polyfills.
* Functional SOLID Design
* Hooks run on pre-push and not pre-commit to allow for frequent commits.
* Markdown Linting
* Oxlint
* PostCSS/PurgeCSS
* React 19 Compiler
* Static Analysis
* TypeScript 7

Impeccable skills?
testing (for speed)
todo: add unit tests
native node testing instead of jest...

## Claude Skills

* Cost-reduction — right-sizes cloud resources and cuts spend (e.g. caching, bundle size,
  instance sizing).
* Scalability — designs for scale: caching, queues, DB scaling, concurrent API patterns.
* Security — flags OWASP Top 10 issues (SQLi, XSS, CSRF) and enforces secure auth/secrets patterns.

## TypeScript 7

This version of TypeScript was rewritten in Go, which is up to 10x faster for type checking when
compared to the JS-based compiler `tsc`. Next.js still uses the Rust-based Turbopack as the bundler
and Rust-based SWC as transpiler. As such, TypeScript 7 here removes the last slow bottleneck and is
responsible for type checking during builds.

*Note: TypeScript 7 should only be used in a greenfield project for now as it's not yet ready for
production with this stack. The new APIs and tooling are not expected to stabilize until TypeScript
7.1, which will release around October 2026. Thus it's not yet suitable for production use.*

## Oxlint

Unfortunately, most of the eslint tooling is lagging behind, especially as it relates to
TypeScript 7 support. Oxlint is an eslint-compatible linter written in Rust.

Its feature set includes:

* A run speed that is 50–100x faster than eslint.
* Ships with 800+ built-in rules, and works zero-config out of the box.
* Multi-file analysis supports multi-file analysis as a first-class capability.
* Outputs human and AI-friendly diagnostics.

## React 19 Compiler

The React 19 compiler eliminates the need to manually sprinkle `useMemo`, `useCallback`, and
`React.memo` across your codebase to prevent unnecessary re-renders. In fact, using them for new
code is no longer recommended.

You should let the compiler optimize it automatically and defer manual memoization to rare edge
cases (like third-party libraries requiring strict manual reference stability).

```typescript
function SearchList({ items, query, onSelect }: SearchListProps) {
  // OLD WAY: manual memoization and dependency arrays
  // const filtered = useMemo(() => items.filter((i) => i.includes(query)), [items, query]);
  // const handleSelect = useCallback((item: string) => onSelect(item), [onSelect]);

  // NEW WAY: standard TypeScript
  const filtered = items.filter((i) => i.includes(query));
  const handleSelect = (item: string) => onSelect(item);

  return <List items={filtered} onSelect={handleSelect} />;
}
```

## Static Analysis

This project uses [fallow](https://fallow.tools/), which is a TypeScript static analyzer that
compliments linting and catches problems that LLMs are not well suited to detect. It is used as
part of the pipeline and AI can also use it to aid with refactoring. Think of it like a tiny
version of SonarQube that can be run locally.

## Artificial Intelligence

Project ships with Claude skills.

* `/cost-reducer` - right-sizes cloud resources and cuts spend.
* `/scalability` - designs for scale: caching, queues, DB scaling, concurrent API patterns.
* `/security` - flags OWASP Top 10 issues and enforces secure auth/secrets patterns.

## Getting Started

See the [setup guide](docs/setup.md) for details.
