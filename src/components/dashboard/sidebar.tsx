"use client"
import Link from "next/link"

export default function Sidebar() {
  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen bg-white p-4 items-center">
      <nav className="flex flex-col space-y-2">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#">Tableau de bord</Link>
            </li>
            <li>
              <Link href="#">Mes transactions</Link>
            </li>
            <li>
              <Link href="#">Mes clients</Link>
            </li>
            <li>
              <Link href="#">Assitance</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#">Mes notifications</Link>
            </li>
            <li>
              <Link href="#">Réglages</Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}
