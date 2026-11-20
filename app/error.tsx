"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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