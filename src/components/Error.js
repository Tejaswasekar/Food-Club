import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div style={{ padding: 24 }}>
      <h1>Something went wrong</h1>

      {error ? (
        <div>
          {error.status ? (
            <p>
              Error {error.status}: {error.statusText || error.message}
            </p>
          ) : (
            <p>{error.message || "An unexpected error occurred."}</p>
          )}

          {error.stack && (
            <pre style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>
              {String(error.stack)}
            </pre>
          )}
        </div>
      ) : (
        <p>We couldn't find the page you're looking for.</p>
      )}
    </div>
  );
};

export default Error;
