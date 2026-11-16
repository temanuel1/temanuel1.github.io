import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6">
      <p className="font-mono text-xs text-accent">404</p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight text-ink">Nothing here.</h1>
      <p className="mt-3 text-muted">That page doesn’t exist — but the rest of the site does.</p>
      <Link href="/" className="link mt-8 self-start text-ink">
        ← Back home
      </Link>
    </main>
  );
}
