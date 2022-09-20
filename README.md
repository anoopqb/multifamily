## Project Setup

We are using `yarn` as the package manager. Install yarn via npm by running the following:

```bash
npm install --global yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:{3000}](http://localhost:3000) with your browser to see the result.

## Git Hooks

### Commit

In order for the commit to succeed, the yarn lint script must first run and succeed. "Succeed" in this context means no errors. It will allow you to have warnings.

Commit will not succed unless the below commit message standard convention is not followed.

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

`git commit -m "build: implement git"`

### Push

Push to the remote repositoryis not allowed unless the code is successfully build.
