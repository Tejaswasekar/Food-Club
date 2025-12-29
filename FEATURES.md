# Features & Optimizations

This file documents the main features and optimizations added during the recent work session.

## Routing

- Added `react-router-dom` and configured app routing in `src/App.js`.
- Routes added: `/` (home), `/about`, `/contact`.
- Added `errorElement` and a catch-all `*` route to surface routing errors.

## Pages / Components

- `src/components/ContactUs.js` — simple contact/info page.
- `src/components/About.js` — (added/created) placeholder for About page.
- `src/components/RestaurantMenu.js` — menu viewer with robust fetching and UI states.
- `src/components/User.js` — updated so increase/decrease controls update both `count` and `count2` together.
- `src/components/Error.js` — centralized error UI that uses `useRouteError()` to display status, message, and stack traces when available.

## Data fetching & Proxy

- `RestaurantMenu.js` implements:

  - `loading`, `error`, and `menuData` state handling.
  - Defensive fetch usage (checking `res.ok` and parsing JSON), and console logging for debugging.
  - Notes about cross-origin restrictions for Swiggy dapi endpoints.

- `proxy-server.js` — a small Express dev proxy to forward POST requests to Swiggy's update endpoint (useful to avoid CORS during development). This file is intended for local development only.

## Dependency & Version Fixes

- Removed an incorrect `router` package and installed `react-router-dom@6`.
- Aligned `react` and `react-dom` package versions to avoid the React version mismatch runtime error.

## Code Quality / Bug Fixes

- Removed duplicate imports and unused code in `src/App.js`.
- Replaced prop-based Error component with `useRouteError()` for more accurate routing error reporting.
- In `User.js`, used functional state updates to avoid stale state when updating two counters at once.
- Improved console logging and error messages to aid debugging.

## Next recommended steps (optional)

- Add a navigation link to the Contact page in `src/components/Header.js`.
- Replace the Contact page placeholder with a simple contact form, and wire submissions to `proxy-server.js`.
- If you want `RestaurantMenu` to fetch via the local proxy automatically, I can patch `Body.js` or `RestaurantMenu.js` to use the proxy URL when `NODE_ENV === 'development'`.
- Consider locking `parcel` start port in `package.json` if you prefer a fixed dev URL (Parcel will otherwise pick a free port if `1234` is taken).

If you'd like, I can commit and push this file now (and create a Git tag/release).
