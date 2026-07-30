# WME

Will add something cool here later.

## Features

TypeScript 7

Oxlint is the performance beast – written in Rust, 50–100x faster, ships with 800+ built-in rules, and works zero-config out of the box.
Multi-file analysis supports multi-file analysis as a first-class capability.
When enabled, Oxlint builds a project-wide module graph and shares parsing and resolution across rules. This improves checks that depend on cross-file imports and helps avoid the performance cliff often seen with rules like import/no-cycle in ESLint.
Human and AI-friendly diagnostics
In addition to clear messages, diagnostics include structured information such as precise spans, contextual data, and links to relevant documentation. This helps AI to understand issues and apply fixes reliably.
markdown lint

testing (for speed)
native node testing instead of jest...

ai
use gstack for claude and codex to check it

React 19 Compiler
babel-plugin-react-compiler

## SSL Certificate

This application uses HTTPS to avoid compatiblity issues with browser features that do not run
over plain text. As such, Next.js will automatically install a local SSL certificate. However, we
still need to trust the certificate to improve the developer expiererernce.

### Trusting Local Certificates

Next.js ships with a bundled version of `mkcert`, but we still want to install the distro's version
of it and `certutil` as they will mkcert to auto-register the CA with Chrome and Firefox:

```bash
sudo apt install mkcert libnss3-tools
mkcert -install
```

Restart your browser if it was already open.

#### Troubleshooting

Recent versions of Firefox (installed from Mozilla's apt repo) store their profile under
`~/.config/mozilla/firefox/` instead of `~/.mozilla/firefox/`, which `mkcert -install` may not
check depending on your version. If an SSL warning shows in the browser, register the CA directly
into the correct profile database:

```bash
certutil -A -n "mkcert" -t "TCu,Cu,Tu" \
  -i ~/.local/share/mkcert/rootCA.pem \
  -d sql:$(find ~/.config/mozilla/firefox -name "cert9.db" -printf "%h\n" | head -1)
```

## Getting Started

First, run the development server so that Next.js installs a local SSL certificate:

```bash
npm run dev
```

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to
automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
