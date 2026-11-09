
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>404 — Page Not Found</h1>

      <p>Looks like this page wandered off.</p>

      <Link href="/">Back to Home</Link>
    </div>
  );
}
