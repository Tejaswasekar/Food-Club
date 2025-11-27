# Food Club

This is a React project for a Food Club UI (local project from the workspace).

Quick start

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm start
```

3. Build

```bash
npm run build
```

GitHub publishing

- If you have the GitHub CLI `gh` installed you can create and push the remote with:

```bash
repo_name=$(basename "$PWD" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g')
gh repo create "$repo_name" --public --source=. --remote=origin --push --confirm
```

- If you don't have `gh`, create a repository on GitHub via the website and then run:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Replace `<your-username>` and `<repo-name>` accordingly.
