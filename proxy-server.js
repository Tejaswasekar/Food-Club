/*
  Simple development proxy server to avoid CORS when calling
  Swiggy's `/dapi/restaurants/list/update` endpoint from the browser.

  Requirements:
    - Node 18+ (uses global fetch). If you have older Node, install 'node-fetch' and adjust.

  Run:
    NODE_ENV=development node proxy-server.js

  The frontend can POST to: http://localhost:4000/api/restaurants/update
  and the server will forward the request to Swiggy and return the response.

  NOTE: This proxy is for local development only. Do not expose in production.
*/

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json({ limit: "1mb" }));

// Simple CORS allow for development — restrict this in production
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.post("/api/restaurants/update", async (req, res) => {
  try {
    const payload = req.body || {};
    // Forward to Swiggy update endpoint
    const SWIGGY_UPDATE = "https://www.swiggy.com/dapi/restaurants/list/update";

    // Use global fetch (Node 18+). If your Node is older, install node-fetch.
    const swiggyRes = await fetch(SWIGGY_UPDATE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/javascript, */*; q=0.01",
        // Some endpoints expect these headers; including them helps emulate browser requests
        Origin: "https://www.swiggy.com",
        Referer: "https://www.swiggy.com/",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(payload),
    });

    // Forward status and body
    const text = await swiggyRes.text();
    // Try to parse JSON, but if it's HTML/text just send raw
    try {
      const json = JSON.parse(text);
      res.status(swiggyRes.status).json(json);
    } catch (_e) {
      res.status(swiggyRes.status).send(text);
    }
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Proxy server running on http://localhost:${PORT}`);
  console.log(
    "POST /api/restaurants/update will be forwarded to Swiggy's update endpoint"
  );
});
