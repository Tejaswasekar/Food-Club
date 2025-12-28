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

## Local CORS proxy (for calling Swiggy update endpoint)

The Swiggy `/dapi/restaurants/list/update` endpoint blocks cross-origin requests from the browser. To test POST-based pagination locally you can run a simple proxy which forwards requests to Swiggy and returns the response.

1. Start the proxy server (requires Node 18+):

```bash
node proxy-server.js
```

2. In your frontend (during development), POST to the proxy instead of directly to Swiggy:

```js
// example payload
fetch("http://localhost:4000/api/restaurants/update", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    lat: 18.4704756,
    lng: 73.8698726,
    pageOffset: { nextOffset: "<token>" },
  }),
})
  .then((r) => r.json())
  .then((data) => console.log(data));
```

Notes:

- The included `proxy-server.js` is for local development only. Do not use it in production.
- If you want me to update `src/components/Body.js` to call the proxy automatically when running locally, I can patch it for you.
