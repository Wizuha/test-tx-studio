import Link from "next/link";
import { ReactNode } from "react";

export default function LayoutLogin({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-4 left-4 z-50">
        <Link href="/home">
          <img src="/logo.png" alt="logo" />
        </Link>
      </header>

      <main className="pt-16 px-4">
        {children}
      </main>
    </div>
  );
}
