# Food Club

This is a React project for a Food Club UI. Below I explain how to run the project and list the features and optimizations I added.

## Quick start

# Food Club

Food Club is a small React application that demonstrates a restaurant listing and menu UI. It includes routing, local mock data for menus, basic state management with Redux for a cart, and a test suite using Jest and React Testing Library.

## Project structure (important files)

- `index.html` — HTML entry.
- `src/App.js` — Router and route definitions (uses `react-router-dom@6`).
- `src/components/` — React components (Header, Body, RestaurantCard, RestaurantMenu, ContactUs, Error, Shimmer, etc.).
- `src/utils/` — helper utilities and hooks (`useOnlineStatus`, `useRestaurantMenu`, constants, and mocked `MenuData`).
- `proxy-server.js` — local Express proxy for forwarding certain Swiggy endpoints (development only).

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm start
```

3. Build for production

```bash
npm run build
```

## Scripts

- `npm start` — start the Parcel dev server.
- `npm run build` — build production assets.
- `npm test` — run Jest tests.
- `npm run test:watch` — run tests in watch mode.

## Testing (how the test environment is set up)

This project uses Jest together with React Testing Library for component testing.

- Key testing libraries:

  - `jest` — test runner
  - `@testing-library/react` — utilities for rendering components and querying DOM
  - `@testing-library/jest-dom` — extended DOM matchers

- Test location: `src/components/__tests__/` contains unit tests for UI components (Header, Body, RestaurantCard, etc.).

- Mock data: tests use JSON mocks located in `src/components/Mocks/` (e.g., `mockResListData.json`, `restaurantCardMockData.json`).

- Common testing patterns used:
  - Wrap components that use `react-router` `Link` / `useNavigate` with `<BrowserRouter>` in tests.
  - Provide Redux store via `<Provider>` when a component reads from the store.
  - Mock `fetch` globally in tests that rely on network responses (see `search.test.js`).

How to run tests locally:

```bash
npm test
# Run a single test file in watch mode
npm run test -- src/components/__tests__/search.test.js
```

Troubleshooting common test errors:

- "Cannot find module '../Mocks/...'": add the missing JSON mock or correct the import path.
- Router context errors (e.g., `useContext(...) is null`): wrap the component in a `BrowserRouter` for the test.
- Use `screen` from `@testing-library/react` to query rendered elements instead of relying on DOM globals.

## Known development notes

- The restaurant menu component initially attempted to fetch from a Swiggy endpoint which can present CORS issues. For local development you can:
  1. Use the local JSON `src/utils/MenuData.js` (already included) to avoid network calls during development and testing.

2.  Or run the local proxy `node proxy-server.js` and point your requests to `http://localhost:4000/api/...` while developing.

- If the app shows a runtime error complaining about `react` and `react-dom` version mismatch, make sure both packages have identical versions in `package.json` and reinstall.

## Contributing / next steps I can take

- Commit and push the current changes (tests, mock data, component fixes) — I can do this on your behalf.
- Add CI config (GitHub Actions) to run `npm test` on pushes and pull requests.
- Improve test coverage on `Body.js` to better exercise the search and filtering flows.

---

If you want me to commit and push these README updates and any unstaged changes, tell me and I'll push them to `origin/main` for you.
