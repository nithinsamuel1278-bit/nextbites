import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Recipe not found</h1>
      <p>We couldn't find what you were looking for.</p>
      <Link href="/" className="back">← Back to recipes</Link>
    </main>
  );
}