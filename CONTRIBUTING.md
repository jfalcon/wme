# Contributing

This project follows the `Conventional Commits` specification for commit messages. Using this
standard helps with:

- readable git history
- automated changelogs
- semantic versioning
- easier code reviews
- predictable releases

Spec: <https://www.conventionalcommits.org/>

## Commit Message Format

Conventional Commits follows a very specific format, so that things can be automated and searched
against. Below are the types of messages in the specification.

<!-- markdownlint-disable MD013 -->
| Type    | Title / Human-readable    | Description                                                                                                 |
|---------|---------------------------|-------------------------------------------------------------------------------------------------------------|
| build   | Builds                    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| chore   | Chores                    | Other changes that don't modify src or test files                                                           |
| ci      | Continuous Integrations   | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| docs    | Documentation             | Documentation only changes                                                                                  |
| feat    | Features                  | A new feature                                                                                               |
| fix     | Bug Fixes                 | A bug fix                                                                                                   |
| perf    | Performance Improvements  | A code change that improves performance                                                                     |
| refactor| Code Refactoring          | A code change that neither fixes a bug nor adds a feature                                                   |
| revert  | Reverts                   | Reverts a previous commit                                                                                   |
| style   | Styles                    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| test    | Tests                     | Adding missing tests or correcting existing tests                                                           |
<!-- markdownlint-enable MD013 -->

And the syntax would be:

```text
<type>[optional scope][!]: <short description>

[optional body]

[optional footer(s)]
```

Examples:

```text
feat(auth): add refresh token support
fix(api): prevent crash when user email is null
feat!: remove legacy authentication endpoints
```

## Breaking Changes

A breaking change means the change is not backward compatible. You can indicate this in two ways.

### Option 1 — `!` after the type

```text
feat!: remove deprecated login endpoint
```

### Option 2 — Footer

```text
feat(auth): update token format

BREAKING CHANGE: JWT tokens now use RS256 instead of HS256
```

Breaking changes should trigger a major version bump.

## Semantic Version Mapping

| Commit Type                  | Version Impact |
|------------------------------|----------------|
| `feat`                       | Minor release  |
| `feat!` or `BREAKING CHANGE` | Major release  |
| `fix`                        | Patch release  |

Examples:

```text
1.4.2 -> 1.5.0  (new feature)
1.4.2 -> 1.4.3  (bug fix)
1.4.2 -> 2.0.0  (breaking change)
```

## Scopes

Scopes describe the part of the codebase affected.

Common examples:

```text
auth
api
db
ui
frontend
backend
cli
config
deps
build
```

Examples:

```text
feat(auth): add oauth login
fix(api): handle empty response
refactor(db): simplify query builder
```

## Commit Types

Types refer to the category the message belongs to.

### build — Build System / Dependencies

Changes affecting build tools or dependencies.

```text
build: upgrade vite to v5
build(deps): update react to v19
build: add docker multi-stage build
build: configure webpack code splitting
```

Typical scenarios:

- dependency upgrades
- bundler changes
- docker configuration
- build scripts

### chore — Maintenance Tasks

General maintenance tasks that don't affect production code.

```text
chore: update .gitignore
chore: reorganize project folders
chore(deps): update eslint config
chore: clean up unused assets
```

Typical scenarios:

- repo cleanup
- dependency updates
- tooling updates
- project structure

### ci — Continuous Integration

CI/CD pipeline changes.

```text
ci: add github actions workflow
ci: run tests on node 20
ci: add lint step to pipeline
ci: deploy preview builds
```

Typical scenarios:

- CI workflows
- automated tests
- automated deployments
- release pipelines

### docs — Documentation

Documentation-only changes.

```text
docs: update README installation steps
docs(api): add authentication examples
docs: add architecture diagram
docs: explain environment variables
```

Typical scenarios:

- README updates
- API docs
- developer guides
- code comments

### feat — New Feature

Adds new functionality to the application.

```text
feat(auth): add google oauth login
feat(api): add pagination to /users endpoint
feat(ui): implement dark mode toggle
feat(payments): support Stripe subscriptions
```

Typical scenarios:

- new endpoint
- new UI component
- new CLI command
- new integration
- new configuration option

### fix — Bug Fix

Fixes incorrect behavior.

```text
fix(auth): prevent login with empty password
fix(api): return 400 when request body is invalid
fix(ui): button text overlaps on mobile
fix(db): incorrect timezone stored in user table
```

Typical scenarios:

- crash
- incorrect calculation
- validation issue
- broken layout
- race condition

### perf — Performance Improvement

Improves performance without changing functionality.

```text
perf(api): cache user permissions
perf(db): add index to orders.created_at
perf(ui): reduce re-renders in dashboard table
perf(cache): store session tokens in Redis
```

Typical scenarios:

- caching
- query optimization
- reducing memory usage
- faster rendering

### refactor — Code Restructure (No Behavior Change)

Improves internal structure without affecting functionality.

```text
refactor(auth): extract token validation helper
refactor(api): split user controller into services
refactor(db): normalize order schema
refactor: replace nested conditionals with guard clauses
```

Typical scenarios:

- extract functions
- rename variables
- simplify logic
- reorganize modules

### revert — Revert Commit

Reverts a previous commit.

```text
revert: "feat(auth): add google login"
```

### style — Formatting Only

Changes that do not affect code behavior.

```text
style: format code with prettier
style: fix eslint spacing issues
style: reorder imports
```

Typical scenarios:

- whitespace
- formatting
- lint fixes

### test — Tests

Adds or modifies tests.

```text
test(auth): add login failure tests
test(api): add integration tests for /orders
test(ui): add snapshot tests for dashboard
test: cover edge cases in validation logic
```

Typical scenarios:

- unit tests
- integration tests
- e2e tests
- regression tests

## Good Commit Message Tips

Keep the subject short

Good:

```text
fix(api): prevent crash when email missing
```

Bad:

```text
fix(api): fixed a bug where if the email was missing the system would sometimes crash depending on
environment variables
```

Use imperative tense

Good:

```text
fix(api): validate request body
```

Bad:

```text
fix(api): validated request body
```

Separate unrelated changes

Bad:

```text
feat: add login and fix css and update readme
```

Good:

```text
feat(auth): add login endpoint
fix(ui): correct button spacing
docs: update README
```

## Example Commit History

```text
feat(auth): add JWT authentication
feat(users): add user registration endpoint
fix(users): prevent duplicate email signup
perf(db): add index for user email lookup
refactor(auth): extract token validation
test(auth): add login integration tests
docs: update API authentication section
```
