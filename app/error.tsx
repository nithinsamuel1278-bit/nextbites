"use client";

import { useEffect } from "react";

// Error boundary: catches unexpected errors and offers a Try again button
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <h1>Something went wrong</h1>
      <p>An unexpected error happened. Please try again.</p>
      <button className="retry" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}