"use client"
import Link from "next/link"
import { SquareUser, ArrowRightLeft, User, Cog, Bell, Bot } from 'lucide-react';


export default function Sidebar() {
  return (
    <nav className="flex flex-col items-center space-y-2">
      <div>
        <img src="/logo.png" alt="" />
      </div>
      <div className="flex flex-col gap-6 mt-4 text-gray-500">
        <ul className="flex flex-col gap-4 ">
          <li className="flex gap-2 py-3 px-5 hover:text-blue-800 transition duration-300 hover:rounded-md hover:bg-gray-100">
            <SquareUser />
            <Link href="#">Tableau de bord</Link>
          </li>
          <li className="flex gap-2 py-3 px-5 hover:text-blue-800 transition duration-300 hover:rounded-md hover:bg-gray-100">
            <ArrowRightLeft />
            <Link href="#">Mes transactions</Link>
          </li>
          <li className="flex gap-2 py-3 px-5 hover:text-blue-800 transition duration-300 hover:rounded-md hover:bg-gray-100">
            <User />
            <Link href="#">Mes clients</Link>
          </li>
          <li className="flex gap-2 py-3 px-5 hover:text-blue-800 transition duration-300 hover:rounded-md hover:bg-gray-100">
            <Bot />
            <Link href="#">Assitance</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 py-3 px-5 hover:text-blue-800 transition duration-300 hover:rounded-md hover:bg-gray-100">
            <Bell />
            <Link href="#">Mes notifications</Link>
          </li>
          <li className="flex gap-2 py-3 px-5 hover:text-blue-800 transition duration-300 hover:rounded-md hover:bg-gray-100">
            <Cog />
            <Link href="#">Réglages</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
