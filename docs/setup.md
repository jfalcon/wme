# Project Setup

This project does not currently leverage Docker for the development environment. The default is
not to until it's needed. Unlike PHP, etc., Node.js is mostly a self-contained runtime and thus
Docker is not really needed _by default_ for a dev machine as long the devs use a recent version
of their distro.

If the project requires using pre-built binaries or compiling binaries via Node GYP (Generate Your
Projects) then it will need a compiler to install and possibly runtime dependencies outside of
Node.js. At that point Docker should be considered for a dev environment if the developers do not
keep up-to-date with their installed distro.

However, Docker can and should be used in production by default to allow for rollbacks, etc.
regardless.

## Node.js

In a dev team it's recommended to use [nvm](https://github.com/nvm-sh/nvm) to install and manage
this version of Node.js. This will quickly allow you to switch versions depending on the project.

```bash
NVM_VERSION=$(curl -fsSL https://api.github.com/repos/nvm-sh/nvm/releases/latest \
  | grep '"tag_name"' | cut -d '"' -f4)

curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSION/install.sh" | bash
```

Restart your shell (or source your profile) so the `nvm` command is available. Now you can simply
run the following commands to install and use the correct version of Node.js for the project:

```bash
nvm install
nvm use
```

## SSL Certificate

This application uses HTTPS to avoid compatibility issues with browser features that do not run
over plain text. As such, Next.js will automatically install a local SSL certificate. However, we
still need to trust the certificate to improve the developer experience.

### Trusting Local Certificates

Next.js ships with a bundled version of `mkcert`, but we still want to install the distro's version
of it and `certutil` as they will allow mkcert to auto-register the CA with Chrome and Firefox:

```bash
sudo apt install mkcert libnss3-tools
mkcert -install
```

Restart your browser if it was already open.

### Troubleshooting

Recent versions of Firefox (installed from Mozilla's apt repo) store their profile under
`~/.config/mozilla/firefox/` instead of `~/.mozilla/firefox/`, which `mkcert -install` may not
check depending on your version. If an SSL warning shows in the browser, register the CA directly
into the correct profile database:

```bash
certutil -A -n "mkcert" -t "TCu,Cu,Tu" \
  -i ~/.local/share/mkcert/rootCA.pem \
  -d sql:$(find ~/.config/mozilla/firefox -name "cert9.db" -printf "%h\n" | head -1)
```

## First Run

Now you can run the development server so that Next.js installs a local SSL certificate:

```bash
npm run dev
```
