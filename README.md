# Food Club

This is a React project for a Food Club UI. Below I explain how to run the project and list the features and optimizations I added.

## Quick start

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

## GitHub publishing

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

## Features (what I added)

I added the following features and optimizations while working on this project. Today's additions (2025-12-30) are noted.

- Routing and pages
  - I installed and configured `react-router-dom` and added routes in `src/App.js` for `/`, `/about`, and `/contact`.
  - I wired an `errorElement` on the root route and added a catch-all `*` route so routing errors and 404s are handled centrally.

- Pages & components
  - `src/components/ContactUs.js` — I added a simple Contact page.
  - `src/components/About.js` — About page placeholder was added.
  - `src/components/Error.js` — I implemented a centralized error UI that uses `useRouteError()` to surface status, message and stack when available.

- Restaurant menu fetching
  - `src/components/RestaurantMenu.js` — I implemented robust fetch logic with `loading`, `error`, and `menuData` state, defensive `res.ok` checks, headers, and helpful logging.
  - I included `proxy-server.js` to forward requests to Swiggy for local development to avoid CORS issues.

- User and utilities
  - `src/components/User.js` — I updated the increase/decrease controls so they update both `count` and `count2` together using functional state updates.
  - Added utilities: `src/utils/useOnlineStatus.js` and `src/utils/useRestaurantMenu.js` to help with online detection and menu-related hooks.

- Dependency & version fixes
  - I removed an incorrect `router` package and installed `react-router-dom@6`.
  - I aligned `react` and `react-dom` versions to fix the runtime version mismatch error.

## Added today (2025-12-30)

- Minor improvements to `Header.js` and `Body.js` for navigation and layout consistency.
- Added `useOnlineStatus` and `useRestaurantMenu` hooks in `src/utils/` to improve resilience and encapsulate fetching logic.

## Notes & next steps

- If you see CORS errors when fetching Swiggy endpoints, run the local proxy with `node proxy-server.js` and use `http://localhost:4000/api/restaurants/update` from the frontend during development.
- I can add a navigation link to the Contact page in `src/components/Header.js` and a simple contact form in `ContactUs.js` if you want.
- If you prefer a fixed Parcel port, I can update the `start` script in `package.json` to specify `--port 1234`.

If you'd like, I will delete `FEATURES.md` now and commit these changes.
